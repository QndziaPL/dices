import React, { ChangeEvent, FC } from "react";
import { FieldName, PlayerKey, Players, RoundScores } from "../../types/types";
import "./SingleRound.css";
import SingleColumn from "../../components/SingleColumn/SingleColumn";
import NamesForRowsColumn from "../../components/NamesForRowsColumn/NamesForRowsColumn";
import { SCORE_NAMES_COLUMN_WIDTH } from "../../consts";
import ActionButton from "../../components/ActionButton";

interface Props {
  activePlayer: PlayerKey;
  singleRowHeight: number;
  screenWidth: number;
  resetGame: () => void;
  nextRound: () => void;
  activeRound: number;
  previousRound: (something: any) => void;
  players: Players;
  nextPlayer: () => void;
  roundWithScores: RoundScores;
  updateSingleScoreForActivePlayer: (
    e: ChangeEvent<HTMLInputElement>,
    name: FieldName
  ) => void;
}

const SingleRound: FC<Props> = ({
  activeRound,
  activePlayer,
  singleRowHeight,
  screenWidth,
  resetGame,
  nextRound,
  previousRound,
  players,
  nextPlayer,
  updateSingleScoreForActivePlayer,
  roundWithScores,
}) => {
  const columnWidth = (screenWidth - SCORE_NAMES_COLUMN_WIDTH) / players.number;

  const nextRoundDisabled = false; // TODO: dodać logikę

  return (
    <div>
      <h1 style={{ marginBottom: 10 }}>Runda {activeRound}</h1>
      <div className="singleRound">
        <NamesForRowsColumn singleRowHeight={singleRowHeight} />
        <div className="playerColumns">
          <div style={{ display: "flex" }}>
            {Object.entries(roundWithScores).map(
              ([playerKey, scores], index) => (
                <SingleColumn
                  handleValueChange={updateSingleScoreForActivePlayer}
                  key={index}
                  playerScores={scores}
                  playerKey={index}
                  columnWidth={columnWidth}
                  singleRowHeight={singleRowHeight}
                  isPlayerActive={playerKey === activePlayer}
                  playerName={players.names[index]}
                />
              )
            )}
          </div>
        </div>
      </div>
      <ActionButton content="następny gracz" action={nextPlayer} />
      <ActionButton
        disabled={nextRoundDisabled}
        content={activeRound === 3 ? "zakończ grę" : "następna runda"}
        action={nextRound}
      />
      {activeRound > 1 && (
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
