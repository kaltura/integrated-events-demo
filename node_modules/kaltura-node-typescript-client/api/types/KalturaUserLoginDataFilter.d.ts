import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserLoginDataBaseFilter, KalturaUserLoginDataBaseFilterArgs } from './KalturaUserLoginDataBaseFilter';
export interface KalturaUserLoginDataFilterArgs extends KalturaUserLoginDataBaseFilterArgs {
}
export declare class KalturaUserLoginDataFilter extends KalturaUserLoginDataBaseFilter {
    constructor(data?: KalturaUserLoginDataFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
