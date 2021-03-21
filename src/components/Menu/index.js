import { useState } from 'react';
import { useRouter } from 'next/router';

import { Menu as MenuIcon, X as CloseIcon } from '@styled-icons/feather';

import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';
import Button from 'components/Button';
import Container from 'components/Container';
import ActiveLink from 'components/ActiveLink';

import * as S from './styles';

function Menu() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <S.Wrapper>
      <Container>
        <MediaMatch lessThan="medium">
          <Logo white={isHome} />
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <Logo large withLabel white={isHome} />
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <S.IconWrapper
            onClick={handleOpenMenu}
            aria-label="Open Menu"
            role="button"
            tabIndex="0"
          >
            <MenuIcon />
          </S.IconWrapper>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <S.MenuNav aria-label="Menu" white={isHome}>
            <ActiveLink href="/" passHref>
              <S.MenuLink draggable="false">Home</S.MenuLink>
            </ActiveLink>

            <ActiveLink href="/who-we-are" passHref>
              <S.MenuLink draggable="false">Who We Are</S.MenuLink>
            </ActiveLink>

            <ActiveLink href="/services" passHref>
              <S.MenuLink draggable="false">Services</S.MenuLink>
            </ActiveLink>

            <ActiveLink href="/get-in-touch" passHref>
              <S.MenuLink draggable="false">Get In Touch</S.MenuLink>
            </ActiveLink>

            <Button title="Download App" />
          </S.MenuNav>
        </MediaMatch>

        <S.MenuFull aria-hidden={!isOpen} aria-label="Menu" isOpen={isOpen}>
          <S.IconWrapper
            onClick={handleCloseMenu}
            aria-label="Close Menu"
            role="button"
            tabIndex="0"
          >
            <CloseIcon />
          </S.IconWrapper>

          <ActiveLink href="/" passHref>
            <S.MenuLink draggable="false" onClick={handleCloseMenu}>
              Home
            </S.MenuLink>
          </ActiveLink>

          <ActiveLink href="/who-we-are" passHref>
            <S.MenuLink draggable="false" onClick={handleCloseMenu}>
              Who We Are
            </S.MenuLink>
          </ActiveLink>

          <ActiveLink href="/services" passHref>
            <S.MenuLink draggable="false" onClick={handleCloseMenu}>
              Services
            </S.MenuLink>
          </ActiveLink>

          <ActiveLink href="/get-in-touch" passHref>
            <S.MenuLink draggable="false" onClick={handleCloseMenu}>
              Get In Touch
            </S.MenuLink>
          </ActiveLink>

          <Button title="Download App" />
        </S.MenuFull>
      </Container>
    </S.Wrapper>
  );
}

export default Menu;
