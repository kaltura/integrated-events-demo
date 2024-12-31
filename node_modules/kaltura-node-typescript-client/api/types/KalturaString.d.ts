import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaStringArgs extends KalturaObjectBaseArgs {
    value?: string;
}
export declare class KalturaString extends KalturaObjectBase {
    value: string;
    constructor(data?: KalturaStringArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
