import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFilterArgs extends KalturaObjectBaseArgs {
    orderBy?: string;
    advancedSearch?: KalturaSearchItem;
}
export declare class KalturaFilter extends KalturaObjectBase {
    orderBy: string;
    advancedSearch: KalturaSearchItem;
    constructor(data?: KalturaFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
