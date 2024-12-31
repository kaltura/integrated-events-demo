import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeleteFlavorsLogicType } from './KalturaDeleteFlavorsLogicType';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaDeleteEntryFlavorsObjectTaskArgs extends KalturaObjectTaskArgs {
    deleteType?: KalturaDeleteFlavorsLogicType;
    flavorParamsIds?: string;
}
export declare class KalturaDeleteEntryFlavorsObjectTask extends KalturaObjectTask {
    deleteType: KalturaDeleteFlavorsLogicType;
    flavorParamsIds: string;
    constructor(data?: KalturaDeleteEntryFlavorsObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
