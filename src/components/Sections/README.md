# Sections 组件说明

本目录包含了个人网站的各个页面区域组件，每个组件负责不同的内容展示。

## 组件概述

### Header.tsx
网站顶部导航栏组件，包含以下功能：
- **响应式导航菜单**：支持桌面端和移动端不同的展示方式
- **页面锚点导航**：提供 About、Resume、Portfolio 等主要区域的快速跳转
- **当前页面高亮**：使用 `useNavObserver` Hook 监听页面滚动，高亮当前所在区域
- **语言切换器**：集成 `LanguageSwitcher` 组件支持多语言切换
- **移动端侧边栏**：使用 Headless UI 的 Dialog 组件实现滑动菜单

### Hero.tsx
网站首页英雄区域组件，作为访客的第一印象：
- **全屏背景图**：使用 Next.js Image 组件优化加载的个人头像背景
- **个人信息展示**：显示姓名、简介描述
- **社交媒体链接**：集成 `Socials` 组件展示各平台链接
- **行动按钮**：支持主要和次要操作按钮（如简历下载、联系方式等）
- **滚动指示器**：底部箭头引导用户向下浏览

### About.tsx
个人介绍区域组件：
- **个人头像**：显示个人照片（可选）
- **自我介绍**：包含详细的个人描述文本
- **个人信息列表**：展示关键信息项（如年龄、居住地、兴趣等）
- **技能轮播**：集成 `ImageMarquee` 组件展示技术栈和教育背景

### Portfolio.tsx
作品集展示组件：
- **网格布局**：响应式的项目卡片网格展示
- **项目卡片**：每个项目包含标题、描述、预览图
- **交互式遮罩层**：悬停或点击显示项目详情和外部链接
- **移动端适配**：针对触摸设备优化的交互体验
- **多语言支持**：使用 `getTranslations` 获取本地化文本

#### 如何添加新的 Portfolio 项目

要添加一个新的 Portfolio 卡片，需要按以下步骤操作：

**1. 准备项目图片**
- 将项目预览图放在 `/src/images/portfolio/` 目录下
- 建议使用 `.png` 或 `.webp` 格式，尺寸建议为 4:3 比例
- 文件名使用小驼峰命名，如：`myProjectImage.png`

**2. 在 data.tsx 中导入图片**
```tsx
// 在文件顶部添加导入
import myProjectImage from "../images/portfolio/myProjectImage.png";
```

**3. 在 portfolioItems 数组中添加新项目**
```tsx
export const portfolioItems: PortfolioItem[] = [
  // ...existing items
  {
    title: "我的新项目",
    description: "项目的详细描述，包括使用的技术栈和主要功能特点。",
    url: "https://github.com/username/project-repo", // 项目链接
    image: myProjectImage, // 导入的图片变量
  },
];
```

**4. PortfolioItem 接口定义**
每个项目必须包含以下属性：
- `title`: 项目标题（字符串）
- `description`: 项目描述（字符串）
- `url`: 项目链接，可以是 GitHub、演示网站等（字符串）
- `image`: 项目预览图，可以是导入的静态图片或字符串路径

**5. 多语言支持（可选）**
如果需要支持多语言，可以在 `localizedData.tsx` 中为不同语言创建不同的项目描述：
```tsx
// 在 getLocalizedData 函数中根据 locale 返回不同的描述
const portfolioDescriptions = {
  en: "English description",
  de: "German description", 
  zh: "中文描述"
};
```

**示例：添加一个完整的项目**
```tsx
// 1. 导入图片
import chatbotImage from "../images/portfolio/chatbot.png";

// 2. 在 portfolioItems 中添加
{
  title: "AI智能聊天机器人",
  description: "使用 OpenAI GPT-4 构建的智能聊天机器人，支持多轮对话、上下文理解和个性化回复。采用 React + Node.js 全栈开发，集成 Redis 缓存和 PostgreSQL 数据库。",
  url: "https://github.com/hanbinChen97/ai-chatbot",
  image: chatbotImage,
}
```

**注意事项：**
- 图片文件大小建议控制在 500KB 以内，以保证页面加载速度
- 项目描述建议控制在 100-200 字符，过长会影响卡片布局
- URL 必须是有效的链接，建议使用 HTTPS
- 新添加的项目会自动显示在 Portfolio 网格中，无需额外配置

### Resume/index.tsx
简历区域主组件：
- **教育经历**：展示学历背景
- **工作经验**：显示职业发展历程
- **时间线布局**：使用 `TimelineItem` 组件创建时间轴视图
- **分节显示**：通过 `ResumeSection` 组件分别展示不同类别

### Resume/ResumeSection.tsx
简历子区域组件：
- **区域标题**：为每个简历部分提供标题
- **内容容器**：为时间线项目提供布局容器

### Resume/TimelineItem.tsx
时间线项目组件：
- **时间节点**：显示具体的时间段
- **机构/公司**：展示学校或公司名称
- **职位/学位**：显示具体的角色或学位信息
- **详细描述**：包含工作内容或学习成果的详细说明

### Footer.tsx
网站底部组件：
- **返回顶部**：提供快速回到页面顶部的按钮
- **社交媒体链接**：再次展示社交平台链接
- **版权信息**：显示版权声明和当前年份
- **技术栈说明**：标注网站使用的技术框架

### ImageMarquee.tsx
技能轮播组件（About 组件的子组件）：
- **无限滚动**：使用 `react-fast-marquee` 实现平滑的横向滚动
- **技术标识**：展示各种技术栈 logo（React、Python、Java、Docker 等）
- **教育机构**：显示学习机构标识（RWTH、HSH）
- **AI 工具**：展示使用的 AI 工具（OpenAI、Claude）
- **渐变边缘**：提供视觉上的无缝滚动效果

## 技术特点

### 响应式设计
所有组件都采用 Tailwind CSS 的响应式类名，确保在不同设备上的良好显示效果。

### 国际化支持
各组件通过 `locale` 参数支持多语言，使用 `getLocalizedData` 和 `getTranslations` 获取本地化内容。

### 性能优化
- 使用 React.memo 进行组件记忆化
- Next.js Image 组件优化图片加载
- 适当的代码分割和懒加载

### 可访问性
- 支持键盘导航
- 提供适当的 ARIA 标签
- 语义化的 HTML 结构

### 交互体验
- 平滑的过渡动画
- 响应式的悬停效果
- 移动端友好的触摸交互