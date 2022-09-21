import "../styles/app.scss";
import { UserContext } from "../contexts/User";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ id: 1, name: "Christophe" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
