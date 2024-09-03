
export const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

export const moveForward = (position, direction) => {
  switch (direction) {
    case 'NORTH':
      return { ...position, y: Math.max(0, position.y + 1) }; 
    case 'EAST':
      return { ...position, x: Math.min(4, position.x + 1) }; 
    case 'SOUTH':
      return { ...position, y: Math.min(4, position.y + 1) };
    case 'WEST':
      return { ...position, x: Math.max(0, position.x + 1) }; 
    default:
      return position;
  }
};



export const rotate = (direction, turnRight) => {
  const currentIdx = directions.indexOf(direction);
  const newIdx = (currentIdx + (turnRight ? 1 : -1) + 4) % 4;
  return directions[newIdx];
};
