import Layout from "../../components/layout/layout";
import Head from "next/head";
import Link from "next/link";
import Jumbotron from "../../components/jumbotron/jumbotron";
import { getAllSetIds, getSetsData } from "../../lib/sets";
import { getSetPartsList } from "../../lib/parts";

export async function getStaticProps({ params }: any) {
  const setData = await getSetsData(JSON.stringify(params.id));
  const partsList = await getSetPartsList(JSON.stringify(params.id));
  return {
    props: {
      setData,
      partsList,
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

export default function Set({ setData, partsList }: any) {
  const set = {
    title: setData.name,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    linkLabel: "Buy Set",
    linkUrl: "#",
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
            <Link href="/themes">
              <a>Themes</a>
            </Link>
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
      <div className="row my-5">
        {partsList.length > 1 && <h2>Parts List for {setData.name}</h2>}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Part No.</th>
              <th scope="col">Part Color</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {partsList.length > 1 &&
              partsList.map((item: any) => (
                <tr key={item.part_num}>
                  <th scope="row">{item.part_num}</th>
                  <td>{item.color_id}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
