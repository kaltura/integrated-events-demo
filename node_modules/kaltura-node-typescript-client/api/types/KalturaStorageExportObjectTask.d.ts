import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaStorageExportObjectTaskArgs extends KalturaObjectTaskArgs {
    storageId?: string;
}
export declare class KalturaStorageExportObjectTask extends KalturaObjectTask {
    storageId: string;
    constructor(data?: KalturaStorageExportObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
