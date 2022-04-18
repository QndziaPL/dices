import React, { ChangeEvent, FC } from "react";
import { FieldName, ScoreFields } from "../../types/types";
import "./SingleColumn.css";
import SingleField from "../SingleField";

interface Props {
  playerScores: ScoreFields;
  singleRowHeight: number;
  columnWidth: number;
  isPlayerActive: boolean;
  playerKey: number;
  playerName: string;
  handleValueChange: (
    e: ChangeEvent<HTMLInputElement>,
    name: FieldName
  ) => void;
}

const SingleColumn: FC<Props> = ({
  playerScores,
  singleRowHeight,
  columnWidth,
  playerKey,
  handleValueChange,
  isPlayerActive,
  playerName,
}) => {
  return (
    <div className="singleColumn">
      <div
        style={{
          height: singleRowHeight,
          backgroundColor: isPlayerActive ? "green" : "#efefef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {playerName}
      </div>
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.school1}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL1)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.school2}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL2)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.school3}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL3)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.school4}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL4)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.school5}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL5)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.school6}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL6)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={playerScores.afterSchool}
        onChange={(e) => handleValueChange(e, FieldName.AFTER_SCHOOL)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.pair}
        onChange={(e) => handleValueChange(e, FieldName.PAIR)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.twoPairs}
        onChange={(e) => handleValueChange(e, FieldName.TWO_PAIRS)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.three}
        onChange={(e) => handleValueChange(e, FieldName.THREE)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.small}
        onChange={(e) => handleValueChange(e, FieldName.SMALL)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.big}
        onChange={(e) => handleValueChange(e, FieldName.BIG)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.full}
        onChange={(e) => handleValueChange(e, FieldName.FULL)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.four}
        onChange={(e) => handleValueChange(e, FieldName.FOUR)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.poker}
        onChange={(e) => handleValueChange(e, FieldName.POKER)}
        columnWidth={columnWidth}
      />
      <SingleField
        activePlayer={isPlayerActive}
        singleRowHeight={singleRowHeight}
        value={playerScores.chance}
        onChange={(e) => handleValueChange(e, FieldName.CHANCE)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={playerScores.afterBottom}
        onChange={(e) => handleValueChange(e, FieldName.AFTER_BOTTOM)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={playerScores.schoolAndBottom}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL_AND_BOTTOM)}
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default SingleColumn;
