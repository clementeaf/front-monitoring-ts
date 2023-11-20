interface GeneralRepoInfoCardProps {
  name: string;
  login: string;
  language: string;
}

export function GeneralRepoInfoCard({
  name,
  login,
  language
}: GeneralRepoInfoCardProps) {
  return (
    <div className="flex flex-col w-full items-center gap-4 sm:gap-4">
      <div className="flex flex-col items-center sm:flex-row gap-4">
        <p className="capitalize">name: {name}</p>
        <p className="capitalize">owner: {login}</p>
        <p className="capitalize">language: {language}</p>
      </div>
    </div>
  );
}
