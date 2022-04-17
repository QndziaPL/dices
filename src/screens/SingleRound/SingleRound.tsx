import React, { ChangeEvent, Dispatch, FC } from "react";
import { FieldName, GameProgress, GameState } from "../../types/types";
import "./SingleRound.css";
import SingleColumn from "../../components/SingleColumn/SingleColumn";
import NamesForRowsColumn from "../../components/NamesForRowsColumn/NamesForRowsColumn";
import { SCORE_NAMES_COLUMN_WIDTH } from "../../consts";
import ActionButton from "../../components/ActionButton";
import { createInitialGameState } from "../../components/Game";

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
    ...gameState.rounds[gameState.activeRoundIndex],
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
      setGameState(createInitialGameState());
    }
  };

  const nextRound = () => {
    if (gameState.activeRoundIndex === 2) {
      setGameState((prev) => ({
        ...prev,
        gameProgress: GameProgress.FINISHED,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        activeRoundIndex: prev.activeRoundIndex + 1,
      }));
    }
  };

  const previousRound = () => {
    setGameState((prev) => ({
      ...prev,
      activeRoundIndex: prev.activeRoundIndex - 1,
    }));
  };

  const nextRoundDisabled = false; // TODO: dodać logikę

  const handleValueChange = (
    isActive: boolean,
    playerIndex: number,
    e: ChangeEvent<HTMLInputElement>,
    name: FieldName
  ) => {
    console.log(playerIndex);
    if (!isActive) return;
    const newGameState = { ...gameState };
    console.log(newGameState.rounds, "rounds");
    console.log(gameState.activeRoundIndex, "tutaj round index");
    newGameState.rounds[gameState.activeRoundIndex][playerIndex][name] =
      e.target.value;
    setGameState(newGameState);
  };

  return (
    <div>
      <h1 style={{ marginBottom: 10 }}>
        Runda {gameState.activeRoundIndex + 1}
      </h1>
      <div className="singleRound">
        <NamesForRowsColumn singleRowHeight={singleRowHeight} />
        <div className="playerColumns">
          <div style={{ display: "flex" }}>
            {playersScoresToDisplay.map((scores, index) => (
              <SingleColumn
                handleValueChange={(isActive, e, name) =>
                  handleValueChange(isActive, index, e, name)
                }
                key={index}
                playerScores={scores}
                setGameState={setGameState}
                gameState={gameState}
                playerIndex={index}
                columnWidth={columnWidth}
                singleRowHeight={singleRowHeight}
              />
            ))}
          </div>
        </div>
      </div>
      <ActionButton content="następny gracz" action={nextPlayer} />
      <ActionButton
        disabled={nextRoundDisabled}
        content={
          gameState.activeRoundIndex === 2 ? "zakończ grę" : "następna runda"
        }
        action={nextRound}
      />
      {gameState.activeRoundIndex > 0 && (
        <ActionButton
          content="wróć do poprzedniej rundy"
          action={previousRound}
          style={{ backgroundColor: "orange", display: "block", marginTop: 30 }}
        />
      )}
      <ActionButton
        content="reset gry"
        action={resetGame}
        style={{ backgroundColor: "red", display: "block", marginTop: 30 }}
      />
    </div>
  );
};

export default SingleRound;
