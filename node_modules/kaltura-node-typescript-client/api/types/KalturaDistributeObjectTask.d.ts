import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaDistributeObjectTaskArgs extends KalturaObjectTaskArgs {
    distributionProfileId?: string;
}
export declare class KalturaDistributeObjectTask extends KalturaObjectTask {
    distributionProfileId: string;
    constructor(data?: KalturaDistributeObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
