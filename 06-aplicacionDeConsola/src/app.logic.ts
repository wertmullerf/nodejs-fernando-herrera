import fs from "fs";
import { yarg } from "./configs/plugins/yargs.plugin";

const { b: base, l: limit, s: show } = yarg;
let outputMsg = "";
const headerMsg = `
=================================
        Tabla de la ${base}
=================================
`;

for (let i = 0; i <= limit; i++) {
    outputMsg += `${base} x ${i} = ${base * i} \n`;
}

outputMsg = headerMsg + outputMsg;

if (show) {
    console.log(outputMsg, "\n", " File created!");
}

const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMsg);
