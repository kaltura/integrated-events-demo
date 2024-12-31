import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskAddOrRemoveType } from './KalturaScheduledTaskAddOrRemoveType';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaModifyCategoriesObjectTaskArgs extends KalturaObjectTaskArgs {
    addRemoveType?: KalturaScheduledTaskAddOrRemoveType;
    categoryIds?: KalturaIntegerValue[];
}
export declare class KalturaModifyCategoriesObjectTask extends KalturaObjectTask {
    addRemoveType: KalturaScheduledTaskAddOrRemoveType;
    categoryIds: KalturaIntegerValue[];
    constructor(data?: KalturaModifyCategoriesObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
