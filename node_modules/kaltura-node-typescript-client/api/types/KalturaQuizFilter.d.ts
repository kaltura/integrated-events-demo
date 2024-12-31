import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaQuizFilterArgs extends KalturaRelatedFilterArgs {
    entryIdEqual?: string;
    entryIdIn?: string;
}
export declare class KalturaQuizFilter extends KalturaRelatedFilter {
    entryIdEqual: string;
    entryIdIn: string;
    constructor(data?: KalturaQuizFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
