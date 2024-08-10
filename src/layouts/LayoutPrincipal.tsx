import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useAppStore } from "../store/useAppStore";
import { useEffect } from "react";
import Notification from "../components/Notification";

const LayoutPrincipal = () => {
  const { loadFromStorage } = useAppStore();

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />

      <main className="container mx-auto py-16">
        <Outlet />
      </main>

      <Modal />
      <Notification />
    </>
  );
};

export default LayoutPrincipal;
