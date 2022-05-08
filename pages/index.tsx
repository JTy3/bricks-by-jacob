import type { NextPage } from "next";
import Head from "next/head";
import Jumbotron from "../components/jumbotron/jumbotron";
import Layout, { siteTitle } from "../components/layout/layout";

const Home: NextPage = () => {
  const content = [
    {
      title: "Discover Lego Themes",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      linkLabel: "View All Themes",
      linkUrl: "/themes",
      bgColor: "bg-light",
      txtColor: "dark"
    },
    {
      title: "Meet New Minifigs!",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      linkLabel: "Explore Minifigs",
      linkUrl: "/themes",
      bgColor: "bg-warning",
      txtColor: "dark"
    },
    {
      title: "Need Spares?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      linkLabel: "Find Spare Parts",
      linkUrl: "/themes",
      bgColor: "bg-success",
      txtColor: "light"
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="row my-3">
        <div className="col-md-12">
          <Jumbotron {...content[0]}></Jumbotron>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Jumbotron {...content[1]}></Jumbotron>
        </div>
        <div className="col-md-6">
          <Jumbotron {...content[2]}></Jumbotron>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
