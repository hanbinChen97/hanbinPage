"use client";

import {Dialog, Transition} from "@headlessui/react";
import {Bars3BottomRightIcon} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import {FC, Fragment, memo, useCallback, useMemo, useState} from "react";

import {SectionId} from "../../data/localizedData";
import {useNavObserver} from "../../hooks/useNavObserver";
import LanguageSwitcher from "../LanguageSwitcher";

export const headerID = "headerNav";

interface HeaderProps {
  locale: string;
}

const Header: FC<HeaderProps> = memo(({locale}) => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Portfolio],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(
    navSections.map((section) => `#${section}`).join(","),
    intersectionHandler,
  );

  return (
    <>
      <MobileNav
        currentSection={currentSection}
        locale={locale}
        navSections={navSections}
      />
      <DesktopNav
        currentSection={currentSection}
        locale={locale}
        navSections={navSections}
      />
    </>
  );
});

const DesktopNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  locale: string;
}> = memo(({navSections, currentSection, locale}) => {
  const baseClass =
    "-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100";
  const activeClass = classNames(baseClass, "text-orange-500");
  const inactiveClass = classNames(baseClass, "text-neutral-100");
  return (
    <header
      className="fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block"
      id={headerID}
    >
      <nav className="flex justify-between items-center">
        <div className="flex justify-center gap-x-8 flex-1">
          {navSections.map((section) => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              locale={locale}
              section={section}
            />
          ))}
        </div>
        <LanguageSwitcher />
      </nav>
    </header>
  );
});

const MobileNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  locale: string;
}> = memo(({navSections, currentSection, locale}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const baseClass =
    "p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";
  const activeClass = classNames(
    baseClass,
    "bg-neutral-900 text-white font-bold",
  );
  const inactiveClass = classNames(baseClass, "text-neutral-200 font-medium");
  return (
    <>
      <button
        aria-label="Menu Button"
        className="fixed right-2 top-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"
        onClick={toggleOpen}
      >
        <Bars3BottomRightIcon className="h-8 w-8 text-white" />
        <span className="sr-only">Open sidebar</span>
      </button>
      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex sm:hidden"
          onClose={toggleOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative w-4/5 bg-stone-800">
              <nav className="mt-5 flex flex-col gap-y-2 px-2">
                {navSections.map((section) => (
                  <NavItem
                    activeClass={activeClass}
                    current={section === currentSection}
                    inactiveClass={inactiveClass}
                    key={section}
                    locale={locale}
                    onClick={toggleOpen}
                    section={section}
                  />
                ))}
                <div className="mt-4 px-2">
                  <LanguageSwitcher />
                </div>
              </nav>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  locale: string;
  onClick?: () => void;
}> = memo(
  ({section, current, inactiveClass, activeClass, locale, onClick}) => {
    return (
      <Link
        className={classNames(current ? activeClass : inactiveClass)}
        href={`/${locale}#${section}`}
        key={section}
        onClick={onClick}
      >
        {section}
      </Link>
    );
  },
);

Header.displayName = "Header";
export default Header;
