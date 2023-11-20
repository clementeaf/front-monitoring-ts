import { CommitAuthor } from "../../services/interfaces.commits";

interface LastCommitContent {
  message: string;
  date: string;
}

export interface CommitContent {
  sha: string;
  email: string;
  name: string;
  message: CommitAuthor | null;
  date: string | undefined;
}

export function LastCommitContent({ message, date }: LastCommitContent) {
  return (
    <div className="flex w-full flex-col sm:flex-row items-start justify-between border border-black/30 rounded-md p-4">
      <p>Message: {message}</p>
      <p>Date: {date}</p>
    </div>
  );
}

export function CommitCard({ sha, email, name, message, date }: CommitContent) {
  return (
    <div className="flex flex-col items-start justify-between gap-8 p-4 border border-black/50 rounded-md">
      <p>Sha: {sha}</p>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
      <p>Message: {message}</p>
    </div>
  );
}
