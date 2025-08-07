# 数据组织指南 / Data Organization Guide

本文档说明如何在此项目中组织和管理数据，以及如何将数据显示在网站上。

## 文件结构 / File Structure

```
src/data/
├── README.md              # 本文档
├── dataDef.ts            # 类型定义
├── data.tsx              # 主要数据配置 (非国际化)
├── localizedData.tsx     # 国际化数据配置
├── personalData.json     # 个人基础信息 (JSON格式)
└── translations.ts       # 翻译文本
```

## 数据流程 / Data Flow

### 1. 类型定义 (dataDef.ts)
- 定义所有数据结构的 TypeScript 类型
- 确保类型安全
- 包含: Hero, About, PortfolioItem, TimelineItem, SkillGroup, Social 等类型

### 2. 主要数据配置 (data.tsx)
- **用途**: 存储不需要国际化的数据
- **内容**: portfolioItems, socialLinks, skills 等
- **特点**: 
  - 直接导入图片
  - 包含静态配置数据
  - 作为 localizedData.tsx 的数据源

### 3. 国际化数据配置 (localizedData.tsx)
- **用途**: 处理多语言支持的数据
- **内容**: heroData, aboutData, education, experience
- **特点**: 
  - 使用 `getLocalizedData(locale)` 函数
  - 根据语言返回相应数据
  - 导入 data.tsx 中的静态数据

### 4. 个人信息 (personalData.json)
- **用途**: 存储基础个人信息
- **格式**: JSON
- **内容**: 联系方式、基本信息等

## 如何添加/修改数据 / How to Add/Modify Data

### 添加新的 Portfolio 项目

1. **添加项目图片**:
   ```bash
   # 将图片放入此目录
   src/images/portfolio/your-project.png
   ```

2. **更新 data.tsx**:
   ```typescript
   // 1. 导入图片
   import yourProjectImage from "../images/portfolio/your-project.png";
   
   // 2. 添加到 portfolioItems 数组
   export const portfolioItems: PortfolioItem[] = [
     // ... 现有项目
     {
       title: "Your Project Name",
       description: "项目描述",
       url: "https://github.com/your-repo",
       image: yourProjectImage,
     },
   ];
   ```

3. **自动显示**: 数据会自动在网站的 Portfolio 部分显示

### 修改 Hero 部分

在 `localizedData.tsx` 的 `getLocalizedData` 函数中修改 `heroData`:

```typescript
const heroData: Hero = {
  imageSrc: heroImage,
  name: t.hero.name, // 从翻译文件获取
  description: (
    // JSX 内容
  ),
  actions: [
    {
      href: "你的简历链接",
      text: t.hero.resumeButton,
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};
```

### 修改 About 部分

在 `localizedData.tsx` 中修改 `aboutData`:

```typescript
const aboutData: About = {
  profileImageSrc: profilepic,
  description: t.about.description,
  aboutItems: [
    {label: t.about.location, text: "你的位置", Icon: MapIcon},
    // ... 其他项目
  ],
};
```

### 添加 Resume 经历

在 `localizedData.tsx` 中修改 `education` 或 `experience` 数组:

```typescript
const experience: TimelineItem[] = [
  {
    date: "2024 - Present",
    location: "公司名称",
    title: "职位名称",
    content: (
      <p>
        工作描述
      </p>
    ),
  },
  // ... 其他经历
];
```

## 组件与数据的对应关系 / Component-Data Mapping

| 组件 (Component) | 数据源 (Data Source) | 说明 (Description) |
|------------------|---------------------|-------------------|
| Hero | `localizedData.tsx` → heroData | 首页横幅部分 |
| About | `localizedData.tsx` → aboutData | 关于我部分 |
| Portfolio | `localizedData.tsx` → portfolioItems | 项目展示部分 |
| Resume | `localizedData.tsx` → education, experience | 简历部分 |
| Footer | `localizedData.tsx` → socialLinks | 页脚社交链接 |

## 国际化支持 / Internationalization

### 支持的语言
- 英语 (en)
- 德语 (de) 
- 中文 (zh)

### 添加翻译文本
在 `src/i18n/translations.ts` 中添加新的翻译键值:

```typescript
export const translations = {
  en: {
    // 英文翻译
    yourNewKey: "Your English Text",
  },
  de: {
    // 德文翻译
    yourNewKey: "Ihr deutscher Text",
  },
  zh: {
    // 中文翻译
    yourNewKey: "你的中文文本",
  },
};
```

### 在组件中使用翻译
```typescript
const t = getTranslations(locale);
const text = t.yourNewKey;
```

## 最佳实践 / Best Practices

1. **图片优化**: 使用 WebP 或 PNG 格式，控制文件大小
2. **类型安全**: 始终使用 TypeScript 类型定义
3. **数据分离**: 静态数据放在 `data.tsx`，国际化数据放在 `localizedData.tsx`
4. **命名规范**: 使用驼峰命名法，保持一致性
5. **内容更新**: 修改数据后运行 `pnpm build` 验证

## 常见问题 / Common Issues

### Q: 为什么我的 Portfolio 项目没有显示？
A: 检查以下几点:
1. 图片是否正确导入到 `data.tsx`
2. 项目是否添加到 `portfolioItems` 数组
3. `localizedData.tsx` 是否正确引用了 `data.tsx` 的数据

### Q: 如何修改网站标题和描述？
A: 在 `localizedData.tsx` 的 `homePageMeta` 中修改，或在翻译文件中修改相应的文本。

### Q: 新添加的翻译文本没有生效？
A: 确保在 `src/i18n/translations.ts` 中为所有支持的语言都添加了相应的翻译。

## 部署注意事项 / Deployment Notes

- 修改数据后需要重新构建: `pnpm build`
- 确保所有图片文件都已提交到版本控制
- 验证所有语言版本都正常显示