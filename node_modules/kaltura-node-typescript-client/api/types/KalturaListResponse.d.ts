import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaListResponseArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaListResponse extends KalturaObjectBase {
    readonly totalCount: number;
    constructor(data?: KalturaListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
