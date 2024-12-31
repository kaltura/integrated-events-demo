import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaValueArgs extends KalturaObjectBaseArgs {
    description?: string;
}
export declare class KalturaValue extends KalturaObjectBase {
    description: string;
    constructor(data?: KalturaValueArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
