import getConfig from "next/config";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./share/Footer";
import Header from "./share/Header";

const { publicRuntimeConfig } = getConfig();

type LayoutProps = {
  title?: string;
  description?: string;
  date?: string;
  socialPreview?: string;
  children: React.ReactNode;
};

const Layout = ({ children, ...customMeta }: LayoutProps) => {
  const router = useRouter();
  const { asPath } = router;

  const { title } = publicRuntimeConfig.site;

  const meta = {
    title,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
