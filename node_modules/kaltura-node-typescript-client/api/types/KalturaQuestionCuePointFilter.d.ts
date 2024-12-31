import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuestionCuePointBaseFilter, KalturaQuestionCuePointBaseFilterArgs } from './KalturaQuestionCuePointBaseFilter';
export interface KalturaQuestionCuePointFilterArgs extends KalturaQuestionCuePointBaseFilterArgs {
}
export declare class KalturaQuestionCuePointFilter extends KalturaQuestionCuePointBaseFilter {
    constructor(data?: KalturaQuestionCuePointFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
