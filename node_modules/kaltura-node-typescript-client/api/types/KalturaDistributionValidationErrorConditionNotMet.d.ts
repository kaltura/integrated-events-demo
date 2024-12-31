import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionValidationError, KalturaDistributionValidationErrorArgs } from './KalturaDistributionValidationError';
export interface KalturaDistributionValidationErrorConditionNotMetArgs extends KalturaDistributionValidationErrorArgs {
    conditionName?: string;
}
export declare class KalturaDistributionValidationErrorConditionNotMet extends KalturaDistributionValidationError {
    conditionName: string;
    constructor(data?: KalturaDistributionValidationErrorConditionNotMetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
