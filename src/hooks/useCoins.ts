import { useEffect, useState } from "react";
import { claimProduct, getUserInfo, setNewCoins } from "../utils/fetchData";

function useCoins() {
   const [coins, setCoins] = useState<number>(0);
   const [name, setName] = useState("");

   useEffect(() => {
      async function getUserData() {
         const [useData] = await Promise.all([getUserInfo()]);
         const data = useData.data;
         setCoins(data.points);
         setName(data.name);
      }
      getUserData();
   }, []);

   const buyProduct = (mount: number, id: string) => {
      setCoins(prev => prev - mount);
      claimProduct(id)
         .then(res => {
            console.log(res);
         })
         .catch(err => {
            console.log(err);
         });
   };

   const addCoints = (mount: number) => {
      setNewCoins(mount);
      setCoins(coins + mount);
   };

   return { coins, buyProduct, addCoints, name };
}
export { useCoins };
