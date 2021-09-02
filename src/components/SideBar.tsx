import { useMovie } from '../hooks/useMovies';

import { Button } from '../components/Button';

import '../styles/global.scss';

import '../styles/sidebar.scss';

export function SideBar() {
  const { selectedGenreId, genres, movies, selectedGenre, handleClickButton } = useMovie();

  console.log(genres)

  return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}