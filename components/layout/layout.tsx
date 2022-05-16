import Head from "next/head";
import Navbar from "../navbar/navbar";

// Layout constants
export const siteTitle = "Lego Catalog by Jacob Tye";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className="alert alert-info text-center" role="alert">
        <strong>Please note:</strong> this site is in beta version. It is being constantly built on. I will be sure to announce a full roadmap in the near future; which will contain details about when you can lodge bugs and feature requests.
      </div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="container border p-3 mb-5">{children}</main>
    </div>
  );
}
