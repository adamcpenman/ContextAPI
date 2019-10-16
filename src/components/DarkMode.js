import React from "react";

function DarkMode(props) {
  return (
    <label>
      <input
        type="checkbox"
        value={props.value}
        onChange={e => props.setValue(e.target.checked)}
      />
      <span>Dark Mode</span>
    </label>
  );
}

export default DarkMode;
