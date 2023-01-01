import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});

export default function Home() {
  return (
    <div>
      <h1>Olá mundo</h1>
      <Button>
        Enviar <span>Teste</span>
      </Button>
    </div>
  );
}
