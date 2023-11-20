/**
 * Interface representing the structure of repository information.
 */
export interface RepoInfo {
  name: string;
  owner: {
    login: string;
    url: string;
  };
  html_url: string;
  created_at: string;
  updated_at: string;
  language: string;
  visibility: string;
  default_branch: string;
}

/**
 * Interface representing a successful response structure.
 */
export interface SuccessRepoResponse {
  /**
   * The data containing repository information.
   */
  data: RepoInfo;
}

/**
 * Interface representing an error response structure.
 */
export interface ErrorRepoResponse {
  /**
   * The HTTP status code indicating the type of error.
   */
  status: number;

  /**
   * The error details, which may be of any type.
   */
  error: never;
}

/**
 * Union type for the complete response, either a success or an error.
 */
export type FetchRepositoryInfoResponse =
  | SuccessRepoResponse
  | ErrorRepoResponse;
