import { useEffect, useState } from "react";

const useRestaurantsMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(import.meta.env.VITE_RESTAURANT_MENU_URL + resid);
    // 655882
    // 53774

    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantsMenu;
