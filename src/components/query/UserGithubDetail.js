import React from "react";
import Image from "next/image";

function UserGithubDetail({ user }) {
  return (
    <div>
      <h1>{user.login}</h1>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt={user.login} width={500} height={500} />
    </div>
  );
}

export default UserGithubDetail;
