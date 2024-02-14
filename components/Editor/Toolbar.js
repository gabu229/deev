// Toolbar.js

import React from "react";

const Toolbar = ({ onFormat, onExport, onMinify }) => {
  return (
    <div>
      <button onClick={onFormat}>Format</button>
      <button onClick={onExport}>Export</button>
      <button onClick={onMinify}>Minify</button>
    </div>
  );
};

export default Toolbar;
