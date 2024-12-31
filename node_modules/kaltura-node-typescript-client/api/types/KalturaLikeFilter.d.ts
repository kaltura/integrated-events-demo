import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLikeBaseFilter, KalturaLikeBaseFilterArgs } from './KalturaLikeBaseFilter';
export interface KalturaLikeFilterArgs extends KalturaLikeBaseFilterArgs {
}
export declare class KalturaLikeFilter extends KalturaLikeBaseFilter {
    constructor(data?: KalturaLikeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
