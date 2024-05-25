import { fetchAuthSession, signIn, signOut } from "aws-amplify/auth";
import React from "react";
import { useSelector } from "react-redux";

function LandingPage() {
  const user = useSelector((state: any) => state.user.value);
  console.log(user);
  return <div></div>;
}

export default LandingPage;
