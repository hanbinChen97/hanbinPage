"use client";

import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import {
  FC,
  memo,
  MouseEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {isMobile} from "../../config";
import {PortfolioItem} from "../../data/dataDef";
import {getLocalizedData, SectionId} from "../../data/localizedData";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import {getTranslations} from "../../i18n/translations";
import Section from "../Layout/Section";

interface PortfolioProps {
  locale: string;
}

const Portfolio: FC<PortfolioProps> = memo(({locale}) => {
  const {portfolioItems} = getLocalizedData(locale);
  const t = getTranslations(locale);
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">
          {t.portfolio.title}
        </h2>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <PortfolioItemCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = "Portfolio";
export default Portfolio;

const PortfolioItemCard: FC<{ item: PortfolioItem }> = memo(({item}) => {
  const {title, description, image} = item;

  return (
    <article className="flex flex-col gap-y-6">
      <div
        className={classNames(
          "relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-black/40 lg:shadow-2xl",
        )}
      >
        <Image
          alt={title}
          className="object-cover"
          fill
          placeholder="blur"
          sizes="(min-width: 1280px) 40vw, (min-width: 768px) 45vw, 100vw"
          src={image}
        />
        <ItemOverlay item={item} />
      </div>
      <div className="flex flex-col gap-y-2 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-white/80">{description}</p>
      </div>
    </article>
  );
});

PortfolioItemCard.displayName = "PortfolioItemCard";

const ItemOverlay: FC<{ item: PortfolioItem }> = memo(
  ({item: {url, title, description}}) => {
    const [mobile, setMobile] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      // Avoid hydration styling errors by setting mobile in useEffect
      if (isMobile) {
        setMobile(true);
      }
    }, []);
    useDetectOutsideClick(linkRef as RefObject<HTMLElement>, () =>
      setShowOverlay(false),
    );

    const handleItemClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        if (mobile && !showOverlay) {
          event.preventDefault();
          setShowOverlay(!showOverlay);
        }
      },
      [mobile, showOverlay],
    );

    return (
      <a
        className={classNames(
          "absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300",
          {"opacity-0 hover:opacity-80": !mobile},
          showOverlay ? "opacity-80" : "opacity-0",
        )}
        href={url}
        onClick={handleItemClick}
        ref={linkRef}
        target="_blank"
      >
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="text-center font-bold text-white opacity-100">
              {title}
            </h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">
              {description}
            </p>
          </div>
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        </div>
      </a>
    );
  },
);
