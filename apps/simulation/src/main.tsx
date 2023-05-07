import React, { useState, useEffect } from 'react';
import { Box, render, Text } from 'ink';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Box width={14}>
        {Array.from({ length: 14 }).map((_, i, els) => (
          <Box key={i.toString()}>
            <Text backgroundColor={perc2color(100 * (i / els.length))}> </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

render(<Counter />);

function perc2color(perc) {
  let r,
    g,
    b = 0;
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
