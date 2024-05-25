'use client';

import { useEffect } from 'react';

import { Button, Group, Modal, Rating, Stack, Title } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeModal, setRating } from '@/store/slices/ratingModalSlice';
import { addRating, deleteRating } from '@/store/slices/ratingSlice';

import StarIcon from '../icons/StarIcon';
import classes from './RatingModal.module.css';

const RatingModal = () => {
  const dispatch = useAppDispatch();
  const { isModalOpened, movie, rating } = useAppSelector((state) => state.ratingModal);
  const ratedMovies = useAppSelector((state) => state.rating);

  useEffect(() => {
    if (movie) {
      const existingRating = ratedMovies[movie.id]?.rating;
      if (existingRating) {
        dispatch(setRating(existingRating));
      }
    }
  }, [movie]);

  const saveRating = () => {
    if (movie && rating !== undefined) {
      dispatch(addRating({ movie, rating }));
    }
    dispatch(closeModal());
  };

  const removeRating = () => {
    if (movie) {
      dispatch(deleteRating(movie.id));
    }
    dispatch(closeModal());
  };

  return (
    <Modal.Root
      opened={isModalOpened}
      onClose={() => dispatch(closeModal())}
      centered
      className={classes.root}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header className={classes.header}>
          <Modal.Title className={classes.title}>Your rating</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body className={classes.body}>
          {movie && (
            <Stack gap="md">
              <Title order={3} fz="sm" fw={700} lh="sm">
                {movie.original_title}
              </Title>
              <Rating
                emptySymbol={<StarIcon />}
                fullSymbol={<StarIcon fillColor="yellow" />}
                value={rating}
                onChange={(value) => dispatch(setRating(value))}
                count={10}
                size="lg"
                classNames={{ root: classes.ratingRoot }}
              />
              <Group gap="md">
                <Button onClick={saveRating}>Save</Button>
                <Button variant="subtle" px={0} onClick={removeRating}>
                  Remove rating
                </Button>
              </Group>
            </Stack>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default RatingModal;
