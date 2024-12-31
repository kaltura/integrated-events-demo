import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaUiConfListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaUiConfListResponse extends KalturaListResponse {
    readonly objects: KalturaUiConf[];
    constructor(data?: KalturaUiConfListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
