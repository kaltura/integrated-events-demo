import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFeatureStatus } from './KalturaFeatureStatus';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaFeatureStatusListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaFeatureStatusListResponse extends KalturaListResponse {
    readonly objects: KalturaFeatureStatus[];
    constructor(data?: KalturaFeatureStatusListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
