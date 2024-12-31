import { KalturaResponse } from "./kaltura-response";
import { KalturaAPIException } from './kaltura-api-exception';
export declare class KalturaMultiResponse extends Array<KalturaResponse<any>> {
    constructor(results?: KalturaResponse<any>[]);
    hasErrors(): boolean;
    getFirstError(): KalturaAPIException;
}
