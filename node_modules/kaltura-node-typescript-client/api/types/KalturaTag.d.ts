import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTaggedObjectType } from './KalturaTaggedObjectType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaTagArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaTag extends KalturaObjectBase {
    readonly id: number;
    readonly tag: string;
    readonly taggedObjectType: KalturaTaggedObjectType;
    readonly partnerId: number;
    readonly instanceCount: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(data?: KalturaTagArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
