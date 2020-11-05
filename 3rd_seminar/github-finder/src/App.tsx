import React from "react";
import SearchInput from '../src/components/searchInput/SearchInput';
import SearchResult from "./components/searchResult/SearchResult";
import {getUser} from "./lib/api/user";

function App() {

  return( 
  <>
    <SearchInput></SearchInput>
  </>);
}

export default App;
