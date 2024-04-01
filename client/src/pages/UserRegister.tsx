import React, { useState } from "react";
import Card from "../components/ui/card/Card";
import CardContent from "../components/ui/card/CardContent";
import CardTitle from "../components/ui/card/CardTitle";
import CardIcon from "../components/ui/card/CardIcon";
import cake from "../assets/cake.png";
import Button from "../components/ui/button/Button";
import DatePicker from "../components/ui/datepicker/DatePicker";
import { Link } from "react-router-dom";
import Select from "../components/ui/select/Select";
import ImagePicker from "../components/ui/imagepicker/ImagePicker";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { registerUser } from "../services/userService";
import { useSelector } from "react-redux";

function UserRegister() {
  const user = useSelector((state: any) => state.user.value);
  const [birthdate, setBirthDate] = useState("");
  const [togglePage, setTogglePage] = useState(1);
  const [gender, setGender] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [image, setImage] = useState("");

  const handleNextClick = () => {
    setTogglePage((pre) => pre + 1);
  };
  const handleBackClick = () => {
    setTogglePage((pre) => pre - 1);
  };

  const handleFormSubmit = async () => {
    const formData = new FormData();
    console.log(user);
    user && formData.append("email", user.email);
    user && formData.append("name", user.name);
    image && formData.append("profilePic", image);
    gender && formData.append("gender", gender);
    pronouns && formData.append("pronouns", pronouns);
    birthdate && formData.append("dateOfBirth", birthdate);
    console.log(formData);
    const res = await registerUser(formData);
    console.log(res);
  };

  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen bg-secondary">
        {togglePage === 1 ? (
          <Card>
            <CardIcon src={cake} />
            <CardTitle>
              <div>Add your birthday</div>
            </CardTitle>
            <CardContent>
              <DatePicker setDate={setBirthDate} />
              <div className="flex justify-center items-center flex-col">
                <p className="my-4">
                  You need to enter the date you were born.
                </p>
                <p className="mb-6 text-center">
                  Use your own birthday, even if this account is for a business,
                  a pet, or something else
                </p>
                <Button
                  disabled={birthdate === "" ? true : false}
                  onClick={() => {
                    handleNextClick();
                  }}
                >
                  Next
                </Button>
              </div>
              <div className="flex mt-4">
                <p className="mr-1">Already have an account?</p>
                <Link to="/login" className="text-blue-400">
                  Log in
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : togglePage === 2 ? (
          <Card>
            <CardTitle>
              <div>Add your Gender Identity</div>
            </CardTitle>
            <CardContent>
              <Select
                setSelected={setGender}
                options={[
                  "Male",
                  "Female",
                  "Non-binary",
                  "Genderqueer",
                  "Genderfluid",
                  "Agender",
                  "Prefer not to say",
                ]}
              />
              <Select
                options={["He/Him", "She/Her", "they/them", "Custom"]}
                setSelected={setPronouns}
              />
              <p className="text-center my-2">
                We strive to create an inclusive community. Please share your
                gender identity if you're comfortable. This information is
                optional and will not be displayed publicly. You can skip this
                question if you prefer not to disclose.
              </p>
              <Button
                onClick={() => {
                  handleNextClick();
                }}
              >
                Next
              </Button>
              <Button
                type="secondary"
                onClick={() => {
                  handleBackClick();
                }}
              >
                Back
              </Button>
              <div className="text-center mt-3">
                <Link to="#" className="text-blue-400">
                  Skip
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardTitle> Add your profile picture </CardTitle>
            <CardContent>
              <ImagePicker type="avatar" setImage={setImage} />
              {/* <Button
                disabled={!image ? true : false}
                type="secondary"
                className="mt-28"
              >
                Remove Image
              </Button> */}
              <Button
                type="primary"
                className="mt-24 flex gap-1 justify-center"
                onClick={handleFormSubmit}
              >
                Get Started
                <FaArrowAltCircleRight className="text-xl" />
              </Button>
              <Button
                type="secondary"
                onClick={() => {
                  handleBackClick();
                }}
              >
                Back
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default UserRegister;
