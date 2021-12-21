import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${GITHUB_TOKEN}`,
  },
});

// Get Search Results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  // Using axios
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;

  /* 
  ----------Using fetch api----------

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();

  return items; 
  
  */
};

// ------------- Using axios --------- //

// Get user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 20,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};

/*

----------Using fetch api -------------------------

// Get single user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    const data = await response.json();

    return data;
  }
};

// Get user repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 20,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();

  return data;
};

*/
