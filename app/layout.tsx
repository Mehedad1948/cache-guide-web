
import { Montserrat } from "next/font/google";
import { Providers } from './providers';

const inter = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] },);

const RootLayout = async ({ children, }: Readonly<{ children: React.ReactNode, }>) => {

  return (
    <html lang="en">

      <body className={`${inter.className} body dark h-full`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;