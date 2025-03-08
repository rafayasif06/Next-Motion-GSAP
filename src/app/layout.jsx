import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import localFont from "next/font/local";
import { PT_Serif, Roboto } from "next/font/google";

const ptSerif = PT_Serif({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-ptSerif",
});
const roboto = Roboto({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const teodor = localFont({
  src: [
    {
      path: "../fonts/Teodor-Regular.DWUeTY31.woff2",
    },
  ],
  variable: "--font-teodor",
});
const nHaas55 = localFont({
  src: [
    {
      path: "../fonts/NHaasGroteskTXPro-55Rg.DjjIn3vU.woff2",
    },
  ],
  variable: "--font-nHaas55",
});
const nHaas65 = localFont({
  src: [
    {
      path: "../fonts/NHaasGroteskTXPro-65Md.obxsJaSp.woff2",
    },
  ],
  variable: "--font-nHaas65",
});

export const metadata = {
  title: "111 West 57th Street",
  description: "111 West 57th Street",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${roboto.variable} ${ptSerif.variable} ${teodor.variable} ${nHaas55.variable} ${nHaas65.variable} font-teodor`}>
        {children}
      </body>
    </html>
  );
}
