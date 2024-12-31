import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileAkamaiHttpBaseFilter, KalturaDeliveryProfileAkamaiHttpBaseFilterArgs } from './KalturaDeliveryProfileAkamaiHttpBaseFilter';
export interface KalturaDeliveryProfileAkamaiHttpFilterArgs extends KalturaDeliveryProfileAkamaiHttpBaseFilterArgs {
}
export declare class KalturaDeliveryProfileAkamaiHttpFilter extends KalturaDeliveryProfileAkamaiHttpBaseFilter {
    constructor(data?: KalturaDeliveryProfileAkamaiHttpFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
