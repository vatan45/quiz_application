import { IoManager } from "./managers/IoManager";

interface Problem {
  tittle: string;
  description: string;
  image: string;
  answer: string; //0,1,2,3
  option: {
    id: number;
    tittle: string;
  };
}
export class Quiz {
  private roomId: string;
  private hasStarted: boolean;
  private problems: Problem[];
  private activeproblem: number;

  constructor(roomId: string) {
    this.roomId = roomId;
    this.hasStarted = false;
    this.problems = [];
    this.activeproblem = 0;
  }
  addProblem(problems: Problem) {
    this.problems.push(problems);
  }
  start() {
    this.hasStarted = true;
    const io = IoManager.getIO();
    toString.emit("CHANGE_PROBLEM", {
      problem: this.problems[0],
    });
  }
  next() {
    this.activeproblem++;
    const problem = this.problems[this.activeproblem];
    const io = IoManager.getIO();
    if (problem) {
      to.emit("CHANGE_PROBLEM"),
        {
          problem,
        };
    } else {
    }
  }
}
