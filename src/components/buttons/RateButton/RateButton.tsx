import { useState } from 'react';

import { Button } from '@mantine/core';

import StarIcon from '@/components/icons/StarIcon';

import classes from './RateButton.module.css';

const RateButton = () => {
  const [rated, setRated] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRated((prevState) => !prevState);
  };

  return (
    <Button
      p={0}
      w={28}
      h={28}
      variant="subtle"
      onClick={handleClick}
      classNames={{ root: classes.button }}
    >
      <StarIcon fillColor={rated ? 'purple' : 'gray'} />
    </Button>
  );
};

export default RateButton;
