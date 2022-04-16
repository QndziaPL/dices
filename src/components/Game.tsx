import React, { FC, useState } from "react";
import { EMPTY_ROUND, GameState } from "../types/types";
import SetUpScreen from "../screens/SetUpScreen";
import SingleRound from "../screens/SingleRound/SingleRound";

const initialGameState: GameState = {
  inProgress: false,
  activeRound: 1,
  players: {
    number: 2,
    names: ["Player 1", "Player 2", "Player 3", "Player 4"],
  },
  rounds: [EMPTY_ROUND, EMPTY_ROUND, EMPTY_ROUND],
};

interface Props {
  singleRowHeight: number;
  screenWidth: number;
}

const Game: FC<Props> = ({ singleRowHeight, screenWidth }) => {
  const [gameState, setGameState] = useState(initialGameState);

  return (
    <div>
      {!gameState.inProgress ? (
        <>
          <SetUpScreen gameState={gameState} setGameState={setGameState} />
          <SingleRound
            gameState={gameState}
            setGameState={setGameState}
            singleRowHeight={singleRowHeight}
            screenWidth={screenWidth}
          />
        </>
      ) : null}
    </div>
  );
};

export default Game;
