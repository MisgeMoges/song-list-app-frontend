import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch } from "./store/slices/songListSlice";
import Main from "./pages/main";
import CategoryPage from "./pages/categoryPage"
import AboutPage from "./pages/aboutPage"
import "./App.css";
import Layout from "./layout/layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SongDetailPage from "./pages/songDetailPage";
import UpdatePage from "./pages/updateSongPage";
import AddSongPage from "./pages/addSongPage";


function App() {
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();

  const [searchQuery, setSearchquery] = useState("");
  const handleSearch = (substring) => {
    setSearchquery(substring);
  };
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout handleSearch={handleSearch} />}>
        <Route index element={<Main searchQuery={searchQuery} />} />
        <Route path="/:id" element={<SongDetailPage />} />
        <Route path="/:id/edit" element={<UpdatePage />} />
        <Route path="/add" element={<AddSongPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
