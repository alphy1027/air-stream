import React, { ReactNode } from "react";

const ErrorText = ({ children }: { children: ReactNode }) => {
  return <p className="text-red-600 font-medium text-body-base">{children}</p>;
};

export default ErrorText;
