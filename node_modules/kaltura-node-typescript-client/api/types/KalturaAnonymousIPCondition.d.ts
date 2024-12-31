import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaAnonymousIPConditionArgs extends KalturaMatchConditionArgs {
    geoCoderType?: KalturaGeoCoderType;
}
export declare class KalturaAnonymousIPCondition extends KalturaMatchCondition {
    geoCoderType: KalturaGeoCoderType;
    constructor(data?: KalturaAnonymousIPConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
