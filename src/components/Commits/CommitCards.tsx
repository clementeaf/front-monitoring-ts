import React from "react";

interface LastCommitContent {
  message: string;
  date: string;
}

export function LastCommitContent({message, date}: LastCommitContent) {
  return (
    <div className="flex w-full flex-col sm:flex-row items-start justify-between border border-black/30 rounded-md p-4">
      <p>Message: {message}</p>
      <p>Date: {date}</p>
    </div>
  );
}

export function CommitCard() {
  return <div>index</div>;
}
