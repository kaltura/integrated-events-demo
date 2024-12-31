import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaGeoDistanceConditionArgs extends KalturaMatchConditionArgs {
    geoCoderType?: KalturaGeoCoderType;
}
export declare class KalturaGeoDistanceCondition extends KalturaMatchCondition {
    geoCoderType: KalturaGeoCoderType;
    constructor(data?: KalturaGeoDistanceConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
