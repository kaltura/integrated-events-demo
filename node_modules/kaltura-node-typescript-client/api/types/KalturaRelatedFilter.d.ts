import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaRelatedFilterArgs extends KalturaFilterArgs {
}
export declare class KalturaRelatedFilter extends KalturaFilter {
    constructor(data?: KalturaRelatedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
