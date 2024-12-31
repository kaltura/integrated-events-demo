import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCodeCuePointBaseFilter, KalturaCodeCuePointBaseFilterArgs } from './KalturaCodeCuePointBaseFilter';
export interface KalturaCodeCuePointFilterArgs extends KalturaCodeCuePointBaseFilterArgs {
}
export declare class KalturaCodeCuePointFilter extends KalturaCodeCuePointBaseFilter {
    constructor(data?: KalturaCodeCuePointFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
