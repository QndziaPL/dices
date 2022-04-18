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

export const EMPTY_ROUND: RoundScores = {
  player1: EMPTY_PLAYER_SCORES,
  player2: EMPTY_PLAYER_SCORES,
  player3: EMPTY_PLAYER_SCORES,
  player4: EMPTY_PLAYER_SCORES,
};

export enum GameProgress {
  SET_UP = 1,
  IN_PROGRESS = 2,
  FINISHED = 3,
}

export enum RoundKey {
  ROUND_1 = "round1",
  ROUND_2 = "round2",
  ROUND_3 = "round3",
}

export interface Players {
  number: number;
  names: string[];
}

export interface GameState {
  activePlayerIndex: number;
  gameProgress: GameProgress;
  activeRound: number;
  players: Players;
  rounds: {
    [RoundKey.ROUND_1]: RoundScores;
    [RoundKey.ROUND_2]: RoundScores;
    [RoundKey.ROUND_3]: RoundScores;
  };
}

export enum PlayerKey {
  PLAYER_1 = "player1",
  PLAYER_2 = "player2",
  PLAYER_3 = "player3",
  PLAYER_4 = "player4",
}

export interface RoundScores {
  [PlayerKey.PLAYER_1]: ScoreFields;
  [PlayerKey.PLAYER_2]: ScoreFields;
  [PlayerKey.PLAYER_3]: ScoreFields;
  [PlayerKey.PLAYER_4]: ScoreFields;
}

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
