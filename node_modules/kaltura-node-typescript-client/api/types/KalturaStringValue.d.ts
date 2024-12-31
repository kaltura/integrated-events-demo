import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';
export interface KalturaStringValueArgs extends KalturaValueArgs {
    value?: string;
}
export declare class KalturaStringValue extends KalturaValue {
    value: string;
    constructor(data?: KalturaStringValueArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
