import React from "react";
import useRepositoryInfoQuery from "../hooks/useRepositoryInfoQuery";
import useCommitsQuery from "../hooks/useCommitsQuery";
import { format } from "date-fns";

/**
 * Main component displaying repository information.
 */
export default function Main() {
  // Destructure the result of the query hook
  const { isLoading, isError, data } = useRepositoryInfoQuery();
  const {
    isLoading: commitsLoading,
    isError: commitsError,
    data: commitsArray
  } = useCommitsQuery();

  // Variable to hold the state based on query results
  let repoQueryState;
  // Determine the state based on loading and error conditions
  if (isError) {
    repoQueryState = "Error: There was a problem loading the information.";
  } else if (isLoading) {
    repoQueryState = "Loading...";
  } else {
    repoQueryState = data?.data?.name;
  }

  // Variable to hold the state based on query results
  let commitsQueryState;
  // Determine the state based on loading and error conditions
  if (commitsError) {
    commitsQueryState = "Error: There was a problem loading the information.";
  } else if (commitsLoading) {
    commitsQueryState = "Loading...";
  } else {
    const firstCommit = commitsArray?.data?.[0];

    if (firstCommit) {
      commitsQueryState = firstCommit;
    } else {
      commitsQueryState = null;
    }
  }
  return (
    <div className="flex flex-col gap-5 items-center p-4">
      <div className="flex flex-col w-full items-start justify-between p-4 border border-black/30 rounded-md gap-2">
        <h1>Repository Info</h1>
        {repoQueryState && (
          <>
            <p>Name: {repoQueryState}</p>
          </>
        )}
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-5">
        <h1>Last Commit</h1>
        {commitsQueryState && (
          <div className="flex flex-col w-full items-start justify-between border border-black/30 rounded-md gap-4 p-4">
            <p>Name: {commitsQueryState.commit.author?.name ?? "No name"}</p>
            <p>
              Email: {commitsQueryState.commit.author?.email ?? "No email"}
            </p>
            <p>
              Date:{" "}
              {commitsQueryState?.commit?.author?.date
                ? format(
                    new Date(commitsQueryState.commit.author.date),
                    "dd/MM/yyyy"
                  )
                : "No date"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
