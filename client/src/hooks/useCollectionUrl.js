/* Author: Lucas Vincent Johanningmeier */

import { useLocation, useNavigate } from "react-router-dom";
import useSafeValue from "./useSafeValue";

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
