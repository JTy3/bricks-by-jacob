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
      <div className="alert alert-warning text-center" role="alert">
        <strong>Please note:</strong> this site is in beta version. It is being constantly built on. We will be sure to announce a full release in the near future.
      </div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="container">{children}</main>
    </div>
  );
}
