import React, { ChangeEvent, Dispatch, FC } from "react";
import { GameProgress, GameState } from "../../types/types";
import "./SetUpScreen.css";
import ActionButton from "../../components/ActionButton";

interface Props {
  gameState: GameState;
  setGameState: Dispatch<React.SetStateAction<GameState>>;
}

const SetUpScreen: FC<Props> = ({ setGameState, gameState }) => {
  const handlePlayersNumberChange = (number: number) => {
    setGameState((prev) => ({ ...prev, players: { ...prev.players, number } }));
  };
  const handlePlayerNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newNames = [...gameState.players.names];
    newNames[index] = e.target.value;
    setGameState((prev) => ({
      ...prev,
      players: { ...prev.players, names: newNames },
    }));
  };
  const playerNamesToEdit = [...gameState.players.names].splice(
    0,
    gameState.players.number
  );

  const startGame = () => {
    setGameState((prev) => ({
      ...prev,
      gameProgress: GameProgress.IN_PROGRESS,
    }));
  };

  return (
    <div>
      <div className="radioButtonsContainer">
        <div className="radioWithLabel">
          <input
            style={{ marginRight: 5 }}
            type="radio"
            id="2"
            name="drone"
            value="2"
            checked={gameState.players.number === 2}
            onChange={() => handlePlayersNumberChange(2)}
          />
          <label htmlFor="2">2 Players</label>
        </div>
        <div className="radioWithLabel">
          <input
            style={{ marginRight: 5 }}
            type="radio"
            id="3"
            name="drone"
            value="3"
            checked={gameState.players.number === 3}
            onChange={() => handlePlayersNumberChange(3)}
          />
          <label htmlFor="3">3 Players</label>
        </div>
        <div className="radioWithLabel">
          <input
            style={{ marginRight: 5 }}
            type="radio"
            id="4"
            name="drone"
            value="4"
            checked={gameState.players.number === 4}
            onChange={() => handlePlayersNumberChange(4)}
          />
          <label htmlFor="4">4 Players</label>
        </div>
      </div>
      {playerNamesToEdit.map((name, index) => (
        <div key={index}>
          <span style={{ marginRight: 5 }}>{index + 1}</span>
          <input
            value={name}
            onChange={(e) => handlePlayerNameChange(e, index)}
          />
        </div>
      ))}
      <ActionButton content="start game" action={startGame} />
    </div>
  );
};

export default SetUpScreen;
