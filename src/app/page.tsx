'use client';

import {FC, useEffect} from 'react';
import { useRouter } from 'next/navigation';

const Home: FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirige vers la page de destination
    router.push('/home');
  }, [router]);

  return (
    <div className="bg-[#47715b]">
      {/* Contenu de secours si nécessaire */}
    </div>
  );
};

export default Home;