import { fetchAuthSession } from "aws-amplify/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

function LandingPage() {
  const dispatch = useDispatch();
  async function currentSession() {
    try {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      const { email, preferred_username } = idToken?.payload ?? {};
      dispatch(setUser({ email: email, username: preferred_username }));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    currentSession();
  }, []);
  return <div></div>;
}

export default LandingPage;
