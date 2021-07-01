import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const useAuthenticate = () => {
  const { pathname } = useLocation();
  const [isAuthenticate, setStatusAutheticate] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setStatusAutheticate(true);
    } else {
      setStatusAutheticate(false);
    }
  }, [pathname]);

  return isAuthenticate;
};

export default useAuthenticate;
