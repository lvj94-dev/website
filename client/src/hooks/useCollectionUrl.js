/* Author: Lucas Vincent Johanningmeier */

// React
import { useLocation, useNavigate } from "react-router-dom";

// Error handling
import useSafeValue from "./useSafeValue";

/**
 * @function useCollectionUrl
 *
 * @description
 * Curstom hook for working with the current URL path.
 *
 * @returns {{
 *   location: ReturnType<typeof useLocation>,
 *   pathSegments: string[],
 *   currentPage: string,
 *   navigate: ReturnType<typeof useNavigate>,
 *   handleGoBack: Function
 * }}
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
