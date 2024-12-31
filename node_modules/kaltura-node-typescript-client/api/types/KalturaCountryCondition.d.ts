import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaCountryConditionArgs extends KalturaMatchConditionArgs {
    geoCoderType?: KalturaGeoCoderType;
}
export declare class KalturaCountryCondition extends KalturaMatchCondition {
    geoCoderType: KalturaGeoCoderType;
    constructor(data?: KalturaCountryConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
