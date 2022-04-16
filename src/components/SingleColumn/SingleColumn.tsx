import React, { ChangeEvent, FC } from "react";
import { FieldName, ScoreFields } from "../../types/types";
import "./SingleColumn.css";
import SingleField from "../SingleField";

interface Props {
  scores: ScoreFields;
  singleRowHeight: number;
}

const SingleColumn: FC<Props> = ({ scores, singleRowHeight }) => {
  const handleValueChange = (e: ChangeEvent, name: FieldName) => {};
  return (
    <div className="singleColumn">
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school1}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL1)}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school2}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL2)}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school3}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL3)}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school4}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL4)}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school5}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL5)}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.school6}
        onChange={(e) => handleValueChange(e, FieldName.SCHOOL6)}
      />
      <SingleField
        singleRowHeight={singleRowHeight}
        value={scores.afterSchool}
        onChange={(e) => handleValueChange(e, FieldName.AFTER_SCHOOL)}
      />
    </div>
  );
};

export default SingleColumn;
