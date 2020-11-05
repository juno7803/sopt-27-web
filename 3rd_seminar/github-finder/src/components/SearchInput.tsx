import React from "react";
import {
  ISearchInput,
  SearchInputWrapper,
} from "../containers/SearchInputContainer";

function SearchInput({ input, handleSubmit, handleChange }: ISearchInput) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchInputWrapper
          type="text"
          placeholder="Github 프로필을 검색해보세요"
          onChange={handleChange}
          value={input}
        />
      </form>
    </>
  );
}

export default SearchInput;
