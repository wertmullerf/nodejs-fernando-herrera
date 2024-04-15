import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class ServerApp {
    public static start() {
        console.log("Server started");

        CronService.createJob("*/5 * * * * *", () => {
            const url = "http://google.com";
            new CheckService(
                () => console.log(`${url} is OK`),
                (err) => {
                    console.log(err);
                }
            ).execute(url);
        });
    }
}
