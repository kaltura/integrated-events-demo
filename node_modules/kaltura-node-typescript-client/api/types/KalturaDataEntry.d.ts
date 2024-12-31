import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';
export interface KalturaDataEntryArgs extends KalturaBaseEntryArgs {
    dataContent?: string;
    retrieveDataContentByGet?: boolean;
}
export declare class KalturaDataEntry extends KalturaBaseEntry {
    dataContent: string;
    retrieveDataContentByGet: boolean;
    constructor(data?: KalturaDataEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
