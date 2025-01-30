import React, { ReactElement } from "react";
//
import AppLayout from "./AppLayout";
import { LayoutPropsType } from "@/types/common.types";

const AuthLayout: React.FC<LayoutPropsType> = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;

export function getAuthLayout(page: ReactElement) {
  return (
    <AppLayout>
      <AuthLayout>{page}</AuthLayout>
    </AppLayout>
  );
}
