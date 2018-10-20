import * as React from "react";
import MainTemplate from "../templates/MainTemplate";
import Header from "../organisms/header/Header";

interface SearchProps {
  title: string;
}

const Search: React.SFC<SearchProps> = () => (
  <MainTemplate>
    <Header />
  </MainTemplate>
);

export default Search;
