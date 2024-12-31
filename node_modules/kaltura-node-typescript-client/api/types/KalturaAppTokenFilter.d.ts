import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppTokenBaseFilter, KalturaAppTokenBaseFilterArgs } from './KalturaAppTokenBaseFilter';
export interface KalturaAppTokenFilterArgs extends KalturaAppTokenBaseFilterArgs {
}
export declare class KalturaAppTokenFilter extends KalturaAppTokenBaseFilter {
    constructor(data?: KalturaAppTokenFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
