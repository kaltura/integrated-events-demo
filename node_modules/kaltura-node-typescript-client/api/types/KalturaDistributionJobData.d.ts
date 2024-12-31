import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaDistributionJobProviderData } from './KalturaDistributionJobProviderData';
import { KalturaDistributionRemoteMediaFile } from './KalturaDistributionRemoteMediaFile';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaDistributionJobDataArgs extends KalturaJobDataArgs {
    distributionProfileId?: number;
    distributionProfile?: KalturaDistributionProfile;
    entryDistributionId?: number;
    entryDistribution?: KalturaEntryDistribution;
    remoteId?: string;
    providerType?: KalturaDistributionProviderType;
    providerData?: KalturaDistributionJobProviderData;
    results?: string;
    sentData?: string;
    mediaFiles?: KalturaDistributionRemoteMediaFile[];
}
export declare class KalturaDistributionJobData extends KalturaJobData {
    distributionProfileId: number;
    distributionProfile: KalturaDistributionProfile;
    entryDistributionId: number;
    entryDistribution: KalturaEntryDistribution;
    remoteId: string;
    providerType: KalturaDistributionProviderType;
    providerData: KalturaDistributionJobProviderData;
    results: string;
    sentData: string;
    mediaFiles: KalturaDistributionRemoteMediaFile[];
    constructor(data?: KalturaDistributionJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
