import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBatchJobFilter, KalturaBatchJobFilterArgs } from './KalturaBatchJobFilter';
export interface KalturaBatchJobFilterExtArgs extends KalturaBatchJobFilterArgs {
    jobTypeAndSubTypeIn?: string;
}
export declare class KalturaBatchJobFilterExt extends KalturaBatchJobFilter {
    jobTypeAndSubTypeIn: string;
    constructor(data?: KalturaBatchJobFilterExtArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
