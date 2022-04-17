import React, { ChangeEvent, Dispatch, FC } from "react";
import { FieldName, GameState, ScoreFields } from "../../types/types";
import "./SingleColumn.css";
import SingleField from "../SingleField";

interface Props {
  playerScores: ScoreFields;
  singleRowHeight: number;
  columnWidth: number;
  gameState: GameState;
  setGameState: Dispatch<React.SetStateAction<GameState>>;
  playerIndex: number;
  handleValueChange: (
    isActive: boolean,
    e: ChangeEvent<HTMLInputElement>,
    name: FieldName
  ) => void;
}

const SingleColumn: FC<Props> = ({
  playerScores,
  singleRowHeight,
  columnWidth,
  playerIndex,
  gameState,
  setGameState,
  handleValueChange,
}) => {
  const isActive = gameState.activePlayerIndex === playerIndex;
  return (
    <div className="singleColumn">
      <div
        style={{
          height: singleRowHeight,
          backgroundColor: isActive ? "green" : "#efefef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gameState.players.names[playerIndex]}
      </div>
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.school1}
        onChange={(e) => handleValueChange(isActive, e, FieldName.SCHOOL1)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.school2}
        onChange={(e) => handleValueChange(isActive, e, FieldName.SCHOOL2)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.school3}
        onChange={(e) => handleValueChange(isActive, e, FieldName.SCHOOL3)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.school4}
        onChange={(e) => handleValueChange(isActive, e, FieldName.SCHOOL4)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.school5}
        onChange={(e) => handleValueChange(isActive, e, FieldName.SCHOOL5)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.school6}
        onChange={(e) => handleValueChange(isActive, e, FieldName.SCHOOL6)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={playerScores.afterSchool}
        onChange={(e) => handleValueChange(isActive, e, FieldName.AFTER_SCHOOL)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.pair}
        onChange={(e) => handleValueChange(isActive, e, FieldName.PAIR)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.twoPairs}
        onChange={(e) => handleValueChange(isActive, e, FieldName.TWO_PAIRS)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.three}
        onChange={(e) => handleValueChange(isActive, e, FieldName.THREE)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.small}
        onChange={(e) => handleValueChange(isActive, e, FieldName.SMALL)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.big}
        onChange={(e) => handleValueChange(isActive, e, FieldName.BIG)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.full}
        onChange={(e) => handleValueChange(isActive, e, FieldName.FULL)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.four}
        onChange={(e) => handleValueChange(isActive, e, FieldName.FOUR)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.poker}
        onChange={(e) => handleValueChange(isActive, e, FieldName.POKER)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={playerScores.chance}
        onChange={(e) => handleValueChange(isActive, e, FieldName.CHANCE)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={playerScores.afterBottom}
        onChange={(e) => handleValueChange(isActive, e, FieldName.AFTER_BOTTOM)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={playerScores.schoolAndBottom}
        onChange={(e) =>
          handleValueChange(isActive, e, FieldName.SCHOOL_AND_BOTTOM)
        }
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default SingleColumn;
