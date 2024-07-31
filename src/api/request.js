/* eslint-disable no-undef */

const BASE_URL = '/api/v1';

// Helper function to create default headers
const createHeaders = (additionalHeaders = {}) => ({
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  ...additionalHeaders,
});

const fetchJson = async (url, options) => {
  const finalUrl = `${BASE_URL}${url}`;
  const response = await fetch(finalUrl, options);
  let responseJSON;

  try {
    responseJSON = await response.json();
  } catch (ignore) {
    responseJSON = {
      status: response.status,
      message: response.statusText,
    };
  }

  if (!response.ok) {
    const message = responseJSON.message || responseJSON.code || response.statusText;
    const error = new Error(message);

    error.response = {
      ...responseJSON,
      status: response.status,
      statusText: response.statusText,
    };
    throw error;
  }

  return responseJSON;
};

export const fetchWithTimeout = async (url, options, timeout = 30000) => {
  let timeoutId;
  const timeoutPromise = new Promise((_resolve, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error('Request timed out'));
    }, timeout);
  });

  const fetchPromise = fetchJson(url, options);

  const response = await Promise.race([timeoutPromise, fetchPromise]);
  clearTimeout(timeoutId);
  return response;
};

export const getRequest = async ({ url, timeout }) => {
  fetchWithTimeout(
    url,
    {
      method: 'GET',
      headers: createHeaders(),
    },
    timeout,
  );
};

// CSRF Token Management
let csrfToken = '';

export const setCsrfToken = (token) => {
  csrfToken = token;
};

export const postRequest = async ({ url, body, timeout }) => {
  fetchWithTimeout(
    url,
    {
      method: 'POST',
      headers: createHeaders({ 'X-CSRF-Token': csrfToken }),
      body: JSON.stringify(body),
    },
    timeout,
  );
};
