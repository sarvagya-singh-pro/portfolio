
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Sarvagya's awesome portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}><MantineProvider>{children}</MantineProvider></body>
     
    </html>
  );
}
