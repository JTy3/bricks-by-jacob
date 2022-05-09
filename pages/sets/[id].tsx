import Layout from "../../components/layout/layout";
import Head from "next/head";
import Jumbotron from "../../components/jumbotron/jumbotron";
import { getAllSetIds, getSetsData } from "../../lib/sets";

export async function getStaticProps({ params }: any) {
  const setData = await getSetsData(JSON.stringify(params.id));
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

export default function Set({ setData }: any) {
  const set = {
    title: setData.name,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    linkLabel: "Buy Set",
    linkUrl: '#',
    bgColor: "bg-light",
    txtColor: "dark",
  };

  return (
    <Layout>
      <Head>
        <title>{setData.name} - Lego Catalog by Jacob Tye</title>
      </Head>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/themes">Themes</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/themes/${setData.theme_id}`}>{setData.theme_name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {setData.name}
          </li>
        </ol>
      </nav>
      <div className="row my-3">
        <div className="col-md-12">
          <Jumbotron {...set}></Jumbotron>
        </div>
      </div>
    </Layout>
  );
}
