import logo from "../../../assets/logo/desktopLogo.png";
import styles from "./Header.module.scss";
import IconLink from "../IconLink/IconLink";
import clapperBoard from "../../../assets/icons/clapperboard.svg";
import tv from "../../../assets/icons/tv.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.rviewerLogo}>
        <IconLink
          img={logo}
          imgWidth={185}
          dataTestId="Header_Logo_Link"
          link={false}
          onClick={() => navigate("/")}
        />
      </div>

      <div className={styles.headerLinks}>
        <IconLink
          img={clapperBoard}
          text="Movies"
          to="movies"
          imgWidth={25}
          dataTestId="Header_Movies_Link"
        />
        <IconLink
          img={tv}
          text="Series"
          to="series"
          imgWidth={25}
          dataTestId="Header_Series_Link"
        />
      </div>
    </header>
  );
}
