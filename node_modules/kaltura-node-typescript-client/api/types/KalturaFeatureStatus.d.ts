import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFeatureStatusType } from './KalturaFeatureStatusType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFeatureStatusArgs extends KalturaObjectBaseArgs {
    type?: KalturaFeatureStatusType;
    value?: number;
}
export declare class KalturaFeatureStatus extends KalturaObjectBase {
    type: KalturaFeatureStatusType;
    value: number;
    constructor(data?: KalturaFeatureStatusArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
