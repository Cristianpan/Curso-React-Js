import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks";
import { HeroCard } from "../components";
import { useMemo } from "react";
import { getHeoresByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  // const heroes = getHeoresByName(q);
  const heroes = useMemo(() => getHeoresByName(q), [q]);

  const { register, onSubmit } = useForm({
    search: q,
  });

  const handleSearchSubmit = ({ search }) => {
    navigate(`?q=${search.trim().toLowerCase()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>

          <form aria-label="form" onSubmit={onSubmit(handleSearchSubmit)}>
            <input
              type="search"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              {...register("search")}
            />

            <input
              type="submit"
              className="btn btn-outline-primary mt-3"
              value="Search"
            />
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {(!q || !heroes.length) && (
            <div data-testid="alert" className={`alert alert-${!q ? "primary" : "danger"}`}>
              {!q ? (
                "Search for a hero"
              ) : (
                <>
                  Not Result For <b>{q}</b>
                </>
              )}
            </div>
          )}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
