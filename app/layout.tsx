import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Team Sync",
  description:
    "Welcome to Team Sync , the next gen platform for finding teammates and mentor support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
