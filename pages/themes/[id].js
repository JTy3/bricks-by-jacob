import Layout from "../../components/layout/layout";
import Head from "next/head";
import { getAllThemeIds, getThemeData } from "../../lib/theme";

export async function getStaticProps({ params }) {
  const themeData = await getThemeData(params.id);
  return {
    props: {
      themeData,
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

export default function Theme({ themeData }) {
  return (
    <Layout>
      <Head>
        <title>{themeData.name}</title>
      </Head>
        <h1>{themeData.name}</h1>
    </Layout>
  )
}
