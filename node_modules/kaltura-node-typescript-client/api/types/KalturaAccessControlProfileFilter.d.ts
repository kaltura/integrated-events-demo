import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlProfileBaseFilter, KalturaAccessControlProfileBaseFilterArgs } from './KalturaAccessControlProfileBaseFilter';
export interface KalturaAccessControlProfileFilterArgs extends KalturaAccessControlProfileBaseFilterArgs {
}
export declare class KalturaAccessControlProfileFilter extends KalturaAccessControlProfileBaseFilter {
    constructor(data?: KalturaAccessControlProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
