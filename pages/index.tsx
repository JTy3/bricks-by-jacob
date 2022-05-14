import type { NextPage } from "next";
import Head from "next/head";
import Jumbotron from "../components/jumbotron/jumbotron";
import Layout, { siteTitle } from "../components/layout/layout";

const Home: NextPage = () => {
  const content = [
    {
      title: "Discover Lego Themes",
      content: "The Lego theme catalog Tool is a great way to quickly and easily find the perfect Lego set for anyone. With a few clicks, you can search for sets by theme, price, or piece count. You can even narrow your search by age range, so you can be sure to find a set that's appropriate for your child. And if you're not sure what theme your child would like, you can browse through the hundreds of sets that are available. With so many options to choose from, the Lego theme catalog tool is the perfect way to find the perfect Lego set for anyone.",
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
