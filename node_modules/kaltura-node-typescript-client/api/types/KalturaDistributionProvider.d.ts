import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDistributionProviderArgs extends KalturaObjectBaseArgs {
    name?: string;
    scheduleUpdateEnabled?: boolean;
    availabilityUpdateEnabled?: boolean;
    deleteInsteadUpdate?: boolean;
    intervalBeforeSunrise?: number;
    intervalBeforeSunset?: number;
    updateRequiredEntryFields?: string;
    updateRequiredMetadataXPaths?: string;
}
export declare class KalturaDistributionProvider extends KalturaObjectBase {
    readonly type: KalturaDistributionProviderType;
    name: string;
    scheduleUpdateEnabled: boolean;
    availabilityUpdateEnabled: boolean;
    deleteInsteadUpdate: boolean;
    intervalBeforeSunrise: number;
    intervalBeforeSunset: number;
    updateRequiredEntryFields: string;
    updateRequiredMetadataXPaths: string;
    constructor(data?: KalturaDistributionProviderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
