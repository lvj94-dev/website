/* Author: Lucas Vincent Johanningmeier */

import styles from "./Home.module.css";

export default function Home() {
  console.log("Home()");

  return (
    <>
      <div className={styles.home}>
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
          <li>(T) Show basic information about me and my project</li>
          <li style={{ visibility: "hidden" }} />
          <li>(P) Show source-code</li>
          <li>(P) Include "Return"-button // go back to the previous page</li>
          <li>(P) Create a chess-game</li>
          <li>(P) Create a blog</li>
          <li>(P) Create tiles to present each project</li>
          <li>(P) Replace "Home" with a logo</li>
          <li style={{ visibility: "hidden" }} />
          <li>(R) SCSS =&gt; generate dynamic class names</li>
          <li>(R) CSS =&gt; "Concentric CSS" ordering standard</li>
          <li>
            (R) React Hooks // = reusable logic that depends on React's
            context/state
          </li>
          <li style={{ visibility: "hidden" }} />
          <li>
            idea: why not externalize default-values for various sites (i.e. for
            the controls)
          </li>
          <li>HOW to write a good documentation? which standard to use</li>
          <li>
            WHY does the site blink when the url is newly entered, but not when
            navigated through the wbesite ?
          </li>
          <li>
            HOW to deactivate the error-message "Do not use empty rulesets" ?
          </li>
          <li style={{ visibility: "hidden" }} />
          <li>WILD CARD</li>
          <li>WILD CARD</li>
          <li>WILD CARD</li>
          <li>WILD CARD</li>
          <li>WILD CARD</li>
          <li>WILD CARD</li>
          <li>WILD CARD</li>
          <li>WILD CARD</li>
          <li>WILD CARD</li>
          <li>WILD CARD</li>
        </ul>
      </div>
    </>
  );
}
