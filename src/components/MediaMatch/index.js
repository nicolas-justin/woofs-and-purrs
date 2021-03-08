import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import theme from 'styles/theme';

function MediaMatch({ children, lessThan, greaterThan }) {
  const [vw, setVw] = useState(0);
  const [lt, setLt] = useState(0);
  const [gt, setGt] = useState(0);

  const handleResize = useCallback(() => {
    setVw(window.innerWidth);
  }, []);

  const handleLessThan = useCallback(() => {
    return vw < lt ? children : null;
  }, [vw, lt, children]);

  const handleGreaterThan = useCallback(() => {
    return vw > gt ? children : null;
  }, [vw, gt, children]);

  useEffect(() => {
    const { breakpoints } = theme;

    if (window?.innerWidth) {
      setVw(window.innerWidth);
    }

    if (breakpoints?.[lessThan]) {
      const lt = breakpoints[lessThan].replace(/\D/g, '');

      setLt(Number(lt));
    }

    if (breakpoints?.[greaterThan]) {
      const gt = breakpoints[greaterThan].replace(/\D/g, '');

      setGt(Number(gt));
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [lessThan, greaterThan, handleResize]);

  return (
    <>
      {!!lessThan && handleLessThan()}
      {!!greaterThan && handleGreaterThan()}
    </>
  );
}

MediaMatch.propTypes = {
  children: PropTypes.node.isRequired,
  lessThan: PropTypes.oneOf(Object.keys(theme.breakpoints)),
  greaterThan: PropTypes.oneOf(Object.keys(theme.breakpoints)),
};

export default MediaMatch;
