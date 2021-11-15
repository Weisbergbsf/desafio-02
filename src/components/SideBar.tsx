import { Button } from "./Button";

import { GenreProps } from "../interfaces";

import '../styles/sidebar.scss'

interface SideBarProps {
  genres: GenreProps[];
  selectedGenreId: number;
  onClick: Function,
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClick(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}