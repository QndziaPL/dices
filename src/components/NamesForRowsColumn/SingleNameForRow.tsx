import React, { FC } from "react";
import "./NamesForRowsColumn.css";

interface Props {
  name: string;
  singleRowHeight: number;
}

const SingleNameForRow: FC<Props> = ({ singleRowHeight, name }) => {
  return (
    <div className="singleNameForColumn" style={{ height: singleRowHeight }}>
      {name}
    </div>
  );
};

export default SingleNameForRow;
