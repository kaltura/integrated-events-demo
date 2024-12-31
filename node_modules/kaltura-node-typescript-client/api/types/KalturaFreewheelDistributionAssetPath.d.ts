import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';
export interface KalturaFreewheelDistributionAssetPathArgs extends KalturaDistributionJobProviderDataArgs {
    path?: string;
}
export declare class KalturaFreewheelDistributionAssetPath extends KalturaDistributionJobProviderData {
    path: string;
    constructor(data?: KalturaFreewheelDistributionAssetPathArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
