import axios from "axios";
const Base_url = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  url: Base_url,
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "5443b82c92msh8779338b22c3ad7p1e7074jsnee74d47182a6",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const apiData = async (url) => {
  try {
    const { data } = await axios.get(`${Base_url}/${url}`, options);
    return data;
  } catch {
    throw new Error("not found");
  }
};
// const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";
// const options = {
//   method: "GET",

//   params: {
//     maxResults: "50",
//   },
//   headers: {
//     "X-RapidAPI-Key": "5443b82c92msh8779338b22c3ad7p1e7074jsnee74d47182a6 ",
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };
// export const apiData = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
