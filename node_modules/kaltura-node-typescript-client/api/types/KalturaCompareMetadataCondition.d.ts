import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCompareCondition, KalturaCompareConditionArgs } from './KalturaCompareCondition';
export interface KalturaCompareMetadataConditionArgs extends KalturaCompareConditionArgs {
    xPath?: string;
    profileId?: number;
    profileSystemName?: string;
}
export declare class KalturaCompareMetadataCondition extends KalturaCompareCondition {
    xPath: string;
    profileId: number;
    profileSystemName: string;
    constructor(data?: KalturaCompareMetadataConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
