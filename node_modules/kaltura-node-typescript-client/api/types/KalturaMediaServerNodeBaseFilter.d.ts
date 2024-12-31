import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryServerNodeFilter, KalturaDeliveryServerNodeFilterArgs } from './KalturaDeliveryServerNodeFilter';
export interface KalturaMediaServerNodeBaseFilterArgs extends KalturaDeliveryServerNodeFilterArgs {
}
export declare class KalturaMediaServerNodeBaseFilter extends KalturaDeliveryServerNodeFilter {
    constructor(data?: KalturaMediaServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
