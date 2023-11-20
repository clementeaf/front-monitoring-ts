import { renderHook } from '@testing-library/react-hooks';
import { useQuery, UseQueryOptions } from 'react-query';
import useCommitsQuery, { FetchCommitsResponse } from '../useCommitsQuery';
import { fetchCommits } from '../../services/fetchRoutes';

jest.mock('react-query');
jest.mock('../../services/fetchRoutes');

describe('useCommitsQuery', () => {
  it('should call useQuery with the correct parameters', async () => {
    // Mock the fetchCommits function response
    const mockCommits: FetchCommitsResponse = {
      data: [
        { sha: '1', commit: { author: { name: 'clemente', email: 'clemente@example.com', date: '2023-01-01' } } },
        { sha: '2', commit: { author: { name: 'anotherAuthor', email: 'another@example.com', date: '2023-02-02' } } },
      ],
    };
    (fetchCommits as jest.Mock).mockResolvedValueOnce(mockCommits);

    // Set up the useQuery options
    const options: UseQueryOptions<FetchCommitsResponse, unknown> = {
      enabled: true,
      retry: 3,
      refetchOnWindowFocus: false,
    };

    // Render the hook
    renderHook(() => useCommitsQuery(options));

    // Assert that useQuery was called with the correct parameters
    expect(useQuery).toHaveBeenCalledWith(['commitsQuery'], expect.any(Function), options);
  });
});
