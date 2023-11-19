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
    <div className="flex flex-col sm:flex-row w-full justify-between gap-4 sm:gap-8">
      <p className="capitalize">name: {name}</p>
      <p className="capitalize">owner: {login}</p>
      <p className="capitalize">language: {language}</p>
    </div>
  );
}

export function DetailRepoInfoCard() {
  return <div>DetailRepoInfoCard</div>;
}
