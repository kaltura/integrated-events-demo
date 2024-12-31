import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaDeleteEntryObjectTaskArgs extends KalturaObjectTaskArgs {
}
export declare class KalturaDeleteEntryObjectTask extends KalturaObjectTask {
    constructor(data?: KalturaDeleteEntryObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
