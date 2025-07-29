import React from "react";
import { useParams } from "react-router-dom";

const UserDetailPage = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>User Detail Page</h2>
      <p>Hello, <strong>{username}</strong>! This is your personalized page.</p>
    </div>
  );
};

export default UserDetailPage;