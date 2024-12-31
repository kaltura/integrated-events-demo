import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileGenericAppleHttpArgs extends KalturaDeliveryProfileArgs {
    pattern?: string;
    rendererClass?: string;
    manifestRedirect?: KalturaNullableBoolean;
}
export declare class KalturaDeliveryProfileGenericAppleHttp extends KalturaDeliveryProfile {
    pattern: string;
    rendererClass: string;
    manifestRedirect: KalturaNullableBoolean;
    constructor(data?: KalturaDeliveryProfileGenericAppleHttpArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
