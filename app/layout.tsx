import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat", // This is the CSS var Tailwind will use
});

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className="dark"> {/* default dark mode */}
      <body className={`${montserrat.className} h-full`}>
        <Providers>
          <main className="text-foreground bg-background font-montserrat">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
