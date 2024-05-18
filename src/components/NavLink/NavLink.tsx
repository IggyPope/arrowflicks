import Link, { LinkProps } from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Button, ButtonProps } from '@mantine/core';

import classes from './NavLink.module.css';

type NavLinkProps = React.PropsWithChildren<ButtonProps & Pick<LinkProps, 'href'>>;

export const NavLink = ({ ...props }: NavLinkProps) => {
  const currentRoute = useSelectedLayoutSegment();

  const isActive = currentRoute === props.href.toString().slice(1);

  return (
    <Button
      component={Link}
      {...props}
      variant="subtle"
      className={`${classes.navLink} ${isActive && classes.active}`}
    >
      {props.children}
    </Button>
  );
};
