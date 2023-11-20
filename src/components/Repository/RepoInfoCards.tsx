import { useState } from "react";

interface GeneralRepoInfoCardProps {
  name: string;
  login: string;
  language: string;
}

type DetailRepoInfoCardProps = {
  close: () => void;
};

export function GeneralRepoInfoCard({
  name,
  login,
  language
}: GeneralRepoInfoCardProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full items-center gap-4 sm:gap-4">
      <div className="flex flex-col items-center sm:flex-row gap-4">
        <p className="capitalize">name: {name}</p>
        <p className="capitalize">owner: {login}</p>
        <p className="capitalize">language: {language}</p>
      </div>
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-md capitalize"
        onClick={() => setOpen(!open)}
      >
        repository details
      </button>
      {open && <DetailRepoInfoCard close={() => setOpen(!open)} />}
    </div>
  );
}

export function DetailRepoInfoCard({ close }: DetailRepoInfoCardProps) {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-slate-500/50">
      <div className="flex flex-col w-[300px] justify-between gap-4 sm:gap-8 bg-white rounded-md shadow-md z-[9999] p-4">
        <p className="capitalize">name</p>
        <p className="capitalize">owner</p>
        <p className="capitalize">language</p>
        <button
          type="button"
          onClick={close}
          className="px-4 py-2 bg-blue-500 text-white rounded-md capitalize"
        >
          Close
        </button>
      </div>
    </div>
  );
}
