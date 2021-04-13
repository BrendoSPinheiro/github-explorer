interface IRepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export const RepositoryItem = ({ repository }: IRepositoryItemProps) => {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}