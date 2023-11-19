/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { commonConfig } from "../config";
import { GET_COMMITS_API, GET_REPO_INFO_API } from "./endPoints";
import { FetchRepositoryInfoResponse, RepoInfo, SuccessRepoResponse } from "./interfaces.repository";
import { Commit, FetchCommitsResponse, SuccessCommitResponse } from "./interfaces.commits";

/**
 * Asynchronous function for fetching repository information.
 *
 * @returns A promise that resolves to the response structure.
 * @throws An error if the fetch operation fails.
 */
export async function fetchRepositoryInfo(): Promise<FetchRepositoryInfoResponse> {
  try {
    // Perform the API request to retrieve repository information
    const response = await axios.get(GET_REPO_INFO_API, commonConfig);

    // Create a success response object
    const successResponse: SuccessRepoResponse = {
      data: response.data as RepoInfo
    };

    return successResponse;
  } catch (error) {
    // Rethrow the original error for external handling
    throw error;
  }
}

/**
 * Asynchronous function for fetching commit information.
 *
 * @returns A promise that resolves to the response structure.
 * @throws An error if the fetch operation fails.
 */
export async function fetchCommits(): Promise<FetchCommitsResponse> {
  try {
    // Perform the API request to retrieve commit information
    const response = await axios.get(GET_COMMITS_API, commonConfig);

    // Create a success response object
    const successResponse: SuccessCommitResponse = {
      data: response.data as Commit[],
    };

    return successResponse;
  } catch (error) {
    // Rethrow the original error for external handling
    throw error;
  }
}