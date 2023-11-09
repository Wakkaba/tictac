import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let handleClick = () => {
    setIsEdit((edit) => !edit);
  };

  let handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editableName = <span className="player-name">{playerName}</span>;
  if (isEdit) {
    editableName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
