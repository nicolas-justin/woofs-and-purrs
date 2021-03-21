import Container from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';

function HeroSection() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Paragraph>Pet Care Services, in New York City</S.Paragraph>

          <Heading color="white">
            We Provide Care, That Your Pet Deserves!
          </Heading>

          <div>
            <S.Phone>Call 123 456 7890</S.Phone>

            <S.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </S.Paragraph>
          </div>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}

export default HeroSection;
