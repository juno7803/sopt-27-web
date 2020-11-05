import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../store/action/user";
import SearchInput from "../components/SearchInput";
import styled from 'styled-components';

export const SearchInputWrapper = styled.input`
  background-color: #24272b;
  border-radius: 10px;
  border: none;
  color: #b6b7b8;
  font-family: inherit;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 320px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b6b7b8;
  }
`;

export interface ISearchInput {
    input: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

function SearchInputContainer() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getUserProfile.request(input));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <SearchInput
      input={input}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default SearchInputContainer;
