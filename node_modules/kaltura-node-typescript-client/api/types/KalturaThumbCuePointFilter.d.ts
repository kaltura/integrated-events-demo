import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbCuePointBaseFilter, KalturaThumbCuePointBaseFilterArgs } from './KalturaThumbCuePointBaseFilter';
export interface KalturaThumbCuePointFilterArgs extends KalturaThumbCuePointBaseFilterArgs {
}
export declare class KalturaThumbCuePointFilter extends KalturaThumbCuePointBaseFilter {
    constructor(data?: KalturaThumbCuePointFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
