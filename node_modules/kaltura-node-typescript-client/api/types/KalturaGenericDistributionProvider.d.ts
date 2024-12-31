import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';
export interface KalturaGenericDistributionProviderArgs extends KalturaDistributionProviderArgs {
    isDefault?: boolean;
    optionalFlavorParamsIds?: string;
    requiredFlavorParamsIds?: string;
    optionalThumbDimensions?: KalturaDistributionThumbDimensions[];
    requiredThumbDimensions?: KalturaDistributionThumbDimensions[];
    editableFields?: string;
    mandatoryFields?: string;
}
export declare class KalturaGenericDistributionProvider extends KalturaDistributionProvider {
    readonly id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly partnerId: number;
    isDefault: boolean;
    readonly status: KalturaGenericDistributionProviderStatus;
    optionalFlavorParamsIds: string;
    requiredFlavorParamsIds: string;
    optionalThumbDimensions: KalturaDistributionThumbDimensions[];
    requiredThumbDimensions: KalturaDistributionThumbDimensions[];
    editableFields: string;
    mandatoryFields: string;
    constructor(data?: KalturaGenericDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
