import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Menu as MenuIcon, X as CloseIcon } from '@styled-icons/feather';

import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';
import Button from 'components/Button';

import * as S from './styles';

function Menu() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => setIsOpen(true);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <S.Wrapper>
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
          <Link href="/" passHref>
            <S.MenuLink draggable="false">Home</S.MenuLink>
          </Link>

          <Link href="/who-we-are" passHref>
            <S.MenuLink draggable="false">Who We Are</S.MenuLink>
          </Link>

          <Link href="/services" passHref>
            <S.MenuLink draggable="false">Services</S.MenuLink>
          </Link>

          <Link href="/get-in-touch" passHref>
            <S.MenuLink draggable="false">Get In Touch</S.MenuLink>
          </Link>

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

        <Link href="/" passHref>
          <S.MenuLink draggable="false" onClick={handleCloseMenu}>
            Home
          </S.MenuLink>
        </Link>

        <Link href="/who-we-are" passHref>
          <S.MenuLink draggable="false" onClick={handleCloseMenu}>
            Who We Are
          </S.MenuLink>
        </Link>

        <Link href="/services" passHref>
          <S.MenuLink draggable="false" onClick={handleCloseMenu}>
            Services
          </S.MenuLink>
        </Link>

        <Link href="/get-in-touch" passHref>
          <S.MenuLink draggable="false" onClick={handleCloseMenu}>
            Get In Touch
          </S.MenuLink>
        </Link>

        <Button title="Download App" />
      </S.MenuFull>
    </S.Wrapper>
  );
}

export default Menu;
