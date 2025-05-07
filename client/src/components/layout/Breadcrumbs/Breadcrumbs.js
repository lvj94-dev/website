/* Author: Lucas Vincent Johanningmeier */

import styles from "./Breadcrumbs.module.scss";

import useCollectionUrl from "@/hooks/useCollectionUrl";
import MapLinks from "@/components/ui/MapLinks/MapLinks";
import { findRouteBySegment } from "@/utils/findRouteBySegment";

import { routes } from "../../../routes/routes";

export default function Breadcrumbs() {
  console.log("Breadcrumbs()");

  const { pathSegments } = useCollectionUrl();

  // create a source-object with attributes "to" and "label"
  const mapSegmentPath = pathSegments.map((segment, index) => {
    const route = findRouteBySegment(segment, routes);

    return {
      to: "/" + pathSegments.slice(0, index + 1).join("/"),
      label: route?.label,
    };
  });

  return (
    <>
      <div className={styles.breadcrumbs}>
        <MapLinks source={mapSegmentPath} />
      </div>
    </>
  );
}
