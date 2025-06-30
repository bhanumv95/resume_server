'use client';

import '../styles/globals.css';
import { ReactNode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../store/resumeSlice';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [userEmail, setUserEmail] = useState<string|null>(null);

  useEffect(() => {
    setUserEmail(localStorage.getItem('userEmail'));
  }, []);

  const logout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
  };

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <header className="bg-gray-100 py-3 px-6 flex justify-between">
            <Link href="/"><a className="font-bold">OpenResume AI</a></Link>
            <nav>
              <Link href="/builder"><a className="mr-4">Builder</a></Link>
              {userEmail ? (
                <>
                  <Link href="/saved"><a className="mr-4">Saved</a></Link>
                  <button onClick={logout}>{userEmail} (Logout)</button>
                </>
              ) : (
                <Link href="/login"><a className="mr-4">Login</a></Link>
              )}
            </nav>
          </header>
          {children}
        </Provider>
      </body>
    </html>
  );
}
