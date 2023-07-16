import { useEffect } from "react";
import data from "../data/info-pagina.json"

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ${data.departamento}`; 
  }, [title]);
};

export default useTitle;