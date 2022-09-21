import Styles from "../styles/components/header.module.scss";
export default function header(props) {
  return (
    <header className={Styles.header}>
      <div className="grid-container">
        <div className="grid-x grid-padding-x align-middle">
          <div className="cell text-center">
            <p className={Styles.titlePage}>{props.title}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
