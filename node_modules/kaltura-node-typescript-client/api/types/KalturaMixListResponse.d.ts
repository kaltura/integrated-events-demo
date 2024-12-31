import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaMixListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaMixListResponse extends KalturaListResponse {
    readonly objects: KalturaMixEntry[];
    constructor(data?: KalturaMixListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
