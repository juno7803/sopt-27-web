import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { RootState } from "../../store";
import { getUserProfile } from "../../store/action/user";
import SearchResult from "../searchResult/SearchResult";

function SearchInput() {
  const [input,setInput] = useState("");
  const {data, loading, error} = useSelector((state:RootState)=>state.userReducer.userData);
  const dispatch = useDispatch();

  const handleSumbit = (e:React.FormEvent<HTMLInputElement>) =>{
    console.log("handle Submit 실행");
    e.preventDefault();
    dispatch(getUserProfile.request(input));
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setInput(e.target.value);
  }

  return (
    <>
      <form>
        <input 
          type="text" 
          placeholder="Github 프로필을 검색해보세요" 
          onSubmit={handleSumbit}
          onChange={handleChange}
        />
      </form>
      {loading && <div>로딩중 ... </div>}
      {error && <div>에러 발생</div>}
      {data && <SearchResult name={data.name}/>}
    </>
  );
}

export default SearchInput;
