import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyCopyEnablerHolder } from './KalturaPlayReadyCopyEnablerHolder';
import { KalturaPlayReadyRight, KalturaPlayReadyRightArgs } from './KalturaPlayReadyRight';
export interface KalturaPlayReadyCopyRightArgs extends KalturaPlayReadyRightArgs {
    copyCount?: number;
    copyEnablers?: KalturaPlayReadyCopyEnablerHolder[];
}
export declare class KalturaPlayReadyCopyRight extends KalturaPlayReadyRight {
    copyCount: number;
    copyEnablers: KalturaPlayReadyCopyEnablerHolder[];
    constructor(data?: KalturaPlayReadyCopyRightArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
