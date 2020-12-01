import './MemberDetail.scss';

import { useState, useEffect } from 'react';

import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';
import api from '../../lib/api/memberAPI';

import { InstagramOutlined, AlignLeftOutlined, RadarChartOutlined } from '@ant-design/icons';

function MemberDetail({ match }) {
    const [memberState, setMemberState] = useState({
        status: 'idle',
        member: null
    });

    useEffect(()=>{
        setMemberState({
            status: 'pending',
            member: null,
        });
        (async ()=>{
            try{
                const result = await api.getMember(match.params.id);
                console.log(result);
                setMemberState({
                    status: 'resolved',
                    member: result,
                });
            }catch(e){
                setMemberState({
                    status: 'rejected',
                    member: null,
                });
            }            
        })();
        // await  서버 통신

        // 성공 resolved
        // 실패 rejecteds
        
    },[match.params.id]);

    const onChangeInputs = async (evt) => {
        const { name, value } = evt.target;
        // 서버 업데이트
        try{
            const member = {
                ...memberState.member,
                [name]: value
            }
            await api.updateMember(match.params.id,member);
            setMemberState({
                status: 'resolved',
                member
            });
        }catch(e){
            setMemberState({
                status: 'rejected',
                member:{
                    ...memberState.member,
                }
            });
        }
     //   console.log(evt);
    }

    const memberElement = () => (
        <div className="member-detail">
            <div className="member-detail__button-area">
                <Button text="Add icon"></Button>
                <Button text="Add cover"></Button>
            </div>
            <input className="member-detail__content name" name="name" value={memberState.member.name} onChange={onChangeInputs}/>
            <hr style={{borderTop: "solid 1px #eee", marginBottom: "24px"}}/>
            <div className="member-detail__content">
                <div className="content-title"><InstagramOutlined />&nbsp; 인스타 아이디</div>
                <input className="content-input" name="instagram" value={memberState.member.instgram} onChange={onChangeInputs}/>
            </div>
            <div className="member-detail__content">
                <div className="content-title"><AlignLeftOutlined />&nbsp; 한 줄 소개</div>
                <input className="content-input" name="introduction" value={memberState.member.introduction} onChange={onChangeInputs}/>
            </div>
            <div className="member-detail__content">
                <div className="content-title"><RadarChartOutlined />&nbsp; mbti</div>
                <input className="content-input" name="mbti" value={memberState.member.mbti} onChange={onChangeInputs}/>
            </div>
            <div className="member-detail__content">
                { memberState.member.profileUrl !== '' ? <img className="content-image" src={memberState.member.profileUrl} alt={'profile url'} /> : '' }
            </div>
        </div>
    );

    switch (memberState.status) {
        case 'pending':
            return <Loading />;
        case 'resolved':
            return memberElement();
        case 'rejected':
            return <h1>해당 멤버가 없습니다</h1>;
        case 'idle':
        default: 
            return <div></div>
    }
}

export default MemberDetail;