import { useRouter } from 'next/router';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,99</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          ipsum, nam reprehenderit voluptates eaque at, architecto aperiam et
          voluptatum in officia quae quos quaerat commodi! Voluptate, rerum
          eveniet. Necessitatibus, reprehenderit.
        </p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
