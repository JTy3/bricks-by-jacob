import Layout from "../../components/layout/layout";
import Head from "next/head";
import { getAllSetIds, getSetsData } from "../../lib/sets";

export async function getStaticProps({ params }) {
  const setData = await getSetsData(params.id);
  return {
    props: {
      setData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllSetIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Set({ setData }) {
  return (
    <Layout>
      <Head>
        <title>{setData.name}</title>
      </Head>
      <h1>{setData.name}</h1>
    </Layout>
  );
}
