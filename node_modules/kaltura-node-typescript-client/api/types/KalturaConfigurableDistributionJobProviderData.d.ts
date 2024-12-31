import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';
export interface KalturaConfigurableDistributionJobProviderDataArgs extends KalturaDistributionJobProviderDataArgs {
    fieldValues?: string;
}
export declare class KalturaConfigurableDistributionJobProviderData extends KalturaDistributionJobProviderData {
    fieldValues: string;
    constructor(data?: KalturaConfigurableDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
