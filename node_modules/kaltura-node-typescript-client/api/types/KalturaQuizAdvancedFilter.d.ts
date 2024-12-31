import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaQuizAdvancedFilterArgs extends KalturaSearchItemArgs {
    isQuiz?: KalturaNullableBoolean;
}
export declare class KalturaQuizAdvancedFilter extends KalturaSearchItem {
    isQuiz: KalturaNullableBoolean;
    constructor(data?: KalturaQuizAdvancedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
