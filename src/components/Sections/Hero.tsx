import {ChevronDownIcon} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import {FC, memo} from "react";

import {getLocalizedData, SectionId} from "../../data/localizedData";
import Section from "../Layout/Section";
import Socials from "../Socials";

interface HeroProps {
  locale: string;
}

/**
 * Hero Section Component - 主页面英雄区域组件
 * 
 * 布局描述 (Layout Description):
 * - 全屏高度 (h-screen) 的主容器，相对定位用于层叠背景图片和内容
 * - 背景层：全屏背景图片，使用 Next.js Image 组件进行优化，z-index: 0
 * - 内容层：居中的内容区域，z-index: 10，包含：
 *   - 半透明背景卡片 (bg-gray-800/40 + backdrop-blur-sm) 提供内容可读性
 *   - 响应式标题文字 (text-4xl/5xl/7xl)
 *   - 描述文本
 *   - 社交媒体链接组件
 *   - 操作按钮组 (主要和次要按钮)
 * - 底部导航：绝对定位的向下箭头按钮，指向 About 部分
 * 
 * 响应式设计：
 * - 移动端：较小的文字尺寸和间距
 * - 桌面端：更大的文字和更宽的最大宽度 (max-w-screen-lg)
 * 
 * @param props - 组件属性
 * @param props.locale - 当前语言区域设置，用于获取本地化数据
 * @returns 渲染的 Hero 区域组件
 */
const Hero: FC<HeroProps> = memo(({locale}) => {
  const {heroData} = getLocalizedData(locale);
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              {name}
            </h1>

            {description}
            
            <div className="flex gap-x-4 text-neutral-100">
              <Socials locale={locale} />
            </div>
            
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    "flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base",
                    primary
                      ? "border-orange-500 ring-orange-500"
                      : "border-white ring-white",
                  )}
                  href={href}
                  key={text}
                >
                  {text}
                  {Icon && (
                    <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/${locale}#${SectionId.About}`}
          >
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = "Hero";
export default Hero;
