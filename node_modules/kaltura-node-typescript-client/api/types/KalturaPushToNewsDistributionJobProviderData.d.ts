import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaPushToNewsDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    currentVersion?: number;
    bodyParamContent?: string;
}
export declare class KalturaPushToNewsDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    currentVersion: number;
    bodyParamContent: string;
    constructor(data?: KalturaPushToNewsDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
