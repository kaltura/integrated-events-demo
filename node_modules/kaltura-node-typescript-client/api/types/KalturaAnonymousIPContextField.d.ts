import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaAnonymousIPContextFieldArgs extends KalturaStringFieldArgs {
    geoCoderType?: KalturaGeoCoderType;
}
export declare class KalturaAnonymousIPContextField extends KalturaStringField {
    geoCoderType: KalturaGeoCoderType;
    constructor(data?: KalturaAnonymousIPContextFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
