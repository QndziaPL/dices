import React, { Dispatch, FC } from "react";
import { GameProgress, GameState } from "../../types/types";
import "./SingleRound.css";
import SingleColumn from "../../components/SingleColumn/SingleColumn";
import NamesForRowsColumn from "../../components/NamesForRowsColumn/NamesForRowsColumn";
import { SCORE_NAMES_COLUMN_WIDTH } from "../../consts";
import ActionButton from "../../components/ActionButton";
import { INITIAL_GAME_STATE } from "../../components/Game";

interface Props {
  gameState: GameState;
  setGameState: Dispatch<React.SetStateAction<GameState>>;
  singleRowHeight: number;
  screenWidth: number;
}

const SingleRound: FC<Props> = ({
  setGameState,
  gameState,
  singleRowHeight,
  screenWidth,
}) => {
  const playersScoresToDisplay = [
    ...gameState.rounds[gameState.activeRound - 1],
  ].splice(0, gameState.players.number);

  const columnWidth =
    (screenWidth - SCORE_NAMES_COLUMN_WIDTH) / gameState.players.number;

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

  const resetGame = () => {
    if (window.confirm("Czy na pewno chcesz zresetować grę?")) {
      setGameState(INITIAL_GAME_STATE);
    }
  };

  const nextRound = () => {
    if (gameState.activeRound === 3) {
      setGameState((prev) => ({
        ...prev,
        gameProgress: GameProgress.FINISHED,
      }));
    } else {
      setGameState((prev) => ({ ...prev, activeRound: prev.activeRound + 1 }));
    }
  };

  const nextRoundDisabled = false;

  const gameContent = (
    <div className="singleRound">
      <NamesForRowsColumn singleRowHeight={singleRowHeight} />
      <div className="playerColumns">
        <div style={{ display: "flex" }}>
          {playersScoresToDisplay.map((scores, index) => (
            <SingleColumn
              gameState={gameState}
              playerIndex={index}
              columnWidth={columnWidth}
              scores={scores}
              singleRowHeight={singleRowHeight}
            />
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <h1 style={{ marginBottom: 10 }}>Runda {gameState.activeRound}</h1>
      {gameContent}
      <ActionButton content="następny gracz" action={nextPlayer} />
      <ActionButton
        disabled={nextRoundDisabled}
        content={gameState.activeRound === 3 ? "zakończ grę" : "następna runda"}
        action={nextRound}
      />
      <ActionButton
        content="reset gry"
        action={resetGame}
        style={{ backgroundColor: "red", display: "block", marginTop: 30 }}
      />
    </div>
  );
};

export default SingleRound;
