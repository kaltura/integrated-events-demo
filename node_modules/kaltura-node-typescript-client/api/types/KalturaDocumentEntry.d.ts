import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentType } from './KalturaDocumentType';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';
export interface KalturaDocumentEntryArgs extends KalturaBaseEntryArgs {
    documentType?: KalturaDocumentType;
}
export declare class KalturaDocumentEntry extends KalturaBaseEntry {
    documentType: KalturaDocumentType;
    readonly assetParamsIds: string;
    constructor(data?: KalturaDocumentEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
