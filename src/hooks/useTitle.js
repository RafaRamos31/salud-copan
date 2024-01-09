import { useEffect } from "react";

const useTitle = (title) => {

  useEffect(() => {
    document.title = `Dirección Sanitaria Departamental de Copán - ${title}`; 
  }, [title]);
};

export default useTitle;