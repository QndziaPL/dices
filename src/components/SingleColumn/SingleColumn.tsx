import React, { ChangeEvent, FC } from "react";
import { FieldName, ScoreFields } from "../../types/types";
import "./SingleColumn.css";
import SingleField from "../SingleField";

interface Props {
  scores: ScoreFields;
  singleRowHeight: number;
  columnWidth: number;
}

const SingleColumn: FC<Props> = ({ scores, singleRowHeight, columnWidth }) => {
  const handleValueChange = (e: ChangeEvent, name: FieldName) => {};
  return (
    <div className="singleColumn">
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school1}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL1)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school2}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL2)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school3}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL3)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school4}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL4)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school5}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL5)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school6}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL6)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={scores.afterSchool}
        onChange={(e) => handleValueChange(e, FieldName.AFTER_SCHOOL)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.pair}
        onChange={(e) => handleValueChange(e, FieldName.PAIR)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.twoPairs}
        onChange={(e) => handleValueChange(e, FieldName.TWO_PAIRS)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.three}
        onChange={(e) => handleValueChange(e, FieldName.THREE)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.small}
        onChange={(e) => handleValueChange(e, FieldName.SMALL)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.big}
        onChange={(e) => handleValueChange(e, FieldName.BIG)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.full}
        onChange={(e) => handleValueChange(e, FieldName.FULL)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.four}
        onChange={(e) => handleValueChange(e, FieldName.FOUR)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.poker}
        onChange={(e) => handleValueChange(e, FieldName.POKER)}
        columnWidth={columnWidth}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.chance}
        onChange={(e) => handleValueChange(e, FieldName.CHANCE)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={scores.afterBottom}
        onChange={(e) => handleValueChange(e, FieldName.AFTER_BOTTOM)}
        columnWidth={columnWidth}
      />
      <SingleField
        readonly
        singleRowHeight={singleRowHeight}
        value={scores.schoolAndBottom}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL_AND_BOTTOM)}
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default SingleColumn;
