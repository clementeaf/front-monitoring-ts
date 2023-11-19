import { UseQueryOptions, useQuery } from "react-query";
import { fetchRepositoryInfo } from "../services/fetchRoutes";
import { RepoInfo } from "../services/interfaces.repository";

/**
 * Represents the response structure for fetching repository information.
 */
interface FetchRepositoryInfoResponse {
  /**
   * The data containing repository information.
   */
  data?: RepoInfo;

  /**
   * An optional error in case the data retrieval fails.
   */
  error?: unknown;
}

/**
 * Custom hook for querying repository information using React Query.
 *
 * @param _options - Optional query options to customize the behavior.
 * @returns An object containing the current state of the query.
 */
export default function useRepositoryInfoQuery(
  options?: UseQueryOptions<FetchRepositoryInfoResponse, unknown>
) {
  return useQuery<FetchRepositoryInfoResponse, unknown>(
    ["repositoryInfoQuery"],
    async () => {
      try {
        const response = await fetchRepositoryInfo();
        return response;
      } catch (error) {
        return { data: undefined, error };
      }
    },
    {
      ...options,
      select: (data) => ({
        name: data?.name ?? "No name",
        login: data?.owner?.login ?? "No Owner",
        language: data?.language ?? "No language"
      }),
    }
  );
}