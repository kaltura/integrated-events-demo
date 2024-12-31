import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileLiveAppleHttpArgs extends KalturaDeliveryProfileArgs {
    disableExtraAttributes?: boolean;
    forceProxy?: boolean;
}
export declare class KalturaDeliveryProfileLiveAppleHttp extends KalturaDeliveryProfile {
    disableExtraAttributes: boolean;
    forceProxy: boolean;
    constructor(data?: KalturaDeliveryProfileLiveAppleHttpArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
