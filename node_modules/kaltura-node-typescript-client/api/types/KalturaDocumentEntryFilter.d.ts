import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntryBaseFilter, KalturaDocumentEntryBaseFilterArgs } from './KalturaDocumentEntryBaseFilter';
export interface KalturaDocumentEntryFilterArgs extends KalturaDocumentEntryBaseFilterArgs {
}
export declare class KalturaDocumentEntryFilter extends KalturaDocumentEntryBaseFilter {
    constructor(data?: KalturaDocumentEntryFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
