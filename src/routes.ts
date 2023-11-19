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
const RepositoryInfo = lazy(() => import("./pages/RepositoryInfo"));
const CommitDetail = lazy(() => import("./pages/CommitDetail"));

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
 * Repository Info route configuration.
 */
export const REPOSITORY_INFO_ROUTE: Route = {
  id: "repository-info-route",
  path: "/repositoryInfo",
  component: RepositoryInfo,
  isIndex: false,
  isInSideNav: true,
  name: "Repository",
  description: "Repository Info"
};

/**
 * Commit Detail route configuration.
 */
export const COMMIT_DETAIL_ROUTE: Route = {
  id: "commit-detail-route",
  path: "/commits",
  component: CommitDetail,
  isIndex: false,
  isInSideNav: true,
  name: "Commits",
  description: "Commits Detail"
};
