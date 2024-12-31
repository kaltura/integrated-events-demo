import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaIntegrationJobTriggerDataArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaIntegrationJobTriggerData extends KalturaObjectBase {
    constructor(data?: KalturaIntegrationJobTriggerDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
