import React, { CSSProperties, FC } from "react";

interface Props {
  content: string;
  action: () => void;
  style?: CSSProperties;
  disabled?: boolean;
}

const ActionButton: FC<Props> = ({ action, content, style, disabled }) => {
  return (
    <button
      disabled={disabled}
      style={{ marginTop: 20, fontSize: 20, padding: 10, ...style }}
      onClick={action}
    >
      {content}
    </button>
  );
};

export default ActionButton;
