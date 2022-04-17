import React, { FC, useState } from "react";
import { EMPTY_ROUND, GameProgress, GameState } from "../types/types";
import SetUpScreen from "../screens/SetUpScreen/SetUpScreen";
import SingleRound from "../screens/SingleRound/SingleRound";

export const INITIAL_GAME_STATE: GameState = {
  gameProgress: GameProgress.SET_UP,
  activeRoundIndex: 0,
  players: {
    number: 2,
    names: ["Player 1", "Player 2", "Player 3", "Player 4"],
  },
  rounds: [EMPTY_ROUND, EMPTY_ROUND, EMPTY_ROUND],
  activePlayerIndex: 0,
};

interface Props {
  singleRowHeight: number;
  screenWidth: number;
}

export const createInitialGameState = () => INITIAL_GAME_STATE;

const Game: FC<Props> = ({ singleRowHeight, screenWidth }) => {
  const [gameState, setGameState] = useState(createInitialGameState());

  if (gameState.gameProgress === GameProgress.SET_UP) {
    return <SetUpScreen gameState={gameState} setGameState={setGameState} />;
  }

  if (gameState.gameProgress === GameProgress.FINISHED) {
    return <div>game finished</div>;
  }

  return (
    <SingleRound
      gameState={gameState}
      setGameState={setGameState}
      singleRowHeight={singleRowHeight}
      screenWidth={screenWidth}
    />
  );
};

export default Game;
