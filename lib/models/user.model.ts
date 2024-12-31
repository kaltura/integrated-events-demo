// This file is not related to the Kaltura integration.
// This is a sample implementation of a naive application that manages users (register, login)
// to simulate the customer's application.
import * as fs from 'fs';
import { parse } from 'csv-parse';
import path from 'path';

export class User {
    public id: string;
    public firstName: string;
    public lastName: string;
    public company?: string;
    public email?: string;
    public toString() {
        return `${this.id},${this.firstName},${this.lastName},${this.email},${this.company}`;
    }
}
export class UserModel {
    private userFileContent: Buffer;
    private headers = ['id', 'firstName', 'lastName', 'company', 'email'];
    private csvFilePath = path.resolve(__dirname, '../../users.csv');

    constructor() {
        this.userFileContent = fs.readFileSync(this.csvFilePath);
    }

    /**
     * method adds a user if does not exist in the csv.
     * 
     * @param {User} user 
     * @returns boolean
     */
    public async addUser(user: User) {
        const existing = await this.get(user.id);
        if (existing === false) {
            const res = fs.appendFileSync(this.csvFilePath, user.toString() + "\n");
            return true;
        }
        return false;
    }

    /**
     * method returns the user object if found in the CSV or false if not found
     * 
     * @param {string} id
     * @returns {User | false}
     */
    public async get(id: string) {
        const records: User[] = [];
        const result = await parse(this.userFileContent, { delimiter: ',', columns: this.headers });
        for await (const record of result) {
            records.push(record);
        }
        const userMatch = records.filter((v: User, i) => {
            return v.id === id;
        })

        if (userMatch && userMatch.length === 1) {
            return userMatch[0];
        }
        return false;
    }
}