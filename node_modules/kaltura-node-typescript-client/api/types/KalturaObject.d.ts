import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaObjectArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaObject extends KalturaObjectBase {
    constructor(data?: KalturaObjectArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
