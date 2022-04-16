import React, { Dispatch, FC } from "react";
import { GameState } from "../../types/types";
import "./SingleRound.css";
import SingleColumn from "../../components/SingleColumn/SingleColumn";
import NamesForRowsColumn from "../../components/NamesForRowsColumn/NamesForRowsColumn";
import { SCORE_NAMES_COLUMN_WIDTH } from "../../consts";

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
  return (
    <div className="singleRound">
      <NamesForRowsColumn singleRowHeight={singleRowHeight} />
      <div className="playerColumns">
        <div style={{ display: "flex" }}>
          {playersScoresToDisplay.map((scores) => (
            <SingleColumn
              columnWidth={columnWidth}
              scores={scores}
              singleRowHeight={singleRowHeight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRound;
