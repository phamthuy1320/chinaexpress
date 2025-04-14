import { productRepository } from "../../repositories";
import { useQuery } from "@tanstack/react-query";

export const useHome = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => productRepository.categoriesList(),
  });
};
