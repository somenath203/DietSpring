import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/toaster"

import './globals.css';
import Footer from './_components/all_purpose_component/Footer';
import NavbarWrapper from './_components/navbar/NavbarWrapper';
import Navbar from './_components/navbar/Navbar';

export const metadata = {
  title: 'DietSpring',
  description:
    'Your personalized nutrition companion that crafts tailored meal plans, dynamic recipe suggestions, and caloric tracking, empowering you to achieve your health goals effortlessly.',
};

export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
    
      <html lang="en" suppressHydrationWarning>
        
        <body className="min-h-screen bg-gradient-to-tr from-green-50 to-white roboto-mono" suppressHydrationWarning>
          
          <header className="px-20">
            <NavbarWrapper>
              <Navbar />
            </NavbarWrapper>
          </header>

          <main className='px-10'>
            {children}
          </main>

          <footer className="px-20">
            <Footer />
          </footer>

          <Toaster />
        
        </body>


      </html>

    </ClerkProvider>
  );
}
