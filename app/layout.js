import Link from "next/link";
import "./globals.css";
import { Fugaz_One, Open_Sans } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import Logout from "@/components/Logout";

const openSans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Moody",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Broodl</h1>
      </Link>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8">
      <p className={"text-center text-indigo-500 " + fugaz.className}>
        Build by Fikret Erkara 💛
      </p>
    </footer>
  );
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`
          ${openSans.className} 
          antialiased w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800`}
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
