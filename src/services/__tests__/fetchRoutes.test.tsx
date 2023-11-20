import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { commonConfig } from "../../config";
import { fetchRepositoryInfo, fetchCommits } from "../fetchRoutes";
import { GET_REPO_INFO_API, GET_COMMITS_API } from "../endPoints";

const mock = new MockAdapter(axios);

describe("fetchRoutes", () => {
  afterEach(() => {
    mock.reset(); 
  });

  it("fetchRepositoryInfo should return repository information", async () => {
    const responseData = {
      name: "example-repo",
      owner: {
        login: "example-user",
      },
      language: "JavaScript",
    };

    mock.onGet(GET_REPO_INFO_API, commonConfig).reply(200, responseData);

    const result = await fetchRepositoryInfo();

    expect(result).toEqual(responseData);
  });

  it("fetchRepositoryInfo should throw an error on failed request", async () => {
    mock.onGet(GET_REPO_INFO_API, commonConfig).reply(500);

    await expect(fetchRepositoryInfo()).rejects.toThrow();
  });

  it("fetchCommits should return commit information", async () => {
    const responseData = {
      commits: [
        {
          sha: "123abc",
          message: "Commit message",
        },
      ],
    };

    mock.onGet(GET_COMMITS_API, commonConfig).reply(200, responseData);

    const result = await fetchCommits();

    expect(result).toEqual(responseData);
  });

  it("fetchCommits should throw an error on failed request", async () => {
    mock.onGet(GET_COMMITS_API, commonConfig).reply(500);

    await expect(fetchCommits()).rejects.toThrow();
  });
});
