import { pages, commonConfig } from '../config';

describe('Common Fetch Header', () => {
  it('should have the correct Content-Type header', () => {
    expect(commonConfig.headers['Content-Type']).toEqual('application/json');
  });
});

describe('Pages Configuration', () => {
  it('should have the expected number of pages', () => {
    expect(pages).toHaveLength(2);
  });

  it('should have valid structures for each page', () => {
    pages.forEach((page) => {
      expect(page).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          path: expect.any(String),
        })
      );
    });
  });

  it('should have unique page IDs', () => {
    const pageIds = pages.map((page) => page.id);
    const uniquePageIds = new Set(pageIds);
    expect(uniquePageIds.size).toEqual(pageIds.length);
  });
});
