import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileRtmpArgs extends KalturaDeliveryProfileArgs {
    enforceRtmpe?: boolean;
    prefix?: string;
}
export declare class KalturaDeliveryProfileRtmp extends KalturaDeliveryProfile {
    enforceRtmpe: boolean;
    prefix: string;
    constructor(data?: KalturaDeliveryProfileRtmpArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
