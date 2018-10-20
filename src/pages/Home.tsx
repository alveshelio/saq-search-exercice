import * as React from "react";

interface HomeProps {
  title: string;
}

const Home: React.SFC<HomeProps> = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default Home;
