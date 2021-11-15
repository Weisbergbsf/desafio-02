import { useEffect, useState } from 'react';

import { AppWrapper } from './components/AppWrapper';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GenreProps, MovieProps } from "./interfaces";

import { api } from './services/api';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreProps>({} as GenreProps);

  useEffect(() => {
    api.get<GenreProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <AppWrapper>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        onClick={handleClickButton}
      />
      <Content movies={movies} selectedGenre={selectedGenre}/>
    </AppWrapper>
  )
}