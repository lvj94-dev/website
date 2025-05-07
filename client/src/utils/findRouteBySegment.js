/* Author: Lucas Vincent Johanningmeier */

export const findRouteBySegment = (segment, routes) => {
  for (const route of routes) {
    // strip leading '/'-character
    const cleanPath = route.path.replace(/^\//, "");

    // case 1: path already found
    if (cleanPath === segment) {
      return route;
    }

    // case 2: check nested children recursively
    if (route.children) {
      const match = findRouteBySegment(segment, route.children);
      if (match) {
        return match;
      }
    }
  }

  // case 3: not found
  return null;
};

/**
 * NOTES
 * - the problem is that with this approach NOT two segments can have the same name (!) => WHAT TO DO ?
 */
