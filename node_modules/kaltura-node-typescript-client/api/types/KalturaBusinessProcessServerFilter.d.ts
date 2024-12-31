import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBusinessProcessServerBaseFilter, KalturaBusinessProcessServerBaseFilterArgs } from './KalturaBusinessProcessServerBaseFilter';
export interface KalturaBusinessProcessServerFilterArgs extends KalturaBusinessProcessServerBaseFilterArgs {
    currentDcOrExternal?: KalturaNullableBoolean;
    currentDc?: KalturaNullableBoolean;
}
export declare class KalturaBusinessProcessServerFilter extends KalturaBusinessProcessServerBaseFilter {
    currentDcOrExternal: KalturaNullableBoolean;
    currentDc: KalturaNullableBoolean;
    constructor(data?: KalturaBusinessProcessServerFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
