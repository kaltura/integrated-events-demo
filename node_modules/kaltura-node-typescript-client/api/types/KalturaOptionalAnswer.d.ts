import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaOptionalAnswerArgs extends KalturaObjectBaseArgs {
    key?: string;
    text?: string;
    weight?: number;
    isCorrect?: KalturaNullableBoolean;
}
export declare class KalturaOptionalAnswer extends KalturaObjectBase {
    key: string;
    text: string;
    weight: number;
    isCorrect: KalturaNullableBoolean;
    constructor(data?: KalturaOptionalAnswerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
