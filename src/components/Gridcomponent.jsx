import React from 'react';
import '../components/Grid.modular.css';
import robotImage from '../assests/3-robot.jpg';


const GridComponent = ({ robotPosition, directions }) => {
  const gridSize = 5;

  const renderGrid = () => {
    const rows = [];
    for (let row = 0; row < gridSize; row++) {
      const cells = [];
      for (let col = 0; col < gridSize; col++) {
        const isRobotHere = robotPosition.x === col && robotPosition.y === row;
        cells.push(
          <div className={`cell ${isRobotHere ? 'robot' : ''}`} key={`${row}-${col}`}>
            {isRobotHere ? <img src={robotImage} alt="robot" className={`robot-image ${directions.toLowerCase()}`} /> : ''}
          </div>
        );
      }
      rows.push(<div className="row" key={row}>{cells}</div>);
    }
    return rows;
  };

  return <div className="grid">{renderGrid()}</div>;
};


export default GridComponent;


