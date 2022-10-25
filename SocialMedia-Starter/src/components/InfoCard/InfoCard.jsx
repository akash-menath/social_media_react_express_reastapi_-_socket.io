import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModel from "../ProfileModel/ProfileModel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequst.js";
import { logout } from "../../action/AuthAction";

function InfoCard() {
  const [modelOpened, setModelOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();

  const profileUserId = params.id;
  const [profileUser, setProfileuser] = useState({});

  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileuser(user);
        console.log(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileuser(profileUser);
        console.log(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);
  const handleLogout =()=>{
    dispatch(logout())
  }

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {profileUserId === user._id ? (
          <div>
            <UilPen
              width="2rem"
              hight="1.2rem"
              onClick={() => {
                setModelOpened(true);
              }}
            />
            <ProfileModel
              modelOpened={modelOpened}
              setModelOpened={setModelOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span> {profileUser.relationship} </span>
      </div>

      <div className="info">
        <span>
          <b>Lives </b>
        </span>
        <span> {profileUser.livesIn} </span>
      </div>
      <div className="info">
        <span>
          <b>Work at </b>
        </span>
        <span> {profileUser.workAt} </span>
      </div>
      <button className="button logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default InfoCard;
