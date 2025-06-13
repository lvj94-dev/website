/* Author: Lucas Vincent Johanningmeier */

// Hooks
import useCollectionUrl from "@/hooks/useCollectionUrl";

// UI Components
import MapLinks from "@/components/ui/MapLinks/MapLinks";

// Utilities
import { findRouteBySegment } from "@/utils/findRouteBySegment";
import { routes } from "../../../routes/routes";

// Error handling
import ErrorBoundary from "@/components/common/ErrorBoundary";
import useSafeValue from "@/hooks/useSafeValue";

// Styling
import styles from "./Breadcrumbs.module.scss";

/**
 * @component
 * @function Breadcrumbs
 *
 * @description
 * Builds breadcrumb navigation from the current URL path.
 *
 * @typedef {string[]} PathSegments
 *
 * @returns {JSX.Element}
 */
export default function Breadcrumbs() {
  const { pathSegments: rawSegments } = useCollectionUrl();

  const pathSegments = useSafeValue(rawSegments, [], {
    isRequired: true,
    label: "pathSegments",
  });

  // create a source-object with attributes "to" and "label"
  const mapSegmentPath = pathSegments.map((segment, index) => {
    const route = findRouteBySegment(segment, routes);

    return {
      to: "/" + pathSegments.slice(0, index + 1).join("/"),
      label: route?.label ?? segment,
    };
  });

  return (
    <>
      <div className={styles.breadcrumbs}>
        <ErrorBoundary fallback={<p>Breadcrumbs unavailable</p>}>
          <MapLinks
            className={styles.breadcrumbsMapLinks}
            source={mapSegmentPath}
            //disableNavigation
          />
        </ErrorBoundary>
      </div>
    </>
  );
}
