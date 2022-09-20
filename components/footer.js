import React from "react";

export default function footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="grid-x grid-margin-x">
          <div className="cell text-center">
            &copy; {year}{" "}
            <small className="textColorBluePetrol">version : 0.0.0</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
