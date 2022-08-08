export const Posts = ({ posts }) => {
  return (
    <ol>
      {posts.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ol>
  );
};
