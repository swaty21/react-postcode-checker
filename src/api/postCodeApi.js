import axios from 'axios';
import { POSTCODE_URL } from '../config/URLConfig';

export const fetchPostCodeDetails = async (postCodeWithoutSpace) => {
  const postCodeURL = POSTCODE_URL.replace('{postCodeValue}', postCodeWithoutSpace);
  return axios.get(postCodeURL);
};
