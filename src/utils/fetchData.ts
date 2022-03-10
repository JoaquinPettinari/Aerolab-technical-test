import axios from "axios";

const basicUrl = "https://coding-challenge-api.aerolab.co";
const headers = {
   headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //Authorization: `Bearer ${process.env.TOKEN}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI5Mjc2YWE5ZWY3ODAwMWFlODdkYjAiLCJpYXQiOjE2NDY4NjQyMzR9.rwQbd6l4u6ziX_qJU0NGhNAI2nwnzYNnbGfWTYud2Hg`,
   },
};

export const getProducts = () => {
   const url = `${basicUrl}/products`;
   return axios.get(url, headers);
};

export const getUserInfo = () => {
   const url = `${basicUrl}/user/me`;
   return axios.get(url, headers);
};

export const setNewCoins = (amount: number) => {
   const url = `${basicUrl}/user/points`;
   const body = {
      amount: amount,
   };
   return axios.post(url, body, headers);
};

export const claimProduct = (id: string) => {
   const url = `${basicUrl}/redeem`;
   const body = {
      productId: id,
   };
   return axios.post(url, body, headers);
};
