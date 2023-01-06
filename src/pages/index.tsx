import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from '../styles/pages/home';

import camiseta1 from '../assets/1.png';
import camiseta2 from '../assets/2.png';
import camiseta3 from '../assets/3.png';
import camiseta4 from '../assets/4.png';

import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from 'react';

interface Props {
  list: number[];
}

export default function Home(props: Props) {
  const [list, setList] = useState<number[]>([]);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 69,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 74,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta4} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta H</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log('rodou');

  return {
    props: {
      list: [1, 2, 3],
    },
  };
};
