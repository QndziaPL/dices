import React, { ChangeEventHandler, FC } from "react";

interface Props {
  singleRowHeight: number;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  columnWidth: number;
  readonly?: boolean;
}

const SingleField: FC<Props> = ({
  singleRowHeight,
  value,
  onChange,
  columnWidth,
  readonly,
}) => {
  return (
    <input
      disabled={readonly}
      style={{
        height: singleRowHeight,
        display: "block",
        width: columnWidth,
        textAlign: "center",
      }}
      type="number"
      value={value ?? undefined}
      onChange={onChange}
      size={3}
    />
  );
};

export default SingleField;
