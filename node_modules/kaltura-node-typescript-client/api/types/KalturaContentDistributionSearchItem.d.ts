import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistributionSunStatus } from './KalturaEntryDistributionSunStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaContentDistributionSearchItemArgs extends KalturaSearchItemArgs {
    noDistributionProfiles?: boolean;
    distributionProfileId?: number;
    distributionSunStatus?: KalturaEntryDistributionSunStatus;
    entryDistributionFlag?: KalturaEntryDistributionFlag;
    entryDistributionStatus?: KalturaEntryDistributionStatus;
    hasEntryDistributionValidationErrors?: boolean;
    entryDistributionValidationErrors?: string;
}
export declare class KalturaContentDistributionSearchItem extends KalturaSearchItem {
    noDistributionProfiles: boolean;
    distributionProfileId: number;
    distributionSunStatus: KalturaEntryDistributionSunStatus;
    entryDistributionFlag: KalturaEntryDistributionFlag;
    entryDistributionStatus: KalturaEntryDistributionStatus;
    hasEntryDistributionValidationErrors: boolean;
    entryDistributionValidationErrors: string;
    constructor(data?: KalturaContentDistributionSearchItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
