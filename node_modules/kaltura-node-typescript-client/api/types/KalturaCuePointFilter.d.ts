import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePointBaseFilter, KalturaCuePointBaseFilterArgs } from './KalturaCuePointBaseFilter';
export interface KalturaCuePointFilterArgs extends KalturaCuePointBaseFilterArgs {
    freeText?: string;
    userIdEqualCurrent?: KalturaNullableBoolean;
    userIdCurrent?: KalturaNullableBoolean;
}
export declare class KalturaCuePointFilter extends KalturaCuePointBaseFilter {
    freeText: string;
    userIdEqualCurrent: KalturaNullableBoolean;
    userIdCurrent: KalturaNullableBoolean;
    constructor(data?: KalturaCuePointFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
