import Card from './card';
import * as S from './styled';

const icons = [
  { src: '/icon1.png', title: 'Card 1' },
  { src: '/icon2.png', title: 'Card 2' },
  { src: '/icon3.png', title: 'Card 3' },
  { src: '/icon4.png', title: 'Card 4' },
];

function CardList() {
  return (
    <S.CardListContainer>
      {icons.map((iconData, index) => (
        <Card key={index} icon={iconData.src} title={iconData.title} />
      ))}
      <S.Button>+</S.Button> {/* Botão ao final da lista */}
    </S.CardListContainer>
  );
}

export default CardList;