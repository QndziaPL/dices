import React, { ChangeEventHandler, FC } from "react";

interface Props {
  singleRowHeight: number;
  value: number | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SingleField: FC<Props> = ({ singleRowHeight, value, onChange }) => {
  return (
    <div style={{ height: singleRowHeight, position: "relative" }}>
      <input
        style={{ height: "100%" }}
        type="number"
        value={value ?? undefined}
        onChange={onChange}
      />
    </div>
  );
};

export default SingleField;
