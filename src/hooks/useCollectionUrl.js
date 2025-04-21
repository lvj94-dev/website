/* Author: Lucas Vincent Johanningmeier */

import { useLocation, useNavigate } from "react-router-dom";

export default function useCollectionUrl() {
  console.log("useCollectionUrl()");

  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPage = pathSegments.at(-1);

  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return {
    location,
    pathSegments,
    currentPage,

    navigate,
    handleGoBack,
  };
}
