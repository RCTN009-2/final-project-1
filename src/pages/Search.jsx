import React from "react";
import NewsComponent from "../components/Content";
import { useParams } from "react-router-dom";

const Search = () => {
  const { q } = useParams();
  return <NewsComponent title={`Search ${q}`} category={q} />;
};

export default Search;
