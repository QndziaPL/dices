import React, { ChangeEventHandler, FC } from "react";

interface Props {
  singleRowHeight: number;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  columnWidth: number;
  readonly?: boolean;
  activePlayer?: boolean;
}

const SingleField: FC<Props> = ({
  singleRowHeight,
  value,
  onChange,
  columnWidth,
  readonly,
  activePlayer,
}) => {
  return (
    <input
      disabled={readonly}
      style={{
        height: singleRowHeight,
        display: "block",
        width: columnWidth,
        textAlign: "center",
        pointerEvents: activePlayer ? "all" : "none",
      }}
      type="number"
      value={value ?? undefined}
      onChange={onChange}
      size={3}
    />
  );
};

export default SingleField;
