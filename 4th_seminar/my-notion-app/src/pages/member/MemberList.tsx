import React,{useState, useEffect} from "react";
import "./MemberList.scss";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import axios from 'axios';
import Loading from '../../components/loading/Loading';

function MemberList() {
    const [members, setMembers] = useState([]);
    const [membersState, setMembersState] = useState({
        members: null,
        status: 'idle',
    }); // 서버에서 데이터가 안 넘어오는 등의 상황에 대한 처리를 위해서 작성
    useEffect(()=>{
        //맨 처음 MemberList가 실행될 때만 실행
        // async function getMembers(){
        // }
        // getMembers();

        // 즉시 실행 함수 표현 function getMembers{}();
        (async ()=> {
            setMembersState({members: null, status: 'pending'})
            try{
                const result = await axios.get('http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members')
                setMembersState({
                    members: result.data.data,
                    status: 'resolved',
                });
            }catch(e){
                setMembersState({
                    members: null,
                    status: 'rejected',
                });
            }
        })();
        
    },[]);
    switch(membersState.status){
        case 'idle':
            return <div>idle 입니다.</div>
        case 'pending':
            return <Loading/>
        case 'rejected':
            return <div>실패</div>
        case 'resolved':
        default:
    }
  return (
    <>
      <div>MemberList</div>
      <div className="member-list-content-wrapper">
          {
            members.map((mem)=>(<Card memberData={mem}></Card>))
          }
      </div>
    </>
  );
}

export default MemberList;
