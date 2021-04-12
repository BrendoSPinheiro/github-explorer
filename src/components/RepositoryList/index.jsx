import { useEffect, useState } from "react";

import { RepositoryItem } from "./components/RepositoryItem";

import '../../styles/repositories.scss';

export const RepositoryList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/BrendoSPinheiro/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repos.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}