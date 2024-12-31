import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaConvertEntryFlavorsObjectTaskArgs extends KalturaObjectTaskArgs {
    flavorParamsIds?: string;
    reconvert?: boolean;
}
export declare class KalturaConvertEntryFlavorsObjectTask extends KalturaObjectTask {
    flavorParamsIds: string;
    reconvert: boolean;
    constructor(data?: KalturaConvertEntryFlavorsObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
