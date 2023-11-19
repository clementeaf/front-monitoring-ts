import { useQuery, UseQueryOptions } from "react-query";
import { fetchCommits } from "../services/fetchRoutes";
import { Commit } from "../services/interfaces.commits";

/**
 * Represents the response structure for fetching commits array information.
 */
export interface FetchCommitsResponse {
  /**
   * The data containing commits array information.
   */
  data?: Commit[];

  /**
   * An optional error in case the data retrieval fails.
   */
  error?: unknown;
}

/**
 * Custom hook for querying commits array information using React Query.
 *
 * @param options - Optional query options to customize the behavior.
 * @returns An object containing the current state of the query.
 */
export default function useCommitsQuery(
  options?: UseQueryOptions<FetchCommitsResponse, unknown>
) {
  return useQuery<FetchCommitsResponse, unknown>(
    ["commitsQuery"],
    async () => {
      try {
        // Fetch commits array information using the provided service function
        const response = await fetchCommits();
        return response;
      } catch (error) {
        // Return an object with data set to undefined and the error details
        return { data: undefined, error };
      }
    },
    options
  );
}
