import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaDistributionErrorType } from './KalturaDistributionErrorType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDistributionValidationErrorArgs extends KalturaObjectBaseArgs {
    action?: KalturaDistributionAction;
    errorType?: KalturaDistributionErrorType;
    description?: string;
}
export declare class KalturaDistributionValidationError extends KalturaObjectBase {
    action: KalturaDistributionAction;
    errorType: KalturaDistributionErrorType;
    description: string;
    constructor(data?: KalturaDistributionValidationErrorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
