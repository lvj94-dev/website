/* Author: Lucas Vincent Johanningmeier */

// React
import { useLocation, useNavigate } from "react-router-dom";

// Error handling
import useSafeValue from "./useSafeValue";

/**
 * @typedef {Object} CollectionUrlData
 * @property {ReturnType<typeof useLocation} location - The current location bject from React Router.
 * @property {string[]} pathSegments - Array of path segments parsed from the URL.
 * @property {string} currentPage - The last segment of the current URL.
 * @property {ReturnType<typeof useNavigate} navigate - Navigation function from React Router.
 * @property {Function} handleGoBack - Funtion to navigate one step back in the browser history.
 */

/**
 * @function useCollectionUrl
 *
 * @description
 * Curstom hook for working with the current URL path.
 *
 * @returns {CollectionUrlData}
 */
export default function useCollectionUrl() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPageRaw = pathSegments.at(-1);

  const currentPage = useSafeValue(currentPageRaw, "unknown", {
    isRequired: true,
    label: "currentPage",
  });

  const handleGoBack = () => navigate(-1);

  return {
    location,
    pathSegments,
    currentPage,

    navigate,
    handleGoBack,
  };
}
