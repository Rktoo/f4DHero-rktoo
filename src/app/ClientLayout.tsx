// src/app/ClientLayout.tsx
'use client';

import {ReactNode, useState} from 'react';
import Header from '@/components/Header'; // Adjust the path as needed

export default function ClientLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <main className={`font-gilroy`}>
        {children}
      </main>
    </>
  );
}