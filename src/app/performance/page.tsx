import Hero from '@/components/hero';
import React, { FC } from 'react';
import performanceImg from '../../../public/Multimatic-220-AC-DC-Application-0807180586_RESIZED.jpg';

const PerformancePage:FC = () => {
  return <Hero imgAlt="Welding" imgData={performanceImg} title="Blazing fast performance" />;
}

export default PerformancePage