import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import RangeSlider from "../../../../components/RangeSlider";
import BookCardList from "../BookCardList/BookCardList";
import StyledCatalog from "./Catalog.styles";
import { useAppDispatch, useAppSelector } from "../../../../../store/store";
import { fetchGenres } from "../../../../../store/GenreThunk";
import { selectGenre } from "../../../../../store/GenreSlice";

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres.genreList);
  const selectedGenres = useAppSelector((state) => state.genres.selectedGenres);
  // const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   dispatch(fetchGenres());
  // }, []);

  useEffect(() => {
    searchParams.set("genres", selectedGenres.join(","));
    dispatch(fetchGenres({ selectedGenres: searchParams.get("genres") } || ""));
  }, [selectedGenres]);

  useEffect(() => {
    setSearchParams({
      page: searchParams.get("page") || "1",
      genres: searchParams.get("genres") || "",
    });
  }, [selectedGenres]);

  const handleGenreChange = (id: number) => {
    if (selectedGenres.includes(id)) {
      dispatch(selectGenre(selectedGenres.filter((genreId) => genreId !== id)));
      // setSelectedGenres(selectedGenres.filter((genreId) => genreId !== id));
    } else {
      dispatch(selectGenre([...selectedGenres, id]));
      // setSelectedGenres([...selectedGenres, id]);
    }
  };

  return (
    <StyledCatalog id="catalog">
      <div className="filter-panel">
        <h2 className="catalog-title">Catalog</h2>
        <div className="dropdown-container">
          <Dropdown name={"Genre"}>
            {genres.map((genre) => (
              <li key={genre.id}>
                <input
                  type="checkbox"
                  id={genre.id.toString()}
                  checked={selectedGenres.includes(genre.id)}
                  onChange={() => handleGenreChange(genre.id)}
                />
                <label>{genre.name}</label>
              </li>
            ))}
          </Dropdown>
          <Dropdown name={"Price"}>
            <RangeSlider />
          </Dropdown>
          <Dropdown name={`Sort by ${"price"}`} backgroundColor={"#fff"}>
            <li>Price</li>
            <li>Name</li>
            <li>Author name</li>
            <li>Rating</li>
            <li>Date of issue</li>
          </Dropdown>
        </div>
      </div>
      <BookCardList />
    </StyledCatalog>
  );
};
export default Catalog;
