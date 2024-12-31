import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaABCScreenersWatermarkConditionArgs extends KalturaConditionArgs {
}
export declare class KalturaABCScreenersWatermarkCondition extends KalturaCondition {
    constructor(data?: KalturaABCScreenersWatermarkConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
