import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaString } from './KalturaString';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaHuluDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath?: string;
    thumbAssetFilePath?: string;
    cuePoints?: KalturaCuePoint[];
    fileBaseName?: string;
    captionLocalPaths?: KalturaString[];
}
export declare class KalturaHuluDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    videoAssetFilePath: string;
    thumbAssetFilePath: string;
    cuePoints: KalturaCuePoint[];
    fileBaseName: string;
    captionLocalPaths: KalturaString[];
    constructor(data?: KalturaHuluDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
