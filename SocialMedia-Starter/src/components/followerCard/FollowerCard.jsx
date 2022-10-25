import React, { useEffect, useState } from "react";
// import FollowersModal from "../FollowersModal/FollowersModal";
import "./FollowerCard.css";
import { Followers } from "../../Data/FollowersData";
import User from "../User/User";
import { getAllUsers } from "../../api/UserRequst";
import { useSelector } from "react-redux";

function FollowerCard() {
  // const [modalOpened, setModalOpened] = useState(false);
  const [person, setPerson] = useState([]);
  const { user } =  useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPerson(data);
    
    };
    fetchPersons();
  }, []);

  return (
    <div className="followerCard">
      <h3>people you may know</h3>
      {person.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
      {/* {!location ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default FollowerCard;
