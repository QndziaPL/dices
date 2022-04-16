import React, { FC } from "react";
import SingleNameForRow from "./SingleNameForRow";

interface Props {
  singleRowHeight: number;
}

const NamesForRowsColumn: FC<Props> = ({ singleRowHeight }) => {
  return (
    <div>
      <SingleNameForRow name="1" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="2" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="3" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="4" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="5" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="6" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="" singleRowHeight={singleRowHeight} />
    </div>
  );
};

export default NamesForRowsColumn;
