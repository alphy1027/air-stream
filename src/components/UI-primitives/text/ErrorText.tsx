import { ReactNode } from "react";

const ErrorText = ({ children }: { children: ReactNode }) => {
  return <p className="text-red-600 font-semibold tracking-wide text-body-lg">{children}</p>;
};

export default ErrorText;
