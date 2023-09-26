import { BASE_URL } from '../constants';
import { RequestProblemType } from '../types';

export const getAllProblems = async () => {
  const response = await fetch(`${BASE_URL}/api/problem`);
  return response.json();
};

export const getNotSolvedAllProblems = async () => {
  const response = await fetch(`${BASE_URL}/api/problem/solving`);
  return response.json();
};

export const getNotSolvedAllProblemWithCategory = async (category: string) => {
  const response = await fetch(`${BASE_URL}/api/problem/solving?${category}`);
  return response.json();
};

export const getDailyProblems = async () => {
  const response = await fetch(`${BASE_URL}/api/problem/daily`);
  return response.json();
};

export const patchProblemCondition = async (id: number) => {
  const response = await fetch(`${BASE_URL}/api/problem/${id}`, {
    method: 'PATCH',
  });
  return response.json();
};

export const addProblem = async (request: RequestProblemType) => {
  return await fetch(`${BASE_URL}/api/problem`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(request),
  });
};

export const getProblemCount = async () => {
  const response = await fetch(`${BASE_URL}/api/problem/count`);
  return response.json();
};

export const getRecentlySolvedCount = async () => {
  const response = await fetch(`${BASE_URL}/api/problem/recently`);
  return response.json();
};
