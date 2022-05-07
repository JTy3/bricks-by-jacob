import Head from "next/head";
import Navbar from "../navbar/navbar";

// Layout constants
export const siteTitle = "Lego Catalog by Jacob Tye";

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main>{children}</main>
    </div>
  );
}
