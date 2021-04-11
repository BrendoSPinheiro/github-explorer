import { RepositoryItem } from "./components/RepositoryItem";

import '../../styles/repositories.scss';

const repositories = [
  {
    name: 'Brendo',
    description: 'Forms in ReactJS',
    link: 'http://youtube.com',
  },
  {
    name: 'Maisa',
    description: 'Biblioteca de interfaces',
    link: 'http://youtube.com',
  },
  {
    name: 'Andrei',
    description: 'Formik',
    link: 'http://youtube.com',
  },
  {
    name: 'Jose',
    description: 'Socket.io',
    link: 'http://youtube.com',
  },
]

export const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository, index) => (
          <RepositoryItem key={index} repository={repository} />
        ))}
      </ul>
    </section>
  );
}