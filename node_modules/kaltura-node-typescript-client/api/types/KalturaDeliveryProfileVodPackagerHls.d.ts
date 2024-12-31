import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileVodPackagerPlayServer, KalturaDeliveryProfileVodPackagerPlayServerArgs } from './KalturaDeliveryProfileVodPackagerPlayServer';
export interface KalturaDeliveryProfileVodPackagerHlsArgs extends KalturaDeliveryProfileVodPackagerPlayServerArgs {
    allowFairplayOffline?: boolean;
}
export declare class KalturaDeliveryProfileVodPackagerHls extends KalturaDeliveryProfileVodPackagerPlayServer {
    allowFairplayOffline: boolean;
    constructor(data?: KalturaDeliveryProfileVodPackagerHlsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
