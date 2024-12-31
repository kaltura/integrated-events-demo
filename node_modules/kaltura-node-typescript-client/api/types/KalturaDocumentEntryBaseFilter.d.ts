import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntryFilter, KalturaBaseEntryFilterArgs } from './KalturaBaseEntryFilter';
export interface KalturaDocumentEntryBaseFilterArgs extends KalturaBaseEntryFilterArgs {
    documentTypeEqual?: KalturaDocumentType;
    documentTypeIn?: string;
    assetParamsIdsMatchOr?: string;
    assetParamsIdsMatchAnd?: string;
}
export declare class KalturaDocumentEntryBaseFilter extends KalturaBaseEntryFilter {
    documentTypeEqual: KalturaDocumentType;
    documentTypeIn: string;
    assetParamsIdsMatchOr: string;
    assetParamsIdsMatchAnd: string;
    constructor(data?: KalturaDocumentEntryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
