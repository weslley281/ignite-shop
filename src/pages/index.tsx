import Image from 'next/image';
import { styled } from '../styles';
import { HomeContainer, Product } from '../styles/pages/home';
import ImageProduct1 from '../assets/1.png';
import ImageProduct2 from '../assets/2.png';
import ImageProduct3 from '../assets/3.png';

export default function Home() {
  return (
    <div>
      <h1>Olá mundo</h1>
      <HomeContainer>
        <Product>
          <Image src={ImageProduct1} alt="" />

          <footer>
            <strong>Camisera X</strong>
            <strong>R$ 79,99</strong>
          </footer>
        </Product>
        <Product>
          <Image src={ImageProduct2} alt="" />

          <footer>
            <strong>Camisera Y</strong>
            <strong>R$ 69,99</strong>
          </footer>
        </Product>
        <Product>
          <Image src={ImageProduct3} alt="" />

          <footer>
            <strong>Camisera Z</strong>
            <strong>R$ 74,99</strong>
          </footer>
        </Product>
      </HomeContainer>
    </div>
  );
}
