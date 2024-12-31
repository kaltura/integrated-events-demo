import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaFileSyncBaseFilter, KalturaFileSyncBaseFilterArgs } from './KalturaFileSyncBaseFilter';
export interface KalturaFileSyncFilterArgs extends KalturaFileSyncBaseFilterArgs {
    currentDc?: KalturaNullableBoolean;
}
export declare class KalturaFileSyncFilter extends KalturaFileSyncBaseFilter {
    currentDc: KalturaNullableBoolean;
    constructor(data?: KalturaFileSyncFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
