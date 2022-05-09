import Layout from "../../components/layout/layout";
import Head from "next/head";
import { getAllThemeIds, getThemeData } from "../../lib/theme";
import { getThemesSets } from "../../lib/sets";
import Link from "next/link";
import Jumbotron from "../../components/jumbotron/jumbotron";

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
  const theme = {
    title: themeData[0].name,
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    linkLabel: "See More",
    bgColor: "bg-light",
    txtColor: "dark",
  };

  return (
    <Layout>
      <Head>
        <title>{themeData[0].name} Index - Lego Catalog by Jacob Tye</title>
      </Head>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/themes">Themes</a>
          </li>
          {themeData.length == 1 && (
            <li class="breadcrumb-item active" aria-current="page">
              <Link href={`/themes/${themeData[0].parent_id}`}>
                <a>{themeData[0].parent_name}</a>
              </Link>
            </li>
          )}
          <li class="breadcrumb-item active" aria-current="page">
            {themeData[0].name}
          </li>
        </ol>
      </nav>
      <div className="row my-4">
        <Jumbotron {...theme}></Jumbotron>
      </div>
      <div className="row my-4">
        {themeData.length > 1 && <h2>Child Themes</h2>}
        {themeData.length > 1 &&
          themeData.map((item) => (
            <div className="col-2 my-2 text-center" key={item.childId}>
              <div class="card">
                <img
                  src="https://www.pngfind.com/pngs/m/130-1307018_green-lego-brick-png-transparent-png.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{item.childName}</h5>
                  <Link href={`/themes/${item.childId}`}>
                    <a>See sets</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        <h2 className="mt-4">Individual Sets</h2>
        {themeSets.map((item) => (
          <div className="col-2 my-2 text-center" key={item.set_num}>
            <div class="card">
              <img
                src="https://www.pngfind.com/pngs/m/46-468741_lego-clipart-lego-castle-lego-hd-png-download.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link href={`/sets/${item.set_num}`}>
                  <a>Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
