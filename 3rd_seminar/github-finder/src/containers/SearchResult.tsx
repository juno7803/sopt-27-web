import React from "react";
import UserCard from "../components/search/UserCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from 'styled-components';

const LoadingWrap = styled.div`
  color: #ffffff;
  font-size: 10rem;
`;

const ErrorWrap = styled.div`
  color: #ffffff;
  font-size: 10rem;
`;

function SearchResult() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.userReducer.userData
  );

  return (
    <>
      {loading && <LoadingWrap> Loading... </LoadingWrap>}
      {error && <ErrorWrap>Error Occurred</ErrorWrap>}
      {data && <UserCard user={data} />}
    </>
  );
}

export default SearchResult;
