# 项目 i18n 技术说明

## 1. 架构概览
- 框架：Next.js 14（App Router）+ TypeScript
- 国际化：`next-intl`（服务端配置）+ 自维护的翻译词典
- 支持语言：英语(en)、德语(de)、中文(zh)，默认英语
- 核心思想：请求入口强制携带语言前缀，借由 typed 翻译对象驱动所有 UI 文案

## 2. 关键目录
```
src/
├── app/
│   ├── page.tsx              # 根路径重定向 / → /en
│   └── [locale]/             # 每种语言共享的 App Router 入口
│       ├── layout.tsx        # 语言上下文、Metadata 与 <html lang>
│       └── page.tsx          # 多语言首页，按 locale 拼装组件
├── i18n/
│   ├── translations.ts       # 翻译接口与所有语言的文本
│   └── request.ts            # next-intl 请求配置
├── data/localizedData.tsx    # 依据翻译构造各 section 所需数据
├── components/               # 各功能组件，按需读取翻译
└── middleware.ts             # 请求级别的语言重定向与 Cookie 记忆
```

## 3. 请求流程
1. **Middleware**：`middleware.ts:3-47` 拦截所有页面请求，检测路径是否含 `/en|de|zh`。若缺失，则优先读取 `locale` Cookie，否则回退默认 `en`，并重定向到对应语言路径。
2. **根路由**：`src/app/page.tsx` 将 `/` 立即 `redirect("/en")`，保证 App Router 始终工作在显式语言段下。
3. **Layout**：`src/app/[locale]/layout.tsx` 通过 `generateStaticParams()` 预生成语言列表，并在 `generateMetadata()` 中写入各语言的 title/description 与开放平台信息，同时把 `<html lang={locale}>` 注入最终文档。
4. **Page**：`src/app/[locale]/page.tsx` 读取 `params.locale`，调用 `getLocalizedData(locale)` 拉取所有 section 数据，并把 `locale` 逐级传入客户端组件。

## 4. 翻译词典与回退
- `src/i18n/translations.ts` 定义 `Translations` 接口，对必须存在的文案做类型约束，减少遗漏。
- `translations` 对象收集三种语言的所有文案；`getTranslations(locale)` 保证传入未知语言时返回英语作为回退，避免渲染失败。
- 当新增键时 TypeScript 会在未提供翻译的语言上报错，促使开发者一次补齐。

## 5. 数据本地化层
- `src/data/localizedData.tsx` 是所有页面 section 的数据聚合器：
  - 引入 `getTranslations(locale)` 获取文案
  - 根据翻译拼装 Hero、About、Resume、Portfolio 等结构化数据
  - 对于不需翻译的事实型信息（地点、时间线内容等）直接内联英文原文
- Server 组件与 Client 组件都通过该函数保持一致的数据来源，避免重复处理。

## 6. 组件层中的使用方式
- **服务端组件**（例如 `Hero`, `About` 等）在渲染前使用 `getLocalizedData(locale)` 获取完整数据对象，并直接解构使用。
- **客户端组件**：
  - `LanguageSwitcher` 通过 `useParams()` 获取当前语言，调用 `getTranslations` 渲染下拉选项文本，并在切换时写入 `locale` Cookie + 重写 URL。
  - `Header`、`Portfolio` 等动态组件以 `locale` 为入参，内部继续拉取翻译或数据。
- **独立翻译调用**：对于仅需少量文案的组件（如 `Footer`, `Resume`），直接调用 `getTranslations(locale)`，组合本地化标题与信息。

## 7. 语言切换逻辑
- `src/components/LanguageSwitcher.tsx`
  - 读取当前路径 `usePathname()`，把前缀 locale 替换成新语言，保持其余 hash/query。
  - 写入 `document.cookie = "locale=..."` 并 `router.push(newPath)`，触发客户端导航。
  - 下拉选项文本来自翻译表的 `t.languages.*`，确保标题也本地化。
- 中间件读取该 Cookie，可实现下一次访问直接落在用户上次选择的语言。

## 8. SEO 与可访问性
- `generateMetadata` 保证每个语言版本拥有对应的 `<title>`、`<meta name="description">`、OpenGraph、Twitter Meta，使分享卡片与 SEO 友好。
- `<html lang={locale}>` 为浏览器、屏幕阅读器提供正确语言标注。

## 9. 扩展 / 新增语言步骤
1. 在 `translations.ts` 中新增语言键值对（完整实现 `Translations` 接口）。
2. 更新 `middleware.ts` 的 `locales` 数组，并调整 `defaultLocale`（可选）。
3. 在 `generateStaticParams()` 添加新语言，以便构建阶段生成页面。
4. 视需要为数据层补充对应语言的数据或保持英文。
5. 手动验证：
   - `/new-locale` 路由是否渲染
   - 语言切换器下拉/ Cookie 是否生效
   - Metadata 与页面内容是否对应

## 10. 常见问题排查
- **缺少翻译**：TypeScript 会提示 `translations` 未满足接口；若运行期仍看到英文，说明触发了 fallback，需要补齐该语言文本。
- **路径未更新**：确认 `LanguageSwitcher` 中对 `pathname.replace` 的逻辑无需额外前缀（App Router 默认 `/locale/...`）。
- **交互组件报错**：确保需要 hooks 的组件声明 `'use client'` 并保持 `locale` props 一致。

该文档可作为维护 i18n 功能的操作手册；若未来引入 `NextIntlProvider` 或动态加载词典，可在此基础上继续迭代。
