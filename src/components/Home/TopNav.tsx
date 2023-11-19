import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface Page {
    id: number;
    name: string;
    path: string;
  }

export default function TopNav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen(!open)}>
        {open ? <IoMdClose /> : <RxHamburgerMenu />}
      </button>
      {open && <VerticalMenu />}
    </div>
  );
}

const pages: Page[]= [
    {
        id: 1,
        name: "repository",
        path: "repositoryInfo"
    },
    {
        id: 2,
        name: "commits",
        path: "allCommits"
    },
]

function VerticalMenu() {
  return (
    <div className="absolute top-[90px] left-[25px] bg-white rounded-md shadow-md z-[9999] flex flex-col items-start justify-between gap-5 p-4">
      {pages.map(({id, path, name}) => (
        <NavLink key={id} to={path} >
           {({isActive}) => (
            <p className={`${
                isActive ? 'text-black' : 'text-black/70'
              } font-light w-full py-2 capitalize`}>{name}</p>
           )}
        </NavLink>
      ))}
    </div>
  );
}
