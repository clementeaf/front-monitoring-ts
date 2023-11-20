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
  data?: Commit[] | null;

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
    async (): Promise<FetchCommitsResponse> => {
      try {
        // Fetch commits array information using the provided service function
        const response = await fetchCommits();

        // Check if the response is of type SuccessCommitResponse
        if ("data" in response) {
          return { data: response.data, error: undefined };
        } else {
          // If not, assume it's already of type Commit[]
          const data: Commit[] = response ?? [];
          return { data, error: undefined };
        }
      } catch (error) {
        // Return an object with data set to undefined and the error details
        return { data: undefined, error };
      }
    },
    options
  );
}
