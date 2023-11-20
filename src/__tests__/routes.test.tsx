// routes.test.ts
import { ALL_COMMITS_ROUTE, MAIN_ROUTE } from "../routes";
import { lazy } from "react";

describe("Route configuration", () => {
  it("should have a valid structure for MAIN_ROUTE", () => {
    expect(MAIN_ROUTE).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        path: expect.any(String),
        component: lazy(expect.any(Function)),
        isIndex: expect.any(Boolean),
        isInSideNav: expect.any(Boolean),
        name: expect.any(String),
        description: expect.any(String)
      })
    );
  });

  it("should have a valid structure for ALL_COMMITS_ROUTE", () => {
    expect(ALL_COMMITS_ROUTE).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        path: expect.any(String),
        component: lazy(expect.any(Function)),
        isIndex: expect.any(Boolean),
        isInSideNav: expect.any(Boolean),
        name: expect.any(String),
        description: expect.any(String)
      })
    );
  });

  it("should have unique route IDs", () => {
    expect(MAIN_ROUTE.id).not.toEqual(ALL_COMMITS_ROUTE.id);
  });
});
