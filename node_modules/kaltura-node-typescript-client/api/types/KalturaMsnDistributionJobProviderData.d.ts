import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaMsnDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    xml?: string;
}
export declare class KalturaMsnDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    xml: string;
    constructor(data?: KalturaMsnDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
