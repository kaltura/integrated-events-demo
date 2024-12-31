import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaVerizonVcastDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    xml?: string;
}
export declare class KalturaVerizonVcastDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    xml: string;
    constructor(data?: KalturaVerizonVcastDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
