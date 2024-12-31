import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventType } from './KalturaEventType';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';
export interface KalturaEventCuePointBaseFilterArgs extends KalturaCuePointFilterArgs {
    eventTypeEqual?: KalturaEventType;
    eventTypeIn?: string;
}
export declare class KalturaEventCuePointBaseFilter extends KalturaCuePointFilter {
    eventTypeEqual: KalturaEventType;
    eventTypeIn: string;
    constructor(data?: KalturaEventCuePointBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
