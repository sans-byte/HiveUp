import { fetchAuthSession, signOut } from "aws-amplify/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { loginUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import FullScreenLoading from "../FullScreenLoading";

function UserDetailsCheck() {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    email: "",
    name: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        setCurrentUser({ email: email, name: preferred_username });
        console.log({ email: email, name: preferred_username });
      } else console.log("Email or username is not of type string");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const loginCheck = async (user: { email: string; name: string }) => {
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

  useEffect(() => {
    currentSession();
    loginCheck(currentUser);
  }, []);

  return (
    <div>
      {loading ? <FullScreenLoading /> : <div>User Details Check Page</div>}
    </div>
  );
}

export default UserDetailsCheck;
