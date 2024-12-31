import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfileBaseFilter, KalturaScheduledTaskProfileBaseFilterArgs } from './KalturaScheduledTaskProfileBaseFilter';
export interface KalturaScheduledTaskProfileFilterArgs extends KalturaScheduledTaskProfileBaseFilterArgs {
}
export declare class KalturaScheduledTaskProfileFilter extends KalturaScheduledTaskProfileBaseFilter {
    constructor(data?: KalturaScheduledTaskProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
