import { useUnit } from "effector-react";
import React, { PropsWithChildren, useEffect } from "react";
import { $redirect, redirectApi } from "../../core/atoms/redirect";
import { useNavigate } from "react-router-dom";

export const RedirectWidget: React.FC<PropsWithChildren> = ({
  children
}) => {
  const path = useUnit($redirect);
  const navigate = useNavigate();

  useEffect(() => {
    if (path) {
      navigate(path);
      redirectApi.reset();
    }
  }, [navigate, path]);

  return children;
};
