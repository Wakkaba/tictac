import { useState } from "react";

export default function Player({
  onChangeName,
  initialName,
  symbol,
  isActive,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdit, setIsEdit] = useState(false);

  let handleEditClick = () => {
    setIsEdit((edit) => !edit);

    if (isEdit) {
      onChangeName(symbol, playerName);
    }
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
      <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
