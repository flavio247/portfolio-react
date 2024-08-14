import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Portfolio - ${title}`;
  }, [title]);
  return;
};

export default useTitle;
