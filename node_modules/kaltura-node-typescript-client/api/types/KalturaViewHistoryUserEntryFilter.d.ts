import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';
export interface KalturaViewHistoryUserEntryFilterArgs extends KalturaUserEntryFilterArgs {
}
export declare class KalturaViewHistoryUserEntryFilter extends KalturaUserEntryFilter {
    constructor(data?: KalturaViewHistoryUserEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
