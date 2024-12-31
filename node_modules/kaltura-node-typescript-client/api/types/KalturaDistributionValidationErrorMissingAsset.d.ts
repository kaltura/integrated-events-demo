import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';
export interface KalturaDistributionValidationErrorMissingAssetArgs extends KalturaDistributionValidationErrorArgs {
    data?: string;
}
export declare class KalturaDistributionValidationErrorMissingAsset extends KalturaDistributionValidationError {
    data: string;
    constructor(data?: KalturaDistributionValidationErrorMissingAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
