import "../styles/app.scss";
import Layout from "../components/layout";
import { UserContext } from "../contexts/user";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
