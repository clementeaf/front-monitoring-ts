// Common Fetch Header
export const commonConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

interface Page {
  id: number;
  name: string;
  path: string;
}

export const pages: Page[] = [
  {
    id: 1,
    name: "home",
    path: "/"
  },
  {
    id: 2,
    name: "commits",
    path: "/allCommits"
  }
];
