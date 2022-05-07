import Layout from "../../components/layout/layout";
import Head from "next/head";
import { getAllThemeIds, getThemeData } from "../../lib/theme";
import { getThemesSets } from "../../lib/sets";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const themeData = await getThemeData(params.id);
  const themeSets = await getThemesSets(params.id);
  return {
    props: {
      themeData,
      themeSets,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllThemeIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Theme({ themeData, themeSets }) {
  return (
    <Layout>
      <Head>
        <title>{themeData.name}</title>
      </Head>
      <h1>{themeData.name}</h1>
      <div className="row">
        {themeSets.map((item) => (
          <div className="col-2 border text-center" key={item.set_num}>
            <Link href={`/sets/${item.set_num}`}>
              <a>{item.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
