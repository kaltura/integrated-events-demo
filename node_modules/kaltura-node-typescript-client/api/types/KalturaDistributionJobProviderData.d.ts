import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDistributionJobProviderDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaDistributionJobProviderData extends KalturaObjectBase {
    constructor(data?: KalturaDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
