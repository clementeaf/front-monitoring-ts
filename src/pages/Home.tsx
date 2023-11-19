/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from "react";
import useAppRoutes from "../hooks/useAppRoutes";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import CommitDetail from "./CommitDetail";
import RepositoryInfo from "./RepositoryInfo";
import GlobalProvider from "../context/GlobalContext";

interface ContextMapping {
  [key: string]: "Repository" | "Commits";
}

export default function Home() {
  const routes = useAppRoutes();
  const location: string = useLocation().pathname;

  const contextMapping: ContextMapping = {
    "/repositoryInfo": "Repository",
    "/allCommits": "Commits"
  };

  const contextName: ContextMapping[keyof ContextMapping] =
    contextMapping[location];

  return (
    <div className="flex flex-col min-w-screen min-h-screen items-center bg-gray-200/70 p-6 gap-6">
      <GlobalProvider
        states={contextName ? ["Commits"] : ["Repository"]}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex justify-center w-full p-4 bg-white rounded-md shadow-md">
            MonitoringApp
          </div>
          <div className="flex flex-col p-4 bg-white rounded-md shadow-md  justify-center ">
            <Routes>
              {routes.map(({ id, path, component: Component, isIndex }) => (
                <Route
                  key={id}
                  path={path}
                  element={<Component />}
                  index={isIndex}
                />
              ))}
              <Route path="*" element={<NotFound />} />
              <Route path="/commitDetails/:id" element={<CommitDetail />} />
              <Route
                path="/repositoryDetails/:id"
                element={<RepositoryInfo />}
              />
            </Routes>
          </div>
        </Suspense>
      </GlobalProvider>
    </div>
  );
}
