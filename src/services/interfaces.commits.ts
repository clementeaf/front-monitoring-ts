export interface CommitAuthor {
  name: string | null;
  email: string | null;
  date: string | null;
}

export interface Commit {
  sha: string | null;
  commit: {
    message: { author: CommitAuthor | null };
    author: CommitAuthor | null | string;
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
