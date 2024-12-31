import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileAkamaiHdsBaseFilter, KalturaDeliveryProfileAkamaiHdsBaseFilterArgs } from './KalturaDeliveryProfileAkamaiHdsBaseFilter';
export interface KalturaDeliveryProfileAkamaiHdsFilterArgs extends KalturaDeliveryProfileAkamaiHdsBaseFilterArgs {
}
export declare class KalturaDeliveryProfileAkamaiHdsFilter extends KalturaDeliveryProfileAkamaiHdsBaseFilter {
    constructor(data?: KalturaDeliveryProfileAkamaiHdsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
