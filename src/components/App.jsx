import TrendingMovies from './TrendingMovies/TrendingMovies';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <TrendingMovies />
    </div>
  );
};
