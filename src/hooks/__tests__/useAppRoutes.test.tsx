import { ALL_COMMITS_ROUTE, MAIN_ROUTE } from "../../routes";
import useAppRoutes from "../useAppRoutes";

describe("useAppRoutes", () => {
  it("should return an array of route configurations", () => {
    const result = useAppRoutes();

    expect(Array.isArray(result)).toBe(true);

    expect(result).toContain(MAIN_ROUTE);
    expect(result).toContain(ALL_COMMITS_ROUTE);
  });
});
