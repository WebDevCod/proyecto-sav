import Layout from "../layout/Layout";

export default function Home() {
  return (
    <Layout>
      <img
        src={require("../img/bg-home.jpg")}
        className="d-block w-100"
        alt="Collage"
      />
    </Layout>
  );
}