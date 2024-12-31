import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadTokenBaseFilter, KalturaUploadTokenBaseFilterArgs } from './KalturaUploadTokenBaseFilter';
export interface KalturaUploadTokenFilterArgs extends KalturaUploadTokenBaseFilterArgs {
}
export declare class KalturaUploadTokenFilter extends KalturaUploadTokenBaseFilter {
    constructor(data?: KalturaUploadTokenFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
