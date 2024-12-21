const RepositoriesList = ({ repositories }) => {
  return (
    <div>
      <ul className="space-y-4">
        {repositories.map((repo, index) => (
          <li
            key={index}
            className="border p-4 rounded hover:shadow-lg transition"
          >
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoriesList;
