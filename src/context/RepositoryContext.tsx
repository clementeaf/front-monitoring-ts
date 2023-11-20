/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, ReactNode } from "react";
import useRepositoryInfoQuery, {
  FetchRepositoryInfoResponse
} from "../hooks/useRepositoryInfoQuery";

interface RepositoryContextProps {
  repositoryInfo: FetchRepositoryInfoResponse;
}

const RepositoryContext = createContext<RepositoryContextProps | undefined>(
  undefined
);

export const useRepositoryContext = () => {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error(
      "useRepositoryContext must be used within a RepositoryProvider"
    );
  }
  return context;
};

export interface RepositoryProviderProps {
  children: ReactNode;
}

export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const repositoryInfoQuery = useRepositoryInfoQuery();

  const repositoryContextValue = {
    repositoryInfo: repositoryInfoQuery.data || {
      data: undefined,
      error: undefined
    }
  };

  return (
    <RepositoryContext.Provider value={repositoryContextValue}>
      {children}
    </RepositoryContext.Provider>
  );
}
