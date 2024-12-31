import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnswerCuePointBaseFilter, KalturaAnswerCuePointBaseFilterArgs } from './KalturaAnswerCuePointBaseFilter';
export interface KalturaAnswerCuePointFilterArgs extends KalturaAnswerCuePointBaseFilterArgs {
}
export declare class KalturaAnswerCuePointFilter extends KalturaAnswerCuePointBaseFilter {
    constructor(data?: KalturaAnswerCuePointFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
