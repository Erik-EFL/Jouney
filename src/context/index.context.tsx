import React, { PropsWithChildren } from "react";
import { ConfigProvider } from "./config.context";

const providers = [ ConfigProvider ] as const;

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return providers.reduce((prev, Provider) => {
    return <Provider>{prev}</Provider>;
  }, children);
};
