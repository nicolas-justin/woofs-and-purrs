import { ChevronRight } from '@styled-icons/feather';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Button from 'components/Button';

import * as S from './styles';

function WhoWeAreSection() {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Image>
            <img src="/img/home-who-we-are-section.png" alt="A cat and a dog" />
          </S.Image>

          <S.Description>
            <strong>Who We Are</strong>

            <Heading type="h2">
              We Love Your Pet,
              <br />
              Just As You Do!
            </Heading>

            <p>
              Rem ridi culus pharetra eligendi labore nulla explicabo sem! Modi
              ipsa, dolores cupiditate elementum molestias dis animi, consequ
              untur pulvinar, fringilla ducimus facilisis habitant, irure erure?
              Fringilla metus nulla expli cabo sem!
            </p>

            <Button
              title="Know More"
              withIcon={{
                icon: <ChevronRight />,
                side: 'right',
              }}
            />
          </S.Description>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}

export default WhoWeAreSection;
