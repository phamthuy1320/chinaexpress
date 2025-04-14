import { useState } from "react";

export const useLogin = () => {
  const [data, setData] = useState<{ password: string }>();

  return {
    data,
  };
};
