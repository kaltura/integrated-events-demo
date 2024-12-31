import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventCuePointBaseFilter, KalturaEventCuePointBaseFilterArgs } from './KalturaEventCuePointBaseFilter';
export interface KalturaEventCuePointFilterArgs extends KalturaEventCuePointBaseFilterArgs {
}
export declare class KalturaEventCuePointFilter extends KalturaEventCuePointBaseFilter {
    constructor(data?: KalturaEventCuePointFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
