import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = () => void;
export class CronService {
    public static createJob(cronTime: CronTime, onTick: OnTick): CronJob {
        //es decir, 2 params: el primero indica el intervalo de tiempo y el segundo PARAM es un callback que va a decir que hacer cada N intervalo de tiempo
        const job = new CronJob(cronTime, onTick);
        job.start();
        return job;
    }
}
