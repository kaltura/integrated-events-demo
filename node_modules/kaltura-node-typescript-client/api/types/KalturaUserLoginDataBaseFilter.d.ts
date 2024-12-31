import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaUserLoginDataBaseFilterArgs extends KalturaRelatedFilterArgs {
    loginEmailEqual?: string;
}
export declare class KalturaUserLoginDataBaseFilter extends KalturaRelatedFilter {
    loginEmailEqual: string;
    constructor(data?: KalturaUserLoginDataBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
