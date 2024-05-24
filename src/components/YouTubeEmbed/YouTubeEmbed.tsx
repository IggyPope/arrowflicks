import { AspectRatio } from '@mantine/core';

import classes from './YouTubeEmbed.module.css';

const YouTubeEmbed = ({ videoKey }: { videoKey: string }) => (
  <AspectRatio ratio={500 / 281} maw={500} w="100%" style={{ borderRadius: '9px' }}>
    <iframe
      className={classes.iframe}
      allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoKey}`}
    />
  </AspectRatio>
);

export default YouTubeEmbed;
