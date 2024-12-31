import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';
export interface KalturaDistributionValidationErrorMissingMetadataArgs extends KalturaDistributionValidationErrorArgs {
    fieldName?: string;
}
export declare class KalturaDistributionValidationErrorMissingMetadata extends KalturaDistributionValidationError {
    fieldName: string;
    constructor(data?: KalturaDistributionValidationErrorMissingMetadataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
