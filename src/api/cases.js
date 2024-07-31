import { getRequest } from './request';

export const getAllCases = async () => {
  try {
    const response = await getRequest({ url: '/cases'});
    console.log('response', response);
    return response;
  } catch (error) {
    throw new Error('Error fetching cases:', error);
  }
};

export const getCase = async (id) => {
  try {
    const response = await getRequest({ url: `cases/${id}`});
    return response.data;
  } catch (error) {
    throw new Error('Error fetching case:', error);
  }
};
