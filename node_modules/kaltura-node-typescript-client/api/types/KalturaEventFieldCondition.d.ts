import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBooleanField } from './KalturaBooleanField';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaEventFieldConditionArgs extends KalturaConditionArgs {
    field?: KalturaBooleanField;
}
export declare class KalturaEventFieldCondition extends KalturaCondition {
    field: KalturaBooleanField;
    constructor(data?: KalturaEventFieldConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
