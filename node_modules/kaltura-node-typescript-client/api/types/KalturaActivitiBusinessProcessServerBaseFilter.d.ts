import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessServerFilter, KalturaBusinessProcessServerFilterArgs } from './KalturaBusinessProcessServerFilter';
export interface KalturaActivitiBusinessProcessServerBaseFilterArgs extends KalturaBusinessProcessServerFilterArgs {
}
export declare class KalturaActivitiBusinessProcessServerBaseFilter extends KalturaBusinessProcessServerFilter {
    constructor(data?: KalturaActivitiBusinessProcessServerBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
