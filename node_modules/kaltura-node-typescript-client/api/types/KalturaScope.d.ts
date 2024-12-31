import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaScopeArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaScope extends KalturaObjectBase {
    constructor(data?: KalturaScopeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
