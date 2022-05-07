import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout/layout";
import { sql_query } from "../lib/db";

export async function getStaticProps() {
  try {
    const result = await sql_query(`
      SELECT * FROM themes
  `);

    let allThemeData = JSON.parse(JSON.stringify(result));
    return {
      props: { allThemeData }, 
    };
  } catch (e) {
    return { props: { allThemeData: false } };
  }
}

export default function Themes(props) {
  const { allThemeData } = props;
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="row mt-3">
        <section>
          <div className="row">
            {
              allThemeData.map((item) => (
                <div className="col-2 border text-center" key={item.id}>
                  <Link href={`/themes/${item.id}`}>
                    <a>{item.name}</a>
                  </Link>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </Layout>
  );
}