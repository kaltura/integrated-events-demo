import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserLoginData } from './KalturaUserLoginData';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaUserLoginDataListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaUserLoginDataListResponse extends KalturaListResponse {
    readonly objects: KalturaUserLoginData[];
    constructor(data?: KalturaUserLoginDataListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
