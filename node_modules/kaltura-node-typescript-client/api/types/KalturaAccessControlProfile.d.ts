import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRule } from './KalturaRule';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAccessControlProfileArgs extends KalturaObjectBaseArgs {
    name?: string;
    systemName?: string;
    description?: string;
    isDefault?: KalturaNullableBoolean;
    rules?: KalturaRule[];
}
export declare class KalturaAccessControlProfile extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    name: string;
    systemName: string;
    description: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    isDefault: KalturaNullableBoolean;
    rules: KalturaRule[];
    constructor(data?: KalturaAccessControlProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
