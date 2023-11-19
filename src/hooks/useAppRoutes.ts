import {
  COMMIT_DETAIL_ROUTE,
  MAIN_ROUTE,
  REPOSITORY_INFO_ROUTE,
  Route
} from "../routes";

/**
 * Configuration type for individual routes.
 */
interface RouteConfig {
  [key: string]: Route;
}

/**
 * Predefined routes for the application.
 */
const routes: RouteConfig = {
  MAIN_ROUTE,
  REPOSITORY_INFO_ROUTE,
  COMMIT_DETAIL_ROUTE
};

/**
 * A hook that returns an array of route configurations.
 * @returns An array of route configurations.
 */
export default function useAppRoutes(): Route[] {
  return Object.values(routes);
}
