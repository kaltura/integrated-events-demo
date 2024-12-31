import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';
export interface KalturaDoubleClickDistributionJobProviderDataArgs extends KalturaDistributionJobProviderDataArgs {
}
export declare class KalturaDoubleClickDistributionJobProviderData extends KalturaDistributionJobProviderData {
    constructor(data?: KalturaDoubleClickDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
