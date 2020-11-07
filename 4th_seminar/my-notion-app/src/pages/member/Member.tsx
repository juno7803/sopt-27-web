import React from 'react';
import {Switch,Route,RouteComponentProps} from 'react-router-dom';
import MemberDetail from './MemberDetail';
import MemberList from './MemberList';

// 중첩 라우팅
type TParams = { id: string };

function Member({match}:RouteComponentProps<TParams>){
    // "members/:id" 와 같이 /: 뒤에 오는 값은 match.params의 프로퍼티로 들어감!
    return (
        <section style={{margin: "0 90px"}}>
            <Switch>
                <Route exact path={match.path} component={MemberList}/>
                <Route path={`${match.path}/:id`} component={MemberDetail}/>
            </Switch>
        </section>
    );
}

export default Member;