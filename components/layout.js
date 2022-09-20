import Footer from "./footer";
import Router from "next/router";

export default function Layout({ children }) {
  const path = Router.pathname;
  console.log(path);
  return (
    <>
      <main className={path === "/" && "bgHome"}>{children}</main>
      {path === "/" ? "" : <Footer />}
    </>
  );
}
