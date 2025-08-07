# 国际化开发指南 (i18n Development Guide)

## 概述

本项目使用自定义的国际化系统，支持三种语言：德语(de)、英语(en)、中文(zh)。目前已实现基础的翻译系统，但仍有部分页面需要完成国际化改造。

## next-intl 与 i18n 的关系

### 概念关系

**i18n (Internationalization)** 是一个通用的概念和缩写，代表"国际化"。它描述了让应用程序支持多种语言和地区的整体过程。

**next-intl** 是一个具体的实现库，专门为 Next.js 应用提供 i18n 功能。

### 关系层次

```
i18n (概念)
├── next-intl (Next.js 专用实现)
├── react-intl (React 通用实现)
├── vue-i18n (Vue 专用实现)
└── 其他 i18n 库...
```

### 主要区别

#### i18n (概念层面)
- **定义**: 国际化/本地化的通用术语
- **范围**: 涵盖所有多语言支持的技术和策略
- **实现**: 不特指某个具体库

#### next-intl (具体实现)
- **定位**: 专门为 Next.js 设计的 i18n 解决方案
- **特性**: 
  - 与 Next.js App Router 深度集成
  - 支持服务端和客户端渲染
  - 内置路由国际化
  - TypeScript 支持
  - 性能优化

### 在项目中的应用

从项目结构看，我们已经在使用 `next-intl` 的概念：

```typescript
// src/i18n/translations.ts - 翻译文件管理
// src/i18n/request.ts - 请求处理
// src/app/[locale]/ - 国际化路由
```

### 最佳实践

1. **保持当前架构** - `[locale]` 路由结构是标准做法
2. **使用 next-intl** - 它与 Next.js + TypeScript 技术栈完美匹配
- 使用 `next-intl` 处理所有国际化需求
- 保持翻译文件的结构化组织
- 利用 TypeScript 类型安全
- 考虑添加语言检测和切换功能


## 技术架构

### 1. 翻译系统结构

```typescript
// src/i18n/translations.ts
export interface Translations {
  hero: { title: string; subtitle: string; ... }
  categories: { title: string; cleaning: { title: string; ... } }
  // ... 更多翻译接口
}

export const translations: Record<string, Translations> = {
  de: { /* 德语翻译 */ },
  en: { /* 英语翻译 */ },
  zh: { /* 中文翻译 */ }
}

export function getTranslations(locale: string): Translations
```

### 2. 路由系统

- 使用 Next.js App Router 的 `[locale]` 动态路由
- 支持路径：`/de`, `/en`, `/zh`
- 中间件处理根路径重定向到默认语言 `/de`

### 3. 语言切换

- `LanguageSwitcher` 组件处理语言切换逻辑
- 使用 cookies 记住用户语言偏好
- 自动保持当前页面路径切换语言

## 开发指南

### 快速入门 (Step-by-Step)

#### 步骤 1: 为新页面添加翻译

1. 在 `src/i18n/translations.ts` 中添加新的翻译接口：

```typescript
export interface Translations {
  // 现有翻译...
  newPage: {
    title: string
    button: string
    // ... 添加所需的翻译键
  }
}
```

2. 为每种语言添加翻译内容：

```typescript
export const translations: Record<string, Translations> = {
  de: {
    // 现有翻译...
    newPage: {
      title: "德语标题",
      button: "德语按钮"
    }
  },
  en: {
    // 现有翻译...
    newPage: {
      title: "English Title",
      button: "English Button"
    }
  },
  zh: {
    // 现有翻译...
    newPage: {
      title: "中文标题",
      button: "中文按钮"
    }
  }
}
```

#### 步骤 2: 在页面组件中使用翻译

```typescript
// 服务端组件 (页面)
import { getTranslations } from "@/i18n/translations"

export default async function NewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  
  return (
    <div>
      <h1>{t.newPage.title}</h1>
      <button>{t.newPage.button}</button>
    </div>
  );
}

// 客户端组件
'use client'
import { useParams } from 'next/navigation'
import { getTranslations } from '@/i18n/translations'

export function NewComponent() {
  const params = useParams();
  const locale = params?.locale as string || 'de';
  const t = getTranslations(locale);
  
  return <h1>{t.newPage.title}</h1>;
}
```

