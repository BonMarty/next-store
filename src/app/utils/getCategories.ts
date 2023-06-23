import axios from 'axios';

export const getCategories = async () => {
  try {
    const { data } = await axios.get<string[]>(
      'https://6465b947228bd07b3550cb8f.mockapi.io/categories',
    );
    return data;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};
