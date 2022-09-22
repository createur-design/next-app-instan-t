import Header from "../../components/header";
import Footer from "../../components/footer";
import Event from "../../components/events/events";
export default function index() {
  return (
    <>
      <Header title="events" />
      <main>
        <Event />
      </main>
      <Footer />
    </>
  );
}
