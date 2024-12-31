import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue, KalturaStringValueArgs } from './KalturaStringValue';
export interface KalturaStringFieldArgs extends KalturaStringValueArgs {
}
export declare class KalturaStringField extends KalturaStringValue {
    constructor(data?: KalturaStringFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
