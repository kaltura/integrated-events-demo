import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUser, KalturaUserArgs } from './KalturaUser';
export interface KalturaAdminUserArgs extends KalturaUserArgs {
}
export declare class KalturaAdminUser extends KalturaUser {
    constructor(data?: KalturaAdminUserArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
