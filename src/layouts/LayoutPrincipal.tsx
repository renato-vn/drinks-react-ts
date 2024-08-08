import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutPrincipal = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto py-16">
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPrincipal;
