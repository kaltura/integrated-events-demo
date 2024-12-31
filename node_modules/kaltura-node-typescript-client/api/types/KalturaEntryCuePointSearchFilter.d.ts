import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaEntryCuePointSearchFilterArgs extends KalturaSearchItemArgs {
    cuePointsFreeText?: string;
    cuePointTypeIn?: string;
    cuePointSubTypeEqual?: number;
}
export declare class KalturaEntryCuePointSearchFilter extends KalturaSearchItem {
    cuePointsFreeText: string;
    cuePointTypeIn: string;
    cuePointSubTypeEqual: number;
    constructor(data?: KalturaEntryCuePointSearchFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
