import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAdCuePointBaseFilter, KalturaAdCuePointBaseFilterArgs } from './KalturaAdCuePointBaseFilter';
export interface KalturaAdCuePointFilterArgs extends KalturaAdCuePointBaseFilterArgs {
}
export declare class KalturaAdCuePointFilter extends KalturaAdCuePointBaseFilter {
    constructor(data?: KalturaAdCuePointFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
