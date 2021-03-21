import Link from 'next/link';
import { withRouter } from 'next/router';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

function ActiveLink({ children, router, ...props }) {
  const className = router.pathname === props.href ? 'active' : null;

  return (
    <Link {...props}>
      {cloneElement(Children.only(children), { className })}
    </Link>
  );
}

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
};

export default withRouter(ActiveLink);
