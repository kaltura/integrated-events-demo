import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';
export interface KalturaDistributionValidationErrorMissingThumbnailArgs extends KalturaDistributionValidationErrorArgs {
    dimensions?: KalturaDistributionThumbDimensions;
}
export declare class KalturaDistributionValidationErrorMissingThumbnail extends KalturaDistributionValidationError {
    dimensions: KalturaDistributionThumbDimensions;
    constructor(data?: KalturaDistributionValidationErrorMissingThumbnailArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
