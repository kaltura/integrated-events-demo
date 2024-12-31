import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaDropFolderBaseFilter, KalturaDropFolderBaseFilterArgs } from './KalturaDropFolderBaseFilter';
export interface KalturaDropFolderFilterArgs extends KalturaDropFolderBaseFilterArgs {
    currentDc?: KalturaNullableBoolean;
}
export declare class KalturaDropFolderFilter extends KalturaDropFolderBaseFilter {
    currentDc: KalturaNullableBoolean;
    constructor(data?: KalturaDropFolderFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
