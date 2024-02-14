import { StoreProvider } from "@/providers/redux/StoreProvider";

import EditorFooter from "@/components/Footer";
import EditorNavbar from "@/components/Navbar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deev Editor",
  description: "Your instant and quick setup code editor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <EditorNavbar />
          <div>{children}</div>
          <EditorFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
