import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNodeFilter, KalturaServerNodeFilterArgs } from './KalturaServerNodeFilter';
export interface KalturaDeliveryServerNodeBaseFilterArgs extends KalturaServerNodeFilterArgs {
}
export declare class KalturaDeliveryServerNodeBaseFilter extends KalturaServerNodeFilter {
    constructor(data?: KalturaDeliveryServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
