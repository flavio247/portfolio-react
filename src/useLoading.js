import { useEffect, useState } from "react";
const useLoading = (time) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("Loading page...");
    setIsLoading(true);
    setTimeout(() => {
      console.log("Page loaded...");
      setIsLoading(false);
    }, time);
  }, [time]);
  return { isLoading };
};

export default useLoading;
