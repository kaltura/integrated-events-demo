import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaIpAddressContextFieldArgs extends KalturaStringFieldArgs {
}
export declare class KalturaIpAddressContextField extends KalturaStringField {
    constructor(data?: KalturaIpAddressContextFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
