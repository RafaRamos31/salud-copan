import { useEffect } from "react";

const useTitle = (title) => {

  useEffect(() => {
    document.title = `Region Departamental de Salud de Copán - ${title}`; 
  }, [title]);
};

export default useTitle;