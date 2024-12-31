import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaSourceType } from './KalturaExternalMediaSourceType';
import { KalturaMediaEntryFilter, KalturaMediaEntryFilterArgs } from './KalturaMediaEntryFilter';
export interface KalturaExternalMediaEntryBaseFilterArgs extends KalturaMediaEntryFilterArgs {
    externalSourceTypeEqual?: KalturaExternalMediaSourceType;
    externalSourceTypeIn?: string;
    assetParamsIdsMatchOr?: string;
    assetParamsIdsMatchAnd?: string;
}
export declare class KalturaExternalMediaEntryBaseFilter extends KalturaMediaEntryFilter {
    externalSourceTypeEqual: KalturaExternalMediaSourceType;
    externalSourceTypeIn: string;
    assetParamsIdsMatchOr: string;
    assetParamsIdsMatchAnd: string;
    constructor(data?: KalturaExternalMediaEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
