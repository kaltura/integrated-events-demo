import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPagerArgs extends KalturaObjectBaseArgs {
    pageSize?: number;
    pageIndex?: number;
}
export declare class KalturaPager extends KalturaObjectBase {
    pageSize: number;
    pageIndex: number;
    constructor(data?: KalturaPagerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
