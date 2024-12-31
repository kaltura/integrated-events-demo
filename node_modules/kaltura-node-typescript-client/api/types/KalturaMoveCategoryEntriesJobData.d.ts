import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaMoveCategoryEntriesJobDataArgs extends KalturaJobDataArgs {
    srcCategoryId?: number;
    destCategoryId?: number;
    lastMovedCategoryId?: number;
    lastMovedCategoryPageIndex?: number;
    lastMovedCategoryEntryPageIndex?: number;
    moveFromChildren?: boolean;
    destCategoryFullIds?: string;
}
export declare class KalturaMoveCategoryEntriesJobData extends KalturaJobData {
    srcCategoryId: number;
    destCategoryId: number;
    lastMovedCategoryId: number;
    lastMovedCategoryPageIndex: number;
    lastMovedCategoryEntryPageIndex: number;
    moveFromChildren: boolean;
    destCategoryFullIds: string;
    constructor(data?: KalturaMoveCategoryEntriesJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
