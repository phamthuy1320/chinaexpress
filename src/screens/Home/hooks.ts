import { useQuery } from "@tanstack/react-query";

export const useHome = () => {
  return useQuery({
    queryKey: [""],
    queryFn: () => {},
  });
};
