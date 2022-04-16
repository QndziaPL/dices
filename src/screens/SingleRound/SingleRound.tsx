import React, { Dispatch, FC } from "react";
import { GameState } from "../../types/types";
import "./SingleRound.css";
import SingleColumn from "../../components/SingleColumn/SingleColumn";
import NamesForRowsColumn from "../../components/NamesForRowsColumn/NamesForRowsColumn";

interface Props {
  gameState: GameState;
  setGameState: Dispatch<React.SetStateAction<GameState>>;
  singleRowHeight: number;
}

const SingleRound: FC<Props> = ({
  setGameState,
  gameState,
  singleRowHeight,
}) => {
  const playersScoresToDisplay = [
    ...gameState.rounds[gameState.activeRound - 1],
  ].splice(0, gameState.players.number);
  console.log(playersScoresToDisplay, "tutaj pls rounds");
  return (
    <div className="singleRound">
      <NamesForRowsColumn singleRowHeight={singleRowHeight} />
      {playersScoresToDisplay.map((scores) => (
        <SingleColumn scores={scores} singleRowHeight={singleRowHeight} />
      ))}
    </div>
  );
};

export default SingleRound;
