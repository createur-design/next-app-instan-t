import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

import Styles from "./../styles/pages/home.module.scss";

export default function Home() {
  var options = { weekday: "long" };
  const currentDay = new Intl.DateTimeFormat("en-US", options).format(
    new Date()
  );

  const { user } = useContext(UserContext);
  return (
    <>
      <Head>
        <title>Welcome to Instan'T</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <main>
        <div className={`grid-container fluid ${Styles.blocIntro}`}>
          <div className="grid-x grid-padding-x">
            <div className="cell">
              <div className={Styles.paddingBottom}>
                <div className={Styles.titleHome}>
                  <p>
                    welcome <br></br>
                    <span>to</span>
                  </p>
                  <h1>Instan'T</h1>
                </div>
                <div className={Styles.citation}>
                  <p>
                    Have a Great<br></br>
                    {currentDay}
                  </p>
                </div>
                <Link href={user ? "/events" : "/auth/login"}>
                  <a className="btn">{user ? "Let's play" : "Sign in"}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
