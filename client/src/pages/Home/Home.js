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
            <li>(P) Impressum</li>
            <li>(P) different languages (DE, EN, FR?, RU?)</li>
            <li>(P) Dark Mode (?)</li>
            <li>
              <s>(P) E-mail service: contact me~</s>
            </li>
            <li style={{ visibility: "hidden" }} />
            <li>
              (T) refactor [componentsConfig.js] =&gt; bundle various categories
            </li>
            <li>
              (T) keep EITHER [scss/main.scss] OR [styles/global.module.scss] OR
              [globals.module.css]
            </li>
            <li>(T) Footer: "Back to top"-button</li>
            <li>(T) CREATE a CV</li>
            <li>
              <s>(T) CREATE a contact form</s>
            </li>
            <li>(T) Generalize the mail-service</li>
            <li>(T) split config-files into 'root' and 'config'-folder</li>
            <li>(T) Create a password-generator</li>
            <li>(T) Create a password-manager</li>
            <li>
              (T) Rewrite "authService.js" so that it can handle user-creation
            </li>
            <li>Create either self-made tags or use classes for this</li>

            <li>
              (T) REMOVE "module-alias" and USE "Babel" or "TS"
              <ul>
                <li>
                  without Babel or TS : relative imports, NOT with aliases such
                  as "@"
                </li>
                <li>
                  "if you want to use module-alias with @/, remove 'type':
                  'module' and rewrite your code with CommonJS syntax (const
                  express = require('express');)
                </li>
                <li>...</li>
              </ul>
            </li>
            <li>
              (T) add certain "tags" in order to mark "TODO", "api-calls", ...
              and list them on a central place
            </li>
            <li>(T) Download the React DevTOols</li>

            {/* Protected Routes */}
            <li>(T) decide which routes to make "protected: true"</li>
            <li>(T) create an in-between page "Login required"</li>
            <li>
              (T) Create a page "Unauthorized" to handle attempt to access
              unauthorized pages
            </li>
            <li>(T) Add front-end error handling</li>

            <li style={{ visibility: "hidden" }} />

            {/* (R) Research */}
            <li>(R) SCSS =&gt; generate dynamic class names</li>
            <li>(R) CSS =&gt; "Concentric CSS" ordering standard</li>
            <li>
              (R) React Hooks // = reusable logic that depends on React's
              context/state
            </li>
            <li>WAI-ARIA Authoring Practices</li>
            <li>
              <s>
                (R) concurrently =&gt; run client and server at the same time
                !~?
              </s>
            </li>
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

            {/* Notes */}
            <li>NavLink-elements are for internal links (!)</li>
            <li>
              keep arrow-functions concise; maybe check later for continuity
            </li>
            <li style={{ visibility: "hidden" }} />

            {/* DEBUGGING */}
            <li>WILD CARD</li>
            <li>WILD CARD</li>
            <li>WILD CARD</li>
            <li>WILD CARD</li>
            <li style={{ visibility: "hidden" }} />

            {/* ROUTINE */}
            <li>Routines</li>
            <li style={{ visibility: "hidden" }} />
            <ol>
              <li>DON'T FORGET</li>
              <ul>
                <li>Error handling / error classes</li>
                <li>const ... = ... // =&gt; export default ...</li>
              </ul>
            </ol>
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
