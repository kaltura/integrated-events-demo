import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaIntegrationJobProviderDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaIntegrationJobProviderData extends KalturaObjectBase {
    constructor(data?: KalturaIntegrationJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
