import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';
export interface KalturaDeliveryProfileGenericHdsArgs extends KalturaDeliveryProfileArgs {
    pattern?: string;
    rendererClass?: string;
}
export declare class KalturaDeliveryProfileGenericHds extends KalturaDeliveryProfile {
    pattern: string;
    rendererClass: string;
    constructor(data?: KalturaDeliveryProfileGenericHdsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
