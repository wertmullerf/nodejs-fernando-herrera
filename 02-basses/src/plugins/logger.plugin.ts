import winston, { format } from "winston";
const { combine, timestamp, json } = format;

const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), json()),
    //defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});
logger.add(
    new winston.transports.Console({
        format: winston.format.simple(),
    })
);
export const buildLogger = (service: string) => {
    return {
        log: (mensaje: string) => {
            logger.log("info", mensaje, service);
        },
        error: (mensaje: string) => {
            logger.error("error", mensaje, service);
        },
    };
};
