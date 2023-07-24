import { useState, useEffect } from 'react';

const useValidate = (userId) => {
  const [valid, setValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/validate/' + userId, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Error al iniciar sesion");
        }
        const jsonData = await response.json();
        
        setValid(jsonData.valid);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { valid, isLoading, error };
};

export default useValidate;
