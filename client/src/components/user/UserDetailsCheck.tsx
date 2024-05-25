import { fetchAuthSession, signOut } from "aws-amplify/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { loginUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import FullScreenLoading from "../FullScreenLoading";

function UserDetailsCheck() {
  const user = useSelector((state: any) => state.user.value);
  console.log(user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginCheck = async (user: { email: string }) => {
    try {
      setLoading(true);
      const res = await loginUser(user);
      if (res.success) {
        navigate("/landing");
      } else {
        navigate("/userregister");
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  async function currentSession() {
    try {
      setLoading(true);
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      const { email, preferred_username } = idToken?.payload ?? {};
      const token = idToken?.toString();
      typeof token === "string"
        ? localStorage.setItem("token", token)
        : console.log("token is not a string");
      dispatch(setUser({ email: email, name: preferred_username }));
      if (typeof email === "string" && typeof preferred_username === "string") {
        console.log(email);
        await loginCheck({ email });
      } else console.log("Email or username is not of type string");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/landing");
    } else {
      currentSession();
    }
  }, []);

  return (
    <div>
      {loading ? <FullScreenLoading /> : <div>User Details Check Page</div>}
    </div>
  );
}

export default UserDetailsCheck;
