import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProfileAction } from './KalturaGenericDistributionProfileAction';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';
export interface KalturaGenericDistributionProfileArgs extends KalturaDistributionProfileArgs {
    genericProviderId?: number;
    submitAction?: KalturaGenericDistributionProfileAction;
    updateAction?: KalturaGenericDistributionProfileAction;
    deleteAction?: KalturaGenericDistributionProfileAction;
    fetchReportAction?: KalturaGenericDistributionProfileAction;
    updateRequiredEntryFields?: string;
    updateRequiredMetadataXPaths?: string;
}
export declare class KalturaGenericDistributionProfile extends KalturaDistributionProfile {
    genericProviderId: number;
    submitAction: KalturaGenericDistributionProfileAction;
    updateAction: KalturaGenericDistributionProfileAction;
    deleteAction: KalturaGenericDistributionProfileAction;
    fetchReportAction: KalturaGenericDistributionProfileAction;
    updateRequiredEntryFields: string;
    updateRequiredMetadataXPaths: string;
    constructor(data?: KalturaGenericDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
