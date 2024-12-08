import { ReactNode } from "react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="m-4 p-4 bg-red-700 text-white">
        Authentication Header for both /signin and /signup
      </div>
      {children}
    </div>
  );
}
