import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaMetadataFieldChangedConditionArgs extends KalturaMatchConditionArgs {
    xPath?: string;
    profileId?: number;
    profileSystemName?: string;
    versionA?: string;
    versionB?: string;
}
export declare class KalturaMetadataFieldChangedCondition extends KalturaMatchCondition {
    xPath: string;
    profileId: number;
    profileSystemName: string;
    versionA: string;
    versionB: string;
    constructor(data?: KalturaMetadataFieldChangedConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
