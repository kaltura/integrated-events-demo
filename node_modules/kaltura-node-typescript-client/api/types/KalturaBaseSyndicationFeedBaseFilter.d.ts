import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaBaseSyndicationFeedBaseFilterArgs extends KalturaFilterArgs {
}
export declare class KalturaBaseSyndicationFeedBaseFilter extends KalturaFilter {
    constructor(data?: KalturaBaseSyndicationFeedBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
