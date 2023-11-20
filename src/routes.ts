import { lazy, LazyExoticComponent } from "react";

/**
 * Interface representing the configuration of a route.
 */
export interface Route {
  id: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
  isIndex: boolean;
  isInSideNav: boolean;
  name: string;
  description: string;
}

// Lazy-loaded components for each route
const Main = lazy(() => import("./pages/Main"));
const AllCommits = lazy(() => import("./pages/AllCommits"));

/**
 * Main route configuration.
 */
export const MAIN_ROUTE: Route = {
  id: "main-route",
  path: "/",
  component: Main,
  isIndex: false,
  isInSideNav: false,
  name: "Home",
  description: "Home"
};

/**
 * Commit Detail route configuration.
 */
export const ALL_COMMITS_ROUTE: Route = {
  id: "all-commits-route",
  path: "/allCommits",
  component: AllCommits,
  isIndex: false,
  isInSideNav: true,
  name: "Commits",
  description: "Commits Detail"
};
