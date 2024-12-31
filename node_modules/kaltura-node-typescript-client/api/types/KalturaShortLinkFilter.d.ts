import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLinkBaseFilter, KalturaShortLinkBaseFilterArgs } from './KalturaShortLinkBaseFilter';
export interface KalturaShortLinkFilterArgs extends KalturaShortLinkBaseFilterArgs {
}
export declare class KalturaShortLinkFilter extends KalturaShortLinkBaseFilter {
    constructor(data?: KalturaShortLinkFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
