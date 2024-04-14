import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    name: string;
    destination: string;
}
export class ServerApp {
    static async run({ base, limit, show, name, destination }: RunOptions) {
        console.log("Server running...");
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            path: destination,
            fileName: name,
        }); //llama al metodo de la clase SaveFile y le envio todos los parametros en modo de obj que necesita
        if (show) {
            console.log(table);
        }
        wasCreated
            ? console.log("File created")
            : console.log("File not created");
    }
}
