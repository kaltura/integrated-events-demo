import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaQuiz } from './KalturaQuiz';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaQuizListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaQuizListResponse extends KalturaListResponse {
    readonly objects: KalturaQuiz[];
    constructor(data?: KalturaQuizListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
