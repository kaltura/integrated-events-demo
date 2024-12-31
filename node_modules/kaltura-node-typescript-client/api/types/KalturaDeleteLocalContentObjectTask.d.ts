import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaDeleteLocalContentObjectTaskArgs extends KalturaObjectTaskArgs {
}
export declare class KalturaDeleteLocalContentObjectTask extends KalturaObjectTask {
    constructor(data?: KalturaDeleteLocalContentObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
