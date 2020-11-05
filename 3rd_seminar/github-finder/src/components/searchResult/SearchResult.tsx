import React from "react";

interface IResult {
  name: string;
}

function SearchResult({name}:IResult) {
  return (
    <>
      <div>
       SearchResult
       {name}
       {/* 써야하는 정보 : repo -> html_url */}
      </div>
    </>
  );
}

export default SearchResult;
