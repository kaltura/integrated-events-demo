import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaMatchMetadataConditionArgs extends KalturaMatchConditionArgs {
    xPath?: string;
    profileId?: number;
    profileSystemName?: string;
}
export declare class KalturaMatchMetadataCondition extends KalturaMatchCondition {
    xPath: string;
    profileId: number;
    profileSystemName: string;
    constructor(data?: KalturaMatchMetadataConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
