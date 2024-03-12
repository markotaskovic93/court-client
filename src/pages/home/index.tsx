import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlePageChange = () => {
    // navigate('/about')
  }

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handlePageChange}>Change page</button>
    </div>
  )
}

export default Home;
