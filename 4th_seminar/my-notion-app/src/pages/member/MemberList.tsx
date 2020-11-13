import React, { useState, useEffect } from "react";
import "./MemberList.scss";
import Button from "../../components/button/Button";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import Card from "../../components/card/Card";

export interface Imembers{
  id: number;
  instagram: string;
  introduction: string;
  mbti: string;
  name: string;
  profileUrl: string;
};

function MemberList() {
  const [memberState, setMemberState] = useState({
    members: [],
    status: "idle",
  }); // 서버에서 데이터가 안 넘어오는 등의 상황에 대한 처리를 위해서 작성
  
  useEffect(() => {
    (async () => {
      setMemberState({ members: [], status: "pending" });
      try {
        const result = await axios.get(
          "http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members"
        );
        setMemberState({
          members: result.data.data,
          status: "resolved",
        });
      } catch (e) {
        setMemberState({
          members: [],
          status: "rejected",
        });
      }
    })();
  }, []);

  switch (memberState.status) {
    case "pending":
      return <Loading />;
    case "rejected":
      return <div>실패</div>;
    case "resolved":
      return (
        <div className="member-list">
          <div className="member-list__title">파트원 소개</div>
          <div className="member-list__header member-list-header">
            <div className="member-list-header__nav">Gallery View</div>
            <div className="member-list-header__empty"></div>
            <Button text="Properties" textColor="#777"></Button>
            <Button text="Filter" textColor="#777"></Button>
            <Button text="Sort" textColor="#777"></Button>
            <Button text="Search" textColor="#777"></Button>
            <Button text="..." textColor="#777"></Button>
          </div>
          <hr />
          <div className="member-list-content-wrapper">
            {memberState.members &&
              memberState.members.map((member: Imembers) => (
                <Card key={`member-${member.id}`} memberData={member}></Card>
              ))}
          </div>
        </div>
      );
    case "idle":
    default:
      return <div>idle 입니다.</div>;
  }
}

export default MemberList;
