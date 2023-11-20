import { useCommitsInfoStore } from "../context/CommitsContext";
import SimplePagination from "../components/Commits/SimplePagination";

export default function AllCommits() {
  const { commitsInfoQuery } = useCommitsInfoStore();
  const { isLoading, isError, data } = commitsInfoQuery;

  return (
    <>
      {isError ? (
        <p>Error loading the data</p>
      ) : isLoading ? (
        <p>Loading the data</p>
      ) : (
        <SimplePagination items={data} itemsPerPage={2} />
      )}
    </>
  );
}
