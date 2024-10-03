
import "./globals.css";
import { Fugaz_One, Open_Sans } from "next/font/google";



const openSans = Open_Sans({ subsets: ["latin"]});
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Moody",
  description: "Track your daily mood every day of the year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1
        className={`text-base sm:text-lg font-bold textGradient transform transition-transform hover:scale-105  ${fugaz.className}`}
      >
        Moody
      </h1>
      <div className="flex items-center justify-between">
        placeholder
      </div>
    </header>
  );

  const footer = <footer className="p-4 sm:p-8">
    <p className={'text-center text-indigo-500 ' + fugaz.className}>Build by Fikret Erkara 💛</p>
  </footer>;
  return (
    <html lang="en">
      <body
        className={`
          ${openSans.className} 
          antialiased w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
