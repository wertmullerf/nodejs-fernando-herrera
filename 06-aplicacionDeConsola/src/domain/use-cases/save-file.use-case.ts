import fs from "fs";
export interface Options {
    fileContent: string;
    path: string;
    fileName: string;
}
export interface saveFileUseCase {
    execute: (options: Options) => boolean;
}

export class SaveFile implements saveFileUseCase {
    constructor() {
        /** REPOSITORY: StorageRepository */
    }
    execute({ fileContent, path, fileName }: Options): boolean {
        try {
            fs.mkdirSync(path, { recursive: true });
            fs.writeFileSync(`${path}/${fileName}.txt`, fileContent);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
