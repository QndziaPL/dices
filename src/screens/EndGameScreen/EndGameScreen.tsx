import React, { FC } from "react";
import ActionButton from "../../components/ActionButton";

interface Props {
  resetGame: () => void;
  activeRound: number;
  previousRound: (e: Event) => void;
}

const EndGameScreen: FC<Props> = ({
  resetGame,
  previousRound,
  activeRound,
}) => {
  return (
    <div>
      <div>kuniec gry!</div>
      {activeRound > 1 && (
        <ActionButton
          content="wróć do poprzedniej rundy"
          action={previousRound}
          style={{ backgroundColor: "orange", display: "block", marginTop: 30 }}
        />
      )}
      <ActionButton
        content="reset gry"
        action={resetGame}
        style={{ backgroundColor: "red", display: "block", marginTop: 30 }}
      />
    </div>
  );
};

export default EndGameScreen;
