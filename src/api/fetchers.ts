import fileDownload from "js-file-download";
import { axiosInstance } from "./instance";
import { IAnketa } from "../types/custom";

export const requestGetAnketa = () => {
  return axiosInstance
    .get<{ qa: { resultAnswers: IAnketa[] } }>("/anketa")
    .then((response) => response.data.qa.resultAnswers);
};

interface IRequestPostProject {
  payload: {
    name: string;
    userId: number;
    packages: Array<{ name: string }>;
    ecosystem: string;
    questuinnaire: Array<{
      questionId: number;
      answerId: number;
    }>;
  };
}

export const requestPostProject = (payload: IRequestPostProject["payload"]) => {
  return axiosInstance
    .post("/project", payload)
    .then((response) => fileDownload(response.data, "data.csv"));
};
