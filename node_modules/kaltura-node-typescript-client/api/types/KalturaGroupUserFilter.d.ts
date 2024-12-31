import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUserBaseFilter, KalturaGroupUserBaseFilterArgs } from './KalturaGroupUserBaseFilter';
export interface KalturaGroupUserFilterArgs extends KalturaGroupUserBaseFilterArgs {
}
export declare class KalturaGroupUserFilter extends KalturaGroupUserBaseFilter {
    constructor(data?: KalturaGroupUserFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
