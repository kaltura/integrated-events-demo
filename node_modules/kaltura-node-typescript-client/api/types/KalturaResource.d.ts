import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaResourceArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaResource extends KalturaObjectBase {
    constructor(data?: KalturaResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
