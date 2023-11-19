import React, { ReactNode } from 'react';
import { CommitsInfoProvider, CommitsInfoProviderProps } from './CommitsContext';
import { RepositoryProvider, RepositoryProviderProps } from './RepositoryContext';

interface GlobalProviderProps {
  states: ('Repository' | 'Commits')[];
  children: ReactNode;
}

interface ContextMapping {
  Repository: React.ComponentType<RepositoryProviderProps>;
  Commits: React.ComponentType<CommitsInfoProviderProps>;
  // Agrega más contextos si es necesario
}

const contextMapping: ContextMapping = {
  Repository: RepositoryProvider,
  Commits: CommitsInfoProvider,
  // Agrega más contextos aquí si es necesario
};

function GlobalProvider({ states, children }: GlobalProviderProps) {
  const SelectedProviders = states.map((state) => contextMapping[state]);

  if (SelectedProviders.some((provider) => !provider)) {
    console.warn(`GlobalProvider: One or more providers not found for states '${states}'`);
    return <>{children}</>;
  }

  return (
    <>
      {SelectedProviders.map((Provider, index) => (
        <Provider key={index}>{children}</Provider>
      ))}
    </>
  );
}

export default GlobalProvider;
