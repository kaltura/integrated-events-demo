import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBatchJobBaseFilter, KalturaBatchJobBaseFilterArgs } from './KalturaBatchJobBaseFilter';
export interface KalturaBatchJobFilterArgs extends KalturaBatchJobBaseFilterArgs {
}
export declare class KalturaBatchJobFilter extends KalturaBatchJobBaseFilter {
    constructor(data?: KalturaBatchJobFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
