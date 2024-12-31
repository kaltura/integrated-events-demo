import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayReadyRightArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaPlayReadyRight extends KalturaObjectBase {
    constructor(data?: KalturaPlayReadyRightArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
