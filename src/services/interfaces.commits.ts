export interface CommitAuthor {
  name: string;
  email: string;
  date: string;
}

export interface Commit {
  sha: string;
  commit?: {
    message: string;
    author?: CommitAuthor | null;
  };
}

// Define the success response structure
export interface SuccessCommitResponse {
  data: Commit[] | null;
}

export interface ErrorCommitResponse {
  status: number;
  error: never;
  data: Commit[];
}

export type FetchCommitsResponse = SuccessCommitResponse | ErrorCommitResponse;
