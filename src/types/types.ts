export const EMPTY_PLAYER_SCORES: ScoreFields = {
  school1: null,
  big: null,
  chance: null,
  school3: null,
  school4: null,
  school5: null,
  school2: null,
  school6: null,
  four: null,
  full: null,
  pair: null,
  poker: null,
  twoPairs: null,
  small: null,
  three: null,
  afterSchool: null,
  afterBottom: null,
};

export const EMPTY_ROUND: RoundScores = [
  EMPTY_PLAYER_SCORES,
  EMPTY_PLAYER_SCORES,
  EMPTY_PLAYER_SCORES,
  EMPTY_PLAYER_SCORES,
];

export interface GameState {
  inProgress: boolean;
  activeRound: number;
  players: {
    number: number;
    names: string[];
  };
  rounds: RoundScores[];
}

export type RoundScores = ScoreFields[];

export interface ScoreFields {
  school1: number | null;
  school2: number | null;
  school3: number | null;
  school4: number | null;
  school5: number | null;
  school6: number | null;
  pair: number | null;
  twoPairs: number | null;
  three: number | null;
  small: number | null;
  big: number | null;
  full: number | null;
  four: number | null;
  poker: number | null;
  chance: number | null;
  afterSchool: number | null;
  afterBottom: number | null;
}

export enum FieldName {
  SCHOOL1 = "school1",
  SCHOOL2 = "school2",
  SCHOOL3 = "school3",
  SCHOOL4 = "school4",
  SCHOOL5 = "school5",
  SCHOOL6 = "school6",
  PAIR = "pair",
  TWO_PAIRS = "twoPairs",
  THREE = "three",
  SMALL = "small",
  BIG = "big",
  FULL = "full",
  FOUR = "four",
  POKER = "poker",
  CHANCE = "chance",
  AFTER_SCHOOL = "afterSchool",
  AFTER_BOTTOM = "afterBottom",
}
