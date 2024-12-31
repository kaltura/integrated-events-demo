import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaFreewheelGenericDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePaths?: KalturaString[];
    thumbAssetFilePath?: string;
    cuePoints?: KalturaCuePoint[];
}
export declare class KalturaFreewheelGenericDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    videoAssetFilePaths: KalturaString[];
    thumbAssetFilePath: string;
    cuePoints: KalturaCuePoint[];
    constructor(data?: KalturaFreewheelGenericDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
