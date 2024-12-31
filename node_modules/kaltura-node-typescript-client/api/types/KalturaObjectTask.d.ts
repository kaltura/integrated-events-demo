import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectTaskType } from './KalturaObjectTaskType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaObjectTaskArgs extends KalturaObjectBaseArgs {
    stopProcessingOnError?: boolean;
}
export declare class KalturaObjectTask extends KalturaObjectBase {
    readonly type: KalturaObjectTaskType;
    stopProcessingOnError: boolean;
    constructor(data?: KalturaObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
