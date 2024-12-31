import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContextTypeHolder, KalturaContextTypeHolderArgs } from './KalturaContextTypeHolder';
export interface KalturaAccessControlContextTypeHolderArgs extends KalturaContextTypeHolderArgs {
}
export declare class KalturaAccessControlContextTypeHolder extends KalturaContextTypeHolder {
    constructor(data?: KalturaAccessControlContextTypeHolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
