使用 context7 mcp 了解 react-fast-marquee 的用法。
https://www.npmjs.com/package/react-fast-marquee?activeTab=readme

npm install react-fast-marquee --save
使用 pnpm 安装

我先要的效果是 images 在屏幕上滚动，滚动速度是 30px/s，滚动方向是向左。

## 开发计划

### 需求分析
- 使用 `react-fast-marquee` 实现图片滚动效果
- 滚动速度：30px/s
- 滚动方向：向左
- 图片已放置在 `src/images/marquee/` 目录下

### 修改的文件和功能

#### 1. 安装依赖
- 使用 `pnpm add react-fast-marquee` 安装依赖

#### 2. 创建新的 Marquee 组件
**文件：** `src/components/Sections/ImageMarquee.tsx`
**功能：**
- 创建独立的图片滚动组件
- 配置滚动速度为 30px/s
- 设置向左滚动方向
- 支持响应式设计

#### 3. 集成到现有页面
**文件：** `src/app/[locale]/page.tsx`
**功能：**
- 在合适的位置添加 ImageMarquee 组件
- 确保与现有布局协调

#### 4. 图片资源管理
**目录：** `src/images/marquee/`
**功能：**
- 使用已放置的图片
- 优化图片尺寸和格式
- 确保图片加载性能

### 预计实现的功能

1. **基础滚动效果**
   - 图片水平向左滚动
   - 固定滚动速度 30px/s
   - 无缝循环播放

2. **响应式设计**
   - 移动端适配
   - 不同屏幕尺寸的优化

3. **性能优化**
   - 图片懒加载
   - 适当的图片尺寸
   - 流畅的滚动体验

### 技术考虑

1. **性能**：使用 Next.js 的 Image 组件优化加载
2. **可访问性**：添加适当的 alt 文本
3. **配置化**：将图片列表和滚动配置提取为可配置项


我已经在 src/images/marquee/ 下放了两个图片。
请你实现效果