import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBaseResponseProfileArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaBaseResponseProfile extends KalturaObjectBase {
    constructor(data?: KalturaBaseResponseProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
