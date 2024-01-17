import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { RepoProps } from "../types/repo";

import classes from "./Repos.module.css";

import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      console.log(data);
    };
    loadRepos(username);
  }, []);

  return (
    <div>
      <BackBtn />
      Repos {username}
    </div>
  );
};

export default Repos;
