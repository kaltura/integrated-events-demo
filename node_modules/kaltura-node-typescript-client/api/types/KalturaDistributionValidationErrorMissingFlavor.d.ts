import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';
export interface KalturaDistributionValidationErrorMissingFlavorArgs extends KalturaDistributionValidationErrorArgs {
    flavorParamsId?: string;
}
export declare class KalturaDistributionValidationErrorMissingFlavor extends KalturaDistributionValidationError {
    flavorParamsId: string;
    constructor(data?: KalturaDistributionValidationErrorMissingFlavorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
