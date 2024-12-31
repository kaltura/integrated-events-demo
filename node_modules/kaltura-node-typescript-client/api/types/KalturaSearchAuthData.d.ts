import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSearchAuthDataArgs extends KalturaObjectBaseArgs {
    authData?: string;
    loginUrl?: string;
    message?: string;
}
export declare class KalturaSearchAuthData extends KalturaObjectBase {
    authData: string;
    loginUrl: string;
    message: string;
    constructor(data?: KalturaSearchAuthDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
