export type IAnketaAnswer = {
  id: number;
  questionId: number;
  answer: string;
  value: number;
};

export type IAnketa = {
  id: number;
  question: string;
  coefficient: number;
  Answers: IAnketaAnswer[];
};
