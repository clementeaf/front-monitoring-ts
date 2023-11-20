import { useCommitsInfoStore } from "../context/CommitsContext";
import SimplePagination from "../components/Commits/SimplePagination";
import { SuccessCommitResponse } from "../services/interfaces.commits";

export default function AllCommits() {
  const { commitsInfoQuery } = useCommitsInfoStore();
  const { isLoading, isError, data } = commitsInfoQuery;

  const commitData = data as SuccessCommitResponse | undefined;

  return (
    <>
      {isError ? (
        <p>Error loading the data</p>
      ) : isLoading ? (
        <p>Loading the data</p>
      ) : (
        <SimplePagination items={commitData?.data ?? []} itemsPerPage={2} />
      )}
    </>
  );
}
