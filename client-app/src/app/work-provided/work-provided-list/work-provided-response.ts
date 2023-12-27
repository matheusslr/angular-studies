import { Client } from "../../clients/client";

export class WorkProvidedResponse {
    id!: number;
    description!: string;
    price!: number;
    date!: string;
    client!: Client;
}