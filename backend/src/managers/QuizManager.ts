import { Quiz } from "../Quiz";
import { IoManager } from "./IoManager";

export class QuizManager {
  private quizes: Quiz[];
  constructor() {
    this.quizes = [];
  }
  public start(roomId: string) {
    const io = IoManager.getIO();
    const quiz = this.quizes.find((x) => x.roomId === roomId);
    quiz.start();
  }
  public next(roomID: string) {
    const io = IoManager.getIO();
    io.to(roomId).emit({
      type: "START_ROOM",
    });
  }
}
