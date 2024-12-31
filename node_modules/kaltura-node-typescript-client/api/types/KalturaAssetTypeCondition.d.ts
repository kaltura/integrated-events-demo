import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaAssetTypeConditionArgs extends KalturaConditionArgs {
    assetTypes?: string;
}
export declare class KalturaAssetTypeCondition extends KalturaCondition {
    assetTypes: string;
    constructor(data?: KalturaAssetTypeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
