import React, { FC } from "react";
import SingleNameForRow from "./SingleNameForRow";

interface Props {
  singleRowHeight: number;
}

const NamesForRowsColumn: FC<Props> = ({ singleRowHeight }) => {
  return (
    <div>
      <div style={{ height: singleRowHeight }} />
      <SingleNameForRow name="1" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="2" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="3" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="4" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="5" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="6" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="szkółka" singleRowHeight={singleRowHeight} />
      <SingleNameForRow
        name="P"
        singleRowHeight={singleRowHeight}
        additionalPoints={3}
      />
      <SingleNameForRow
        name="2P"
        singleRowHeight={singleRowHeight}
        additionalPoints={6}
      />
      <SingleNameForRow
        name="T"
        singleRowHeight={singleRowHeight}
        additionalPoints={9}
      />
      <SingleNameForRow
        name="M"
        singleRowHeight={singleRowHeight}
        additionalPoints={12}
      />
      <SingleNameForRow
        name="D"
        singleRowHeight={singleRowHeight}
        additionalPoints={15}
      />
      <SingleNameForRow
        name="F"
        singleRowHeight={singleRowHeight}
        additionalPoints={18}
      />
      <SingleNameForRow
        name="K"
        singleRowHeight={singleRowHeight}
        additionalPoints={21}
      />
      <SingleNameForRow
        name="P"
        singleRowHeight={singleRowHeight}
        additionalPoints={50}
      />
      <SingleNameForRow name="S" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="dół" singleRowHeight={singleRowHeight} />
      <SingleNameForRow name="suma" singleRowHeight={singleRowHeight} />
    </div>
  );
};

export default NamesForRowsColumn;
