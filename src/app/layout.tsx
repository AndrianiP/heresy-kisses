import "~/styles/globals.css";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/Navbar";
import { HursheysFont } from "~/styles/fonts";

export const metadata = {
  title: "Heresy",
  description: "A cool little styling effect",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${HursheysFont.className} overflow-hidden `}>
        <Navbar />
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
