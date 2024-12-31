import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaContextArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaContext extends KalturaObjectBase {
    constructor(data?: KalturaContextArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
