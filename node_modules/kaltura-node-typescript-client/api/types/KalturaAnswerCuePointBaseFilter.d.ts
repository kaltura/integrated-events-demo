import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';
export interface KalturaAnswerCuePointBaseFilterArgs extends KalturaCuePointFilterArgs {
    parentIdEqual?: string;
    parentIdIn?: string;
    quizUserEntryIdEqual?: string;
    quizUserEntryIdIn?: string;
}
export declare class KalturaAnswerCuePointBaseFilter extends KalturaCuePointFilter {
    parentIdEqual: string;
    parentIdIn: string;
    quizUserEntryIdEqual: string;
    quizUserEntryIdIn: string;
    constructor(data?: KalturaAnswerCuePointBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
