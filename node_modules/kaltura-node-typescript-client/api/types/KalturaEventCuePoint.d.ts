import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventType } from './KalturaEventType';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';
export interface KalturaEventCuePointArgs extends KalturaCuePointArgs {
    eventType?: KalturaEventType;
}
export declare class KalturaEventCuePoint extends KalturaCuePoint {
    eventType: KalturaEventType;
    constructor(data?: KalturaEventCuePointArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
