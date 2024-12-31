import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaCoordinatesContextFieldArgs extends KalturaStringFieldArgs {
    geoCoderType?: KalturaGeoCoderType;
}
export declare class KalturaCoordinatesContextField extends KalturaStringField {
    geoCoderType: KalturaGeoCoderType;
    constructor(data?: KalturaCoordinatesContextFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
