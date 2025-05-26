/* Author: Lucas Vincent Johanningmeier */

import { Outlet } from "react-router-dom";

export default function AccountSettings() {
  return (
    <>
      <div className={StyleSheet.accountSettings}>
        <Outlet />
      </div>
    </>
  );
}