#### 步骤 3: 处理链接和导航

确保所有内部链接包含 locale 参数：

```typescript
// ✅ 正确
<Link href={`/${locale}/jobs`}>Jobs</Link>

// ❌ 错误
<Link href="/jobs">Jobs</Link>
```

## 开发规范

### 1. 翻译键命名规范

- 使用驼峰命名法：`heroTitle`, `submitButton`
- 按功能模块分组：`hero.title`, `form.submitButton`
- 描述性命名，避免简写：`navigationMenu` 而不是 `navMenu`

### 2. 翻译内容规范

- **英语**：作为默认语言，翻译要准确、正式
- **德语**：简洁明了
- **中文**：使用简体中文，符合中国用户习惯

### 3. 代码规范

- 服务端组件使用 `await params` 获取 locale
- 客户端组件使用 `useParams()` 获取 locale
- 始终提供 fallback 语言：`locale || 'de'`


### 待完成的国际化任务

#### 高优先级任务

1. **QuickMatchForm 组件国际化**
   - 需要翻译：表单标题、字段标签、选项文字、按钮文字
   - 文件：`src/components/forms/QuickMatchForm.tsx`
   - 硬编码文字：60+ 个德语字符串

2. **匹配结果页面国际化**
   - 需要翻译：加载提示、成功消息、统计标签、按钮文字
   - 文件：`src/app/[locale]/matching-results/page.tsx`
   - 硬编码文字：25+ 个德语字符串

3. **更新资料页面国际化**
   - 需要翻译：表单字段、选项、提示文字
   - 文件：`src/app/[locale]/update-profile/page.tsx`
   - 硬编码文字：100+ 个中文字符串

#### 中等优先级任务

4. **职位列表页面国际化**
   - 文件：`src/app/[locale]/jobs/page.tsx`
   - 硬编码文字：10+ 个德语字符串

5. **快速匹配页面国际化**
   - 文件：`src/app/[locale]/quick-match/page.tsx`
   - 硬编码文字：10+ 个德语字符串

6. **个人资料页面国际化**
   - 文件：`src/app/[locale]/profile/page.tsx`
   - 硬编码文字：10+ 个英语字符串

#### 低优先级任务

7. **组件国际化**
   - `src/components/ProfileCompletionBanner.tsx`
   - `src/components/JobCard.tsx`



### 4. 测试规范

测试语言切换功能：
1. 访问 `http://localhost:3000/de`
2. 使用语言切换器切换到英语/中文
3. 验证 URL 变更：`/en` 或 `/zh`
4. 验证页面内容语言变更
5. 验证导航链接正确包含 locale

## 常见问题

### Q: 如何处理复杂的文本插值？

```typescript
// translations.ts
welcomeMessage: "欢迎 {name}，您有 {count} 个新消息"

// 组件中
const message = t.welcomeMessage
  .replace('{name}', userName)
  .replace('{count}', messageCount.toString())
```

### Q: 如何处理复数形式？

```typescript
// translations.ts
jobCount: {
  zero: "没有工作",
  one: "{count} 个工作", 
  other: "{count} 个工作"
}

// 建议创建辅助函数处理复数
function pluralize(count: number, translations: any) {
  if (count === 0) return translations.zero
  if (count === 1) return translations.one
  return translations.other.replace('{count}', count)
}
```

### Q: 如何确保新增的翻译完整性？

在添加新翻译时，确保在 `de`、`en`、`zh` 三种语言中都添加对应的翻译内容，避免遗漏。

## 多语言方案分析

### 当前方案：基于路由的国际化 (Route-based i18n)

**实现特点：**
- 使用 `[locale]` 动态路由
- 通过 `next-intl` 中间件处理语言重定向
- 支持 `de`、`en`、`zh` 三种语言
- 默认语言为英语 (`en`)

**URL 结构：**
```
/de/quick-match     # 德语版本
/en/quick-match     # 英语版本  
/zh/quick-match     # 中文版本
```

**优势：**
- ✅ SEO 友好，每个语言版本有独立 URL
- ✅ 符合 Next.js App Router 最佳实践
- ✅ 实现相对简单
- ✅ 支持静态生成和预渲染

**劣势：**
- ❌ 语言切换需要页面刷新
- ❌ URL 结构相对复杂