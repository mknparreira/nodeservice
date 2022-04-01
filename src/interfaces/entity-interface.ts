import { EntityTarget } from "typeorm";

export interface Entity {
    name: EntityTarget<unknown>; tableName: string;
}