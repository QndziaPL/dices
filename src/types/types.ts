export const EMPTY_PLAYER_SCORES: ScoreFields = {
  school1: "",
  big: "",
  chance: "",
  school3: "",
  school4: "",
  school5: "",
  school2: "",
  school6: "",
  four: "",
  full: "",
  pair: "",
  poker: "",
  twoPairs: "",
  small: "",
  three: "",
  afterSchool: "",
  afterBottom: "",
  schoolAndBottom: "",
};

export const EMPTY_ROUND: RoundScores = [
  { ...EMPTY_PLAYER_SCORES },
  { ...EMPTY_PLAYER_SCORES },
  { ...EMPTY_PLAYER_SCORES },
  { ...EMPTY_PLAYER_SCORES },
];

export enum GameProgress {
  SET_UP = 1,
  IN_PROGRESS = 2,
  FINISHED = 3,
}

export interface GameState {
  activePlayerIndex: number;
  gameProgress: GameProgress;
  activeRoundIndex: number;
  players: {
    number: number;
    names: string[];
  };
  rounds: RoundScores[];
}

export type RoundScores = ScoreFields[];

export interface ScoreFields {
  school1: string;
  school2: string;
  school3: string;
  school4: string;
  school5: string;
  school6: string;
  pair: string;
  twoPairs: string;
  three: string;
  small: string;
  big: string;
  full: string;
  four: string;
  poker: string;
  chance: string;
  afterSchool: string;
  afterBottom: string;
  schoolAndBottom: string;
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
  SCHOOL_AND_BOTTOM = "schoolAndBottom",
}
