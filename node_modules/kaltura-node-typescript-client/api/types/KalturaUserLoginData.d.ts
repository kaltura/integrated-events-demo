import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaUserLoginDataArgs extends KalturaObjectBaseArgs {
    id?: string;
    loginEmail?: string;
}
export declare class KalturaUserLoginData extends KalturaObjectBase {
    id: string;
    loginEmail: string;
    constructor(data?: KalturaUserLoginDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
