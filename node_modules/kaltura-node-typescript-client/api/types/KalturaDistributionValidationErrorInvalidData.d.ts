import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionValidationErrorType } from './KalturaDistributionValidationErrorType';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';
export interface KalturaDistributionValidationErrorInvalidDataArgs extends KalturaDistributionValidationErrorArgs {
    fieldName?: string;
    validationErrorType?: KalturaDistributionValidationErrorType;
    validationErrorParam?: string;
}
export declare class KalturaDistributionValidationErrorInvalidData extends KalturaDistributionValidationError {
    fieldName: string;
    validationErrorType: KalturaDistributionValidationErrorType;
    validationErrorParam: string;
    constructor(data?: KalturaDistributionValidationErrorInvalidDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
