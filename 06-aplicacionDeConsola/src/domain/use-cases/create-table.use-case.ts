export interface CreateTableOptions {
    base: number;
    limit?: number;
}
export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase {
    constructor /*
            DI - Dependency Injenction
        */() {}
    execute({ base, limit = 10 }: CreateTableOptions) {
        let outputMsg = "";
        for (let i = 0; i <= limit; i++) {
            outputMsg += `${base} x ${i} = ${base * i} \n`;
        }
        return outputMsg;
    }
}
