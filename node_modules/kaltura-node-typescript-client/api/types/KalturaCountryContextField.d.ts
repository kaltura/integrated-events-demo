import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaCountryContextFieldArgs extends KalturaStringFieldArgs {
    geoCoderType?: KalturaGeoCoderType;
}
export declare class KalturaCountryContextField extends KalturaStringField {
    geoCoderType: KalturaGeoCoderType;
    constructor(data?: KalturaCountryContextFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
