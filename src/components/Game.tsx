import React, { ChangeEvent, FC, useState } from "react";
import {
  EMPTY_ROUND,
  FieldName,
  GameProgress,
  GameState,
  PlayerKey,
  RoundKey,
} from "../types/types";
import SetUpScreen from "../screens/SetUpScreen/SetUpScreen";
import SingleRound from "../screens/SingleRound/SingleRound";
import EndGameScreen from "../screens/EndGameScreen/EndGameScreen";

export const INITIAL_GAME_STATE: GameState = {
  gameProgress: GameProgress.SET_UP,
  activeRound: 1,
  players: {
    number: 2,
    names: ["Player 1", "Player 2", "Player 3", "Player 4"],
  },
  rounds: {
    [RoundKey.ROUND_1]: EMPTY_ROUND,
    [RoundKey.ROUND_2]: EMPTY_ROUND,
    [RoundKey.ROUND_3]: EMPTY_ROUND,
  },
  activePlayerIndex: 0,
};

interface Props {
  singleRowHeight: number;
  screenWidth: number;
}

const createInitialGameState = () => ({ ...INITIAL_GAME_STATE });

const Game: FC<Props> = ({ singleRowHeight, screenWidth }) => {
  const [gameState, setGameState] = useState(createInitialGameState());

  const nextRound = () => {
    if (gameState.activeRound === 3) {
      setGameState((prev) => ({
        ...prev,
        gameProgress: GameProgress.FINISHED,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        activeRound: prev.activeRound + 1,
      }));
    }
  };

  const previousRound = (e: Event, fromFinishScreen?: boolean) => {
    console.log(fromFinishScreen, "tutaj from");
    setGameState((prev) => ({
      ...prev,
      gameProgress: GameProgress.IN_PROGRESS,
      activeRound: fromFinishScreen ? prev.activeRound : prev.activeRound - 1,
    }));
  };
  const resetGame = () => {
    if (window.confirm("Czy na pewno chcesz zresetować grę?")) {
      console.log(createInitialGameState(), "przed resetem");
      setGameState(createInitialGameState());
    }
  };

  if (gameState.gameProgress === GameProgress.SET_UP) {
    return <SetUpScreen gameState={gameState} setGameState={setGameState} />;
  }

  if (gameState.gameProgress === GameProgress.FINISHED) {
    return (
      <EndGameScreen
        resetGame={resetGame}
        activeRound={gameState.activeRound}
        previousRound={(e: Event) => previousRound(e, true)}
      />
    );
  }

  const nextPlayer = () => {
    setGameState((prev) => {
      const {
        activePlayerIndex,
        players: { number },
      } = prev;
      const newPlayerIndex =
        activePlayerIndex + 1 < number ? activePlayerIndex + 1 : 0;
      return { ...prev, activePlayerIndex: newPlayerIndex };
    });
  };
  const activePlayer =
    Object.entries(PlayerKey)[gameState.activePlayerIndex][1];
  const roundWithScores =
    gameState.rounds[Object.values(RoundKey)[gameState.activeRound - 1]];
  const updateSingleScoreForActivePlayer = (
    e: ChangeEvent<HTMLInputElement>,
    name: FieldName
  ) => {
    //TODO: check if player is active,
  };
  return (
    <SingleRound
      nextRound={nextRound}
      previousRound={(e) => previousRound(e, false)}
      resetGame={resetGame}
      nextPlayer={nextPlayer}
      singleRowHeight={singleRowHeight}
      screenWidth={screenWidth}
      activeRound={gameState.activeRound}
      players={gameState.players}
      activePlayer={activePlayer}
      roundWithScores={roundWithScores}
      updateSingleScoreForActivePlayer={updateSingleScoreForActivePlayer}
    />
  );
};

export default Game;
