import { Navbar } from "../../ui";
import { MarvelPage, DcPage, HeroPage, SearchPage } from "../pages";
import { Route, Routes } from "react-router-dom";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container py-3">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<MarvelPage/>} />
        </Routes>
      </div>
    </>
  );
};
