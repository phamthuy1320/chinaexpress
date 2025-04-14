import { useCallback, useState } from "react";

export const useAdmin = () => {
  const [show, setShow] = useState<boolean>();

  const onShow = useCallback(() => setShow(!show), [show]);
  const onLogin = useCallback((event: any) => {
    console.log(event);
  }, []);

  return {
    show,
    onShow,
    onLogin,
  };
};
