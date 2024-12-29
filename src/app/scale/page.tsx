import { FC } from 'react'
import Hero from '@/components/hero'
import scaleImg from '../../../public/spaceship.png'

const ScalePage:FC = () => {
  return <Hero imgAlt="Light speed" imgData={scaleImg} title="Scale infinity" />;

}

export default ScalePage