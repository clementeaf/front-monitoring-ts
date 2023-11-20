import useRepositoryInfoQuery from "../hooks/useRepositoryInfoQuery";
import useCommitsQuery from "../hooks/useCommitsQuery";
import {
  DetailRepoInfoCard,
  GeneralRepoInfoCard
} from "../components/Repository/RepoInfoCards";
import { parseDate } from "../utils";
import { LastCommitContent } from "../components/Commits/CommitCards";
import { useState } from "react";

/**
 * Main component displaying repository information.
 */
export default function Main() {
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, isError, data } = useRepositoryInfoQuery();
  const {
    isLoading: commitsLoading,
    isError: commitsError,
    data: commitsArray
  } = useCommitsQuery();

  return (
    <div className="flex flex-col gap-5 items-center p-4">
      <h1>Repository Info</h1>
      <div className="flex flex-col w-full items-start justify-between p-4 border border-black/30 rounded-md gap-2">
        {isError ? (
          <p>Error: There was a problem loading the information.</p>
        ) : isLoading ? (
          <p>Loading ...</p>
        ) : (
          <GeneralRepoInfoCard
            close={() => setOpen(!open)}
            name={data?.name}
            login={data?.login}
            language={data?.language}
          />
        )}
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-5">
        <h1>Last Commits</h1>
        {commitsError ? (
          <p>Error: There was a problem loading the information.</p>
        ) : commitsLoading ? (
          <p>Loading...</p>
        ) : (
          commitsArray &&
          commitsArray?.data?.slice(0, 5).map(({ sha, commit }) => (
            <LastCommitContent
              key={sha} // Asegúrate de agregar una clave única cuando mapeas elementos en React
              message={commit && commit.message}
              date={parseDate(commit && commit?.author?.date)}
            />
          ))
        )}
      </div>
      {open && <DetailRepoInfoCard close={() => setOpen(!open)} />}
    </div>
  );
}
