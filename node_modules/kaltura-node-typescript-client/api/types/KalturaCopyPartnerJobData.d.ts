import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaCopyPartnerJobDataArgs extends KalturaJobDataArgs {
    fromPartnerId?: number;
    toPartnerId?: number;
}
export declare class KalturaCopyPartnerJobData extends KalturaJobData {
    fromPartnerId: number;
    toPartnerId: number;
    constructor(data?: KalturaCopyPartnerJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
