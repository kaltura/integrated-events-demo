import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileRtmp, KalturaDeliveryProfileRtmpArgs } from './KalturaDeliveryProfileRtmp';
export interface KalturaDeliveryProfileGenericRtmpArgs extends KalturaDeliveryProfileRtmpArgs {
    pattern?: string;
    rendererClass?: string;
}
export declare class KalturaDeliveryProfileGenericRtmp extends KalturaDeliveryProfileRtmp {
    pattern: string;
    rendererClass: string;
    constructor(data?: KalturaDeliveryProfileGenericRtmpArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
