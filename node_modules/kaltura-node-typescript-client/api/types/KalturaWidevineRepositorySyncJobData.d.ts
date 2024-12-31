import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidevineRepositorySyncMode } from './KalturaWidevineRepositorySyncMode';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaWidevineRepositorySyncJobDataArgs extends KalturaJobDataArgs {
    syncMode?: KalturaWidevineRepositorySyncMode;
    wvAssetIds?: string;
    modifiedAttributes?: string;
    monitorSyncCompletion?: number;
}
export declare class KalturaWidevineRepositorySyncJobData extends KalturaJobData {
    syncMode: KalturaWidevineRepositorySyncMode;
    wvAssetIds: string;
    modifiedAttributes: string;
    monitorSyncCompletion: number;
    constructor(data?: KalturaWidevineRepositorySyncJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
