import './App.css';
import { useRandom } from './hooks/useRandom';

const App = () => {
  const { data: randomNumber, error, isFetching, refetch } = useRandom();

  return (
    <div className="content">
      {isFetching ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Random number: {randomNumber}</p>
      )}
      <h1>Rsbuild with React</h1>
      <img src={'/logo.jpeg'} alt="Rsbuild" width={300} />
      <button
        onClick={() => refetch()}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-72 mx-auto"
      >
        Refetch
      </button>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
