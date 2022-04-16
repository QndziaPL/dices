import React, { Dispatch, FC } from "react";
import { GameState } from "../types/types";

interface Props {
  gameState: GameState;
  setGameState: Dispatch<React.SetStateAction<GameState>>;
}

const SetUpScreen: FC<Props> = ({ setGameState, gameState }) => {
  const handlePlayersNumberChange = (number: number) => {
    setGameState((prev) => ({ ...prev, players: { ...prev.players, number } }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          id="2"
          name="drone"
          value="2"
          checked={gameState.players.number === 2}
          onChange={() => handlePlayersNumberChange(2)}
        />
        <label htmlFor="2">2 Players</label>
      </div>
      <div>
        <input
          type="radio"
          id="3"
          name="drone"
          value="3"
          checked={gameState.players.number === 3}
          onChange={() => handlePlayersNumberChange(3)}
        />
        <label htmlFor="3">3 Players</label>
      </div>
      <div>
        <input
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
  );
};

export default SetUpScreen;
