import "./ProfileModel.css";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { uploadImage } from "../../action/UploadAction";
import { updateUser } from "../../action/UserAction";

function ProfileModel({ modelOpened, setModelOpened, data }) {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formdata, setFormdata] = useState(other);
  const [profileImg, setProfileImg] = useState(null);
  const [coverimg, setCoverimg] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profilePicture"
        ? setProfileImg(img)
        : setCoverimg(img);
    }
  };

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formdata;
    if (profileImg) {
      const data = new FormData();
      const fileName = Date.now() + profileImg.name;
      data.append("name", fileName);
      data.append("file", profileImg);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverimg) {
      const data = new FormData();
      const fileName = Date.now() + coverimg.name;
      data.append("name", fileName);
      data.append("file", coverimg);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModelOpened(false);
  };
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="30%"
      opened={modelOpened}
      onClose={() => setModelOpened(false)}
    >
      {/* Modal content */}
      <form className="info-form" onSubmit={handleSubmit}>
        <h3>your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            value={formdata.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            value={formdata.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="workAt"
            placeholder="Woork At"
            value={formdata.workAt}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="Lives In"
            value={formdata.livesIn}
            onChange={handleChange}
          />
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Contry"
            value={formdata.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="relationship"
            placeholder="Relationship Status"
            value={formdata.relationship}
            onChange={handleChange}
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profilePicture" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverPicture" onChange={onImageChange} />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModel;
