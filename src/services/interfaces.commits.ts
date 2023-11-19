export interface CommitAuthor {
  name: string | null;
  email: string | null;
  date: string | null;
}

export interface Commit {
  sha: string | null;
  commit: {
    author: CommitAuthor | null;
  };
}

// Define the success response structure
export interface SuccessCommitResponse {
  data: Commit[] | null;
}

// Define the error response structure con el valor predeterminado
export interface ErrorCommitResponse {
  status: number;
  error: never;
  data: Commit[]; // Puedes proporcionar un valor predeterminado para los commits en caso de error
}

// Union type para la respuesta completa
export type FetchCommitsResponse = SuccessCommitResponse | ErrorCommitResponse;
