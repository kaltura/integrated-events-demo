import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOptionalAnswer } from './KalturaOptionalAnswer';
import { KalturaQuestionType } from './KalturaQuestionType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';
export interface KalturaQuestionCuePointArgs extends KalturaCuePointArgs {
    optionalAnswers?: KalturaOptionalAnswer[];
    hint?: string;
    question?: string;
    explanation?: string;
    questionType?: KalturaQuestionType;
    presentationOrder?: number;
    excludeFromScore?: KalturaNullableBoolean;
}
export declare class KalturaQuestionCuePoint extends KalturaCuePoint {
    optionalAnswers: KalturaOptionalAnswer[];
    hint: string;
    question: string;
    explanation: string;
    questionType: KalturaQuestionType;
    presentationOrder: number;
    excludeFromScore: KalturaNullableBoolean;
    constructor(data?: KalturaQuestionCuePointArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
