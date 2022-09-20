import Footer from "./footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const path = useRouter().pathname;
  console.log(path);
  return (
    <>
      <main className={path === "/" && "bgHome"}>{children}</main>
      {path === "/" ? "" : <Footer />}
    </>
  );
}
