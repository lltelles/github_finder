import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./Repos.module.css";

import BackBtn from "../components/BackBtn";

const Repos = () => {
  const { username } = useParams();

  return (
    <div>
      <BackBtn />
      Repos {username}
    </div>
  );
};

export default Repos;
