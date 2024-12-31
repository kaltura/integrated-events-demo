import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaQuickPlayDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    xml?: string;
    videoFilePaths?: KalturaString[];
    thumbnailFilePaths?: KalturaString[];
}
export declare class KalturaQuickPlayDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    xml: string;
    videoFilePaths: KalturaString[];
    thumbnailFilePaths: KalturaString[];
    constructor(data?: KalturaQuickPlayDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
