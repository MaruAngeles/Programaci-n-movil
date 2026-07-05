import React, { useEffect, useState } from 'react';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : <HomeScreen />;
}