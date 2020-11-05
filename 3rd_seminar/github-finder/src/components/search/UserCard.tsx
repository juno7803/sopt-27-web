import React from "react";
import { IUserData } from "../../lib/api/github/user";
import styled from "styled-components";

const UserCardWrapper = styled.div`
  background-color: #2c3035;
  border-radius: 20px;
  box-shadow: rgba(23, 25, 29, 0.3) 0 2px 20px;
  display: flex;
  padding: 3rem;
  max-width: 800px;
`;

const UserAvatar = styled.img`
  border: 10px solid #646568;
  border-radius: 50%;
  height: 180px;
  width: 180px;
`;

const UserInfo = styled.div`
  color: #e5e6e7;
  margin-left: 2rem;
  h2 {
    margin-top: 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    max-width: 400px;
  }
`;

const UserInfoList = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }
  strong {
    margin-right: 0.5rem;
  }
`;

interface IUser {
  user: IUserData;
}

const UserCard = ({ user }: IUser) => (
  <UserCardWrapper>
    <UserAvatar src={user.avatar_url} alt={user.name} />
    <UserInfo>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <UserInfoList>
        <li>
          <strong>Followers</strong> {user.followers}
        </li>
        <li>
          <strong>Following</strong> {user.following}
        </li>
        <li>
          <strong>Repos</strong> {user.public_repos}
        </li>
      </UserInfoList>
    </UserInfo>
  </UserCardWrapper>
);

export default UserCard;
