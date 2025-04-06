import { Outfit } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";
const outfit = Outfit({subsets:['latin']});

export const metadata = {
  title: "Thryve",
  description: "A LMS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <Provider>
        {children}
        </Provider>
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
