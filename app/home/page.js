import requests from "../../services/api/requests";

import Hero from "./Hero";
import Content from "./Content";

const getCars = async () => {
  const resp = await requests.getCars();
  return resp?.brandranges;
};

const Home = async () => {
  const data = await getCars();

  return (
    <div>
      <Hero />
      <Content items={data ?? []} />
    </div>
  );
};

export default Home;
