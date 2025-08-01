import dynamic from "next/dynamic";

import Page from "../../components/Layout/Page";
import About from "../../components/Sections/About";
import Footer from "../../components/Sections/Footer";
import Hero from "../../components/Sections/Hero";
import Portfolio from "../../components/Sections/Portfolio";
import Resume from "../../components/Sections/Resume";
import {getLocalizedData} from "../../data/localizedData";

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import("../../components/Sections/Header"), {
  ssr: false,
});

interface HomeProps {
  params: Promise<{ locale: string }>;
}

// eslint-disable-next-line react-memo/require-memo
const Home = async ({params}: HomeProps) => {
  const {locale} = await params;
  const {homePageMeta} = getLocalizedData(locale);
  const {title, description} = homePageMeta;

  return (
    <Page description={description} title={title}>
      <Header locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Resume locale={locale} />
      <Portfolio locale={locale} />
      <Footer locale={locale} />
    </Page>
  );
};

export default Home;
