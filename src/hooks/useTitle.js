import { useEffect } from "react";

const useTitle = (title) => {

  useEffect(() => {
    document.title = `Región Sanitaria Departamental de Copán - ${title}`; 
  }, [title]);
};

export default useTitle;