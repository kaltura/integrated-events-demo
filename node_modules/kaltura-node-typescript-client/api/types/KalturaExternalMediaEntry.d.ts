import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaSourceType } from './KalturaExternalMediaSourceType';
import { KalturaMediaEntry, KalturaMediaEntryArgs } from './KalturaMediaEntry';
export interface KalturaExternalMediaEntryArgs extends KalturaMediaEntryArgs {
    externalSourceType?: KalturaExternalMediaSourceType;
}
export declare class KalturaExternalMediaEntry extends KalturaMediaEntry {
    externalSourceType: KalturaExternalMediaSourceType;
    readonly assetParamsIds: string;
    constructor(data?: KalturaExternalMediaEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
