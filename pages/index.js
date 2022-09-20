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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`grid-container fluid ${Styles.textIntro}`}>
        <div className="grid-x">
          <div className="cell">
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
    </>
  );
}
