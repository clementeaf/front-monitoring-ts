import { GET_REPO_INFO_API, GET_COMMITS_API, BASE_URL } from "../endPoints";

describe('Base URL', () => {
  it('should have a valid BASE_URL', () => {
    expect(BASE_URL).toMatch(/^https?:\/\/.+$/);
  });
});

describe('API Endpoints', () => {
  it('should have valid structures for GET_REPO_INFO_API', () => {
    expect(GET_REPO_INFO_API).toMatch(/^https?:\/\/.+\/github\/repo-info$/);
  });

  it('should have valid structures for GET_COMMITS_API', () => {
    expect(GET_COMMITS_API).toMatch(/^https?:\/\/.+\/github\/commits$/);
  });
});
