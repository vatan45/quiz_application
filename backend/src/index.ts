import { IoManager } from "./managers/IoManager";

const io = IoManager.getIO();

io.listen(3000);

io.on("connection", (Client) => {
  Client.on("event", (data) => {
    const type = data.type;
  });
  Client.on("disconnect", () => {
    /* … */
  });
});
