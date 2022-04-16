import React, { FC } from "react";
import "./NamesForRowsColumn.css";
import { SCORE_NAMES_COLUMN_WIDTH } from "../../consts";

interface Props {
  name: string;
  singleRowHeight: number;
  additionalPoints?: number;
}

const SingleNameForRow: FC<Props> = ({
  singleRowHeight,
  name,
  additionalPoints,
}) => {
  return (
    <div
      className="singleNameForColumn"
      style={{ height: singleRowHeight, width: SCORE_NAMES_COLUMN_WIDTH }}
    >
      <span>
        {name}
        {additionalPoints && (
          <sup style={{ fontSize: 10 }}>({additionalPoints})</sup>
        )}
      </span>
    </div>
  );
};

export default SingleNameForRow;
