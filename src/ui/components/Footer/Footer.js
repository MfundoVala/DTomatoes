import logo from "../../../assets/logo/desktopLogo.png";
import styles from "./Footer.module.scss";
import appleImage from "../../../assets/buttons/appStore.svg";
import playstoreImage from "../../../assets/buttons/googlePlay.svg";
import IconLink from "../IconLink/IconLink";
import HomeButton from "../../components/Footer/HomeButton.js/HomeButton";
import clapperBoard from "../../../assets/icons/clapperboard.svg";
import tv from "../../../assets/icons/tv.svg";
import { useLocation } from "react-router-dom";

export function Footer({ showHomeButtonPaths = ["/"] }) {
  const showHomeButton = showHomeButtonPaths.includes(useLocation().pathname);

  return (
    <footer>
      <div className={styles.footer}>
        {showHomeButton && (
          <div
            className={styles.HomeButtonContainer}
            data-testid="Home_Buttons_Container"
          >
            <HomeButton
              img={clapperBoard}
              text="Movies"
              to="movies"
              imgWidth={40}
              placeholderText="moviesHomeButton"
              testid="Home_Button_Movies"
            />
            <HomeButton
              img={tv}
              text="Series"
              to="series"
              imgWidth={40}
              placeholderText="seriesHomeButton"
              testid="Home_Button_Series"
            />
          </div>
        )}
        <img
          width={80}
          src={logo}
          className={styles.footerLogo}
          alt="Footer logo"
          placeholder="Footer logo"
        />
        <div className={styles.footerLinks}>
          <IconLink img={appleImage} to="#/appstore" imgWidth={100} />
          <IconLink img={playstoreImage} to="#/playstore" imgWidth={100} />
        </div>
      </div>
      <div className={styles.footer}>
        <p>© Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>
      </div>
    </footer>
  );
}
