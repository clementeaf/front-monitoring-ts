/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from "react";
import useAppRoutes from "../hooks/useAppRoutes";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import GlobalProvider from "../context/GlobalContext";
import { pages } from "../config";
import { NavLink } from "react-router-dom";

export default function Home() {
  const routes = useAppRoutes();
  const location: string = useLocation().pathname;

  const contextName = location === "/allCommits" ? "Commits" : "Repository";

  return (
    <div className="flex flex-col min-w-screen min-h-screen items-center bg-gray-200/70 p-6 gap-6">
      <GlobalProvider states={contextName ? ["Commits"] : ["Repository"]}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex justify-center items-center w-full p-4 bg-white rounded-md shadow-md">
            <div className="flex w-[250px] items-center justify-between">
              {pages.map(({ id, path, name }) => (
                <NavLink key={id} to={path}>
                  {({ isActive }) => (
                    <p
                      className={`${
                        isActive ? "text-black" : "text-black/50"
                      } font-light w-full py-2 capitalize`}
                    >
                      {name}
                    </p>
                  )}
                </NavLink>
              ))}
            </div>
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
            </Routes>
          </div>
        </Suspense>
      </GlobalProvider>
    </div>
  );
}
