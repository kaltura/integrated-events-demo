import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionValidationErrorInvalidData, KalturaDistributionValidationErrorInvalidDataArgs } from './KalturaDistributionValidationErrorInvalidData';
export interface KalturaDistributionValidationErrorInvalidMetadataArgs extends KalturaDistributionValidationErrorInvalidDataArgs {
    metadataProfileId?: number;
}
export declare class KalturaDistributionValidationErrorInvalidMetadata extends KalturaDistributionValidationErrorInvalidData {
    metadataProfileId: number;
    constructor(data?: KalturaDistributionValidationErrorInvalidMetadataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
