import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAccessControlArgs extends KalturaObjectBaseArgs {
    name?: string;
    systemName?: string;
    description?: string;
    isDefault?: KalturaNullableBoolean;
    restrictions?: KalturaBaseRestriction[];
}
export declare class KalturaAccessControl extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    name: string;
    systemName: string;
    description: string;
    readonly createdAt: Date;
    isDefault: KalturaNullableBoolean;
    restrictions: KalturaBaseRestriction[];
    readonly containsUnsuportedRestrictions: boolean;
    constructor(data?: KalturaAccessControlArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
