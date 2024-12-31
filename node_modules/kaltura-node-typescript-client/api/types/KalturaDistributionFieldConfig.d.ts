import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionFieldRequiredStatus } from './KalturaDistributionFieldRequiredStatus';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDistributionFieldConfigArgs extends KalturaObjectBaseArgs {
    fieldName?: string;
    userFriendlyFieldName?: string;
    entryMrssXslt?: string;
    isRequired?: KalturaDistributionFieldRequiredStatus;
    type?: string;
    updateOnChange?: boolean;
    updateParams?: KalturaString[];
    triggerDeleteOnError?: boolean;
}
export declare class KalturaDistributionFieldConfig extends KalturaObjectBase {
    fieldName: string;
    userFriendlyFieldName: string;
    entryMrssXslt: string;
    isRequired: KalturaDistributionFieldRequiredStatus;
    type: string;
    updateOnChange: boolean;
    updateParams: KalturaString[];
    readonly isDefault: boolean;
    triggerDeleteOnError: boolean;
    constructor(data?: KalturaDistributionFieldConfigArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
