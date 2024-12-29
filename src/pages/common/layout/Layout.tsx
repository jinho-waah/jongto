import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100 dark:bg-dark text-gray-900 dark:text-gray-100">
      <Header />
      <div className="flex flex-col min-h-screen ">
        <main className="flex-grow">
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
