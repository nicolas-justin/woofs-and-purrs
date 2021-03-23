import HeroSection from './HeroSection';
import WhoWeAreSection from './WhoWeAreSection';

import * as S from './styles';

function Home() {
  return (
    <S.Wrapper>
      <HeroSection />
      <WhoWeAreSection />
    </S.Wrapper>
  );
}

export default Home;
