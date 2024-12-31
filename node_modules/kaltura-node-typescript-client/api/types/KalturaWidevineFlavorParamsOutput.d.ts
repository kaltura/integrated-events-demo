import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';
export interface KalturaWidevineFlavorParamsOutputArgs extends KalturaFlavorParamsOutputArgs {
    widevineDistributionStartDate?: number;
    widevineDistributionEndDate?: number;
}
export declare class KalturaWidevineFlavorParamsOutput extends KalturaFlavorParamsOutput {
    widevineDistributionStartDate: number;
    widevineDistributionEndDate: number;
    constructor(data?: KalturaWidevineFlavorParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
