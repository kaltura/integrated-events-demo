import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfileStatus } from './KalturaVirusScanProfileStatus';
import { KalturaVirusScanEngineType } from './KalturaVirusScanEngineType';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaVirusFoundAction } from './KalturaVirusFoundAction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaVirusScanProfileArgs extends KalturaObjectBaseArgs {
    name?: string;
    status?: KalturaVirusScanProfileStatus;
    engineType?: KalturaVirusScanEngineType;
    entryFilter?: KalturaBaseEntryFilter;
    actionIfInfected?: KalturaVirusFoundAction;
}
export declare class KalturaVirusScanProfile extends KalturaObjectBase {
    readonly id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly partnerId: number;
    name: string;
    status: KalturaVirusScanProfileStatus;
    engineType: KalturaVirusScanEngineType;
    entryFilter: KalturaBaseEntryFilter;
    actionIfInfected: KalturaVirusFoundAction;
    constructor(data?: KalturaVirusScanProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
