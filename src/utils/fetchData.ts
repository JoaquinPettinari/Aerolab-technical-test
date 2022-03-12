import axios from "axios";

const basicUrl = "https://coding-challenge-api.aerolab.co";
const headers = {
   headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
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
   const url = `${basicUrl}/redeem/asdsadsa`;
   const body = { productId: id };
   return axios.post(url, body, headers);
};
