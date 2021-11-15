import { MovieCard } from "./MovieCard";
import { ContentHeader } from "./ContentHeader";

import { MovieProps, GenreProps } from "../interfaces";

import '../styles/content.scss'

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreProps;
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <ContentHeader title={props.selectedGenre.title}/>

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}