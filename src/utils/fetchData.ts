import axios from "axios";

const headers = {
   headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //Authorization: `Bearer ${process.env.TOKEN}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI5Mjc2YWE5ZWY3ODAwMWFlODdkYjAiLCJpYXQiOjE2NDY4NjQyMzR9.rwQbd6l4u6ziX_qJU0NGhNAI2nwnzYNnbGfWTYud2Hg`,
   },
};

export const getProducts = () => {
   const url = "https://coding-challenge-api.aerolab.co/products";
   return axios.get(url, headers);
};

export const getUserInfo = () => {
   const url = "https://coding-challenge-api.aerolab.co/user/me";
   return axios.get(url, headers);
};
