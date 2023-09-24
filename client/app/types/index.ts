export interface ProblemType {
  id: number;
  category: string;
  question: string;
  answer: string;
  isSolved: boolean;
  completionDate: string | null;
}

export interface RequestProblemType {
  category: string;
  question: string;
  answer: string;
}

export interface ProblemCountType {
  problems: CategoryCount;
  total: number;
  solved: CategoryCount;
  solvedTotal: number;
}

export interface CategoryCount {
  client: number;
  server: number;
  network: number;
  os: number;
  data_structrue: number;
  engineering: number;
}
