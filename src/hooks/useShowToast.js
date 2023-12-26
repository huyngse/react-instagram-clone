import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();
  // USE USECALLBACK TO PREVENT INFINITE LOOP BY CACHING THE FUNCTION
  const showToast = useCallback((title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  }, [toast]);

  return showToast;
};

export default useShowToast;
