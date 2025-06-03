/* Author: Lucas Vincent Johanningmeier */

import styles from "./Breadcrumbs.module.scss";

import useCollectionUrl from "@/hooks/useCollectionUrl";
import MapLinks from "@/components/ui/MapLinks/MapLinks";
import { findRouteBySegment } from "@/utils/findRouteBySegment";

import { routes } from "../../../routes/routes";
import useSafeValue from "@/hooks/useSafeValue";
import ErrorBoundary from "@/components/common/ErrorBoundary";

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
          <MapLinks source={mapSegmentPath} />
        </ErrorBoundary>
      </div>
    </>
  );
}
