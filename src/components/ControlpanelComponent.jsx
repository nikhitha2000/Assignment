import React from 'react';
import '../components/Controlpanel.modular.css';

const ControlPanel = ({ onMove, onRotateLeft, onRotateRight }) => {
  
  return (
    <div className="control-panel">
      <button className="button" onClick={onMove}>Move Forward</button>
      <button  className="button" onClick={onRotateLeft}>Rotate Left</button>
      <button className="button" onClick={onRotateRight}>Rotate Right</button>
    </div>
  );
};

export default ControlPanel;
