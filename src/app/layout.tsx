import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/react-query-provider";
import ReduxProvider from "@/providers/redux-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CommentSlide",
  description: "Automate your Instagram DMs with keyword triggers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
        <ReduxProvider>
            <ReactQueryProvider>
              {children}
            </ReactQueryProvider>
        </ReduxProvider>
        <Toaster />
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
