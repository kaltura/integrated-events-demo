import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaAssetPropertiesCompareConditionArgs extends KalturaConditionArgs {
    properties?: KalturaKeyValue[];
}
export declare class KalturaAssetPropertiesCompareCondition extends KalturaCondition {
    properties: KalturaKeyValue[];
    constructor(data?: KalturaAssetPropertiesCompareConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
