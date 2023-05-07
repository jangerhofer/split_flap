import { Box, Text, render } from 'ink';
import React, { useEffect, useState } from 'react';
import { charMap } from './mappings.js';

const Counter = () => {
  return (
    <Box flexDirection="column" gap={1}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Row key={i.toString()} />
      ))}
    </Box>
  );
};

const Row = () => (
  <Box width={100} gap={1}>
    {Array.from({ length: 14 }).map((_, i, els) => (
      <Box width={1} key={i.toString()}>
        <Text backgroundColor={perc2color(100 * (i / els.length))}> </Text>
      </Box>
    ))}
  </Box>
);

const Element = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(
        (previousCounter) => (previousCounter + 1) % Object.keys(charMap).length
      );
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Text>{charMap[index]}</Text>;
};
render(<Element />);

function perc2color(perc) {
  let r, g;
  const b = 0;
  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  } else {
    g = 255;
    r = Math.round(510 - 5.1 * perc);
  }
  const h = r * 0x10000 + g * 0x100 + b * 0x1;
  return '#' + ('000000' + h.toString(16)).slice(-6);
}
