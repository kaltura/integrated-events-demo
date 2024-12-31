import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaEntryServerNodeArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaEntryServerNode extends KalturaObjectBase {
    readonly id: number;
    readonly entryId: string;
    readonly serverNodeId: number;
    readonly partnerId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly status: KalturaEntryServerNodeStatus;
    readonly serverType: KalturaEntryServerNodeType;
    constructor(data?: KalturaEntryServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
