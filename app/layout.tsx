import React from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Auth0ProviderWithNavigate from "@/auth/Auth0ProviderWithNavigate";
import ReactQueryProvider from "@/api/reactQuerySetup";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { createMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = createMetadata({
  title: {
    absolute: "Islam Belamri",
    template: "Islam Belamri | %s",
  },
  description: "This is my professional portfolio site.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <ReactQueryProvider>
            <Auth0ProviderWithNavigate>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Header />
                {children}
                <Toaster visibleToasts={1} position="bottom-right" richColors />
                <Footer />
              </ThemeProvider>
            </Auth0ProviderWithNavigate>
          </ReactQueryProvider>
        </body>
      </html>
    </>
  );
}
