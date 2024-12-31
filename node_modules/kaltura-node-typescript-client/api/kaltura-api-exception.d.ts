export declare class KalturaAPIException extends Error {
    message: string;
    code: string;
    args: any;
    constructor(message: string, code: string, args: any);
}
