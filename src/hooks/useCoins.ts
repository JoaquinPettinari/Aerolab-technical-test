import { useEffect, useState } from "react";
import { getUserInfo } from "../utils/fetchData";

function useCoins() {
   const [coins, setCoins] = useState<number>(0);

   useEffect(() => {
      getUserInfo().then(res => {
         const data = res.data;
         setCoins(data.points);
      });
   }, []);

   const buyProduct = (mount: number) => {
      setCoins(prev => prev - mount);
   };

   const addCoints = (mount: number) => {
      setCoins(coins + mount);
   };

   return { coins, buyProduct, addCoints };
}
export { useCoins };
