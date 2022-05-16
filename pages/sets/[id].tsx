import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
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
  const [partsList, setPartsList] = useState([]);

  const set = {
    title: setData.name,
    badge: null,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    linkLabel: "Buy Set",
    linkUrl: "#",
    bgColor: "bg-light",
    txtColor: "dark",
  };

  useEffect(() => {
    fetch(`/api/sets/${setData.set_num}`)
      .then((results) => results.json())
      .then((data) => {
        setPartsList(data);
      });
  }, []);

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
      <div className="row my-3 p-3">
        {partsList.length > 1 ? (
          <h2>Parts List for {setData.name}</h2>
        ) : (
          <h4>Loading parts...</h4>
        )}
        <table className="table">
          {partsList.length > 1 ? (
            <thead>
              <tr>
                <th scope="col">Part No.</th>
                <th scope="col">Part Name</th>
                <th scope="col">Part Color</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
          ) : ( <></> )}
          <tbody>
            {partsList.length > 1 &&
              partsList.map((item: any) => (
                <tr key={item.part_num}>
                  <th scope="row">{item.part_num}</th>
                  <td>{item.part_name}</td>
                  <td>{item.color_name} - <i className="bi bi-circle-fill" style={{color: `#${item.color_code}`}}></i></td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
