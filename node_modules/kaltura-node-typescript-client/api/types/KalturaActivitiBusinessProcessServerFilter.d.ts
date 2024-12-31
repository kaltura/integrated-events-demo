import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaActivitiBusinessProcessServerBaseFilter, KalturaActivitiBusinessProcessServerBaseFilterArgs } from './KalturaActivitiBusinessProcessServerBaseFilter';
export interface KalturaActivitiBusinessProcessServerFilterArgs extends KalturaActivitiBusinessProcessServerBaseFilterArgs {
}
export declare class KalturaActivitiBusinessProcessServerFilter extends KalturaActivitiBusinessProcessServerBaseFilter {
    constructor(data?: KalturaActivitiBusinessProcessServerFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
