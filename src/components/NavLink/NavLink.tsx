import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, ButtonProps } from '@mantine/core';

import classes from './NavLink.module.css';

type NavLinkProps = React.PropsWithChildren<ButtonProps & Pick<LinkProps, 'href'>>;

export const NavLink = ({ ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

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
