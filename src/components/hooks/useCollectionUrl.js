/* Author: Lucas Vincent Johanningmeier */

import { useLocation } from "react-router-dom";

export default function useCollectionUrl() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPage = pathSegments.at(-1);

  return {
    location,
    pathSegments,
    currentPage,
  };
}
