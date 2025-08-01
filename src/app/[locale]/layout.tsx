import {Metadata} from "next";
import {ReactNode} from "react";

import {getLocalizedData} from "../../data/localizedData";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const {locale} = await params;
  const {homePageMeta} = getLocalizedData(locale);

  return {
    title: homePageMeta.title,
    description: homePageMeta.description,
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
      title: homePageMeta.title,
      description: homePageMeta.description,
      url: `https://hanbinpage.vercel.app/${locale}`,
      siteName: homePageMeta.title,
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: homePageMeta.title,
      description: homePageMeta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const {locale} = await params;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

export function generateStaticParams() {
  return [{locale: "en"}, {locale: "de"}, {locale: "zh"}];
}
