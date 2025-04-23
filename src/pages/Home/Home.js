/* Author: Lucas Vincent Johanningmeier */

import LayoutMain from "@/components/layout/LayoutMain/LayoutMain";
import styles from "./Home.module.css";

export default function Home() {
  console.log("Home()");

  return (
    <>
      <div className={styles.home}>
        <div className={styles["home-left"]}>
          <h1>Home</h1>

          <hr />
          <h3>Information</h3>
          <hr />
          <h3>Projects</h3>
          <p />
          <ul>
            <li>https://github.com/lvj94-dev/website</li>
          </ul>

          <hr />
          <h3>TODO</h3>
          <ul>
            {/* (T) Tasks */}
            <li>(T) Show basic information about me and my project</li>
            <li style={{ visibility: "hidden" }} />

            {/* (P) Projects */}
            <li>(P) Show source-code</li>
            <li>(P) Include "Return"-button // go back to the previous page</li>
            <li>(P) Create a chess-game</li>
            <li>(P) Create a blog // text-editor</li>
            <li>(P) Create tiles to present each project</li>
            <li>(P) Replace "Home" with a logo</li>
            <li>
              (P) Replace div-tags with nav-tags (where needed) // nav
              aria-label="description"; 1. breadcrumb =&gt; refers to the
              concept; 2. refers to the visuals; WAI-ARIA Authoring Practices
            </li>
            <li>(P) Middleware "ProtectedRoutes"</li>
            <li>(P) [routes.js] swap Layout-module with landing-page</li>
            <li>(P) refactor SCSS</li>
            <li>
              (P) implement a good logging-tool AND delete the
              "console.log()"-calls (!)
            </li>
            <li style={{ visibility: "hidden" }} />
            <li>
              (T) refactor [componentsConfig.js] =&gt; bundle various categories
            </li>
            <li>
              (T) keep EITHER [scss/main.scss] OR [styles/global.module.scss] OR
              [globals.module.css]
            </li>
            <li style={{ visibility: "hidden" }} />

            {/* (R) Research */}
            <li>(R) SCSS =&gt; generate dynamic class names</li>
            <li>(R) CSS =&gt; "Concentric CSS" ordering standard</li>
            <li>
              (R) React Hooks // = reusable logic that depends on React's
              context/state
            </li>
            <li>WAI-ARIA Authoring Practices</li>
            <li style={{ visibility: "hidden" }} />

            {/* else */}
            <li>
              idea: why not externalize default-values for various sites (i.e.
              for the controls)
            </li>
            <li>HOW to write a good documentation? which standard to use</li>
            <li>
              WHY does the site blink when the url is newly entered, but not
              when navigated through the wbesite ?
            </li>
            <li>
              HOW to deactivate the error-message "Do not use empty rulesets" ?
            </li>
            <li style={{ visibility: "hidden" }} />

            {/* DEBUGGING */}
            <li>WILD CARD</li>
            <li>WILD CARD</li>
            <li>WILD CARD</li>
          </ul>
        </div>

        <div className={styles["home-right"]}>
          <LayoutMain />

          {/*<p>TODO: ButtonSelectShowcase, LayoutMain</p>*/}
        </div>
      </div>
    </>
  );
}
