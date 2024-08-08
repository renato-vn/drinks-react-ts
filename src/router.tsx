import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavoritesPage from "./views/FavoritesPage";
import LayoutPrincipal from "./layouts/LayoutPrincipal";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
