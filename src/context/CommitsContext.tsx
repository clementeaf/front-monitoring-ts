/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, ReactNode } from "react";
import useCommitsQuery from "../hooks/useCommitsQuery";
import { Commit } from "../services/interfaces.commits";

export interface CommitsInfoContextProps {
  commitsInfoQuery: {
    data?: Commit[];
    isLoading: boolean;
    isError: boolean;
  };
}

const CommitsInfoContext = createContext<CommitsInfoContextProps | undefined>(
  undefined
);

export const useCommitsInfoStore = () => {
  const context = useContext(CommitsInfoContext);
  if (!context) {
    throw new Error(
      "useCommitsInfoStore must be used within a CommitsInfoProvider"
    );
  }
  return context;
};

export interface CommitsInfoProviderProps {
  children: ReactNode;
}

export function CommitsInfoProvider({ children }: CommitsInfoProviderProps) {
  const { data, isLoading, isError } = useCommitsQuery();

  const commitsInfoQuery = {
    data: data || [],
    isLoading,
    isError
  };

  return (
    <CommitsInfoContext.Provider value={{ commitsInfoQuery }}>
      {children}
    </CommitsInfoContext.Provider>
  );
}
