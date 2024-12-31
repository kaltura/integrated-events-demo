import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaTvinciDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    xml?: string;
}
export declare class KalturaTvinciDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    xml: string;
    constructor(data?: KalturaTvinciDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
