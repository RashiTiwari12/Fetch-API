import { useNavigate } from 'react-router-dom';
function Home() {
  let navigate = useNavigate();

  const handleAo1 = (e) => {
    e.preventDefault();
    navigate('/Assignment01', true);
  };
  const handleAo2 = (e) => {
    e.preventDefault();
    navigate('/Assignment02', true);
  };
  const handleAo3 = (e) => {
    e.preventDefault();
    navigate('/Assignment03', true);
  };


  return (
    <div>
      <button onClick={handleAo1}>Assignment01</button>
      <button onClick={handleAo2}>Assignment02</button>
      <button onClick={handleAo3}>Assignment03</button>
     

    </div>
  );
}
export default Home