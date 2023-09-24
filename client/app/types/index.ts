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
  categoryCount: CategoryCountType[];
  solvedCount: CategoryCountType[];
  categoryTotal: number;
  solvedTotal: number;
}

export interface CategoryCountType {
  count: number;
  category: string;
}
