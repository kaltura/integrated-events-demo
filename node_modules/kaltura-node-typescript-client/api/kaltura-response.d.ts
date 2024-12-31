import { KalturaAPIException } from "./kaltura-api-exception";
export declare class KalturaResponse<T> {
    result: T;
    error: KalturaAPIException;
    constructor(result: T, error: KalturaAPIException);
}
