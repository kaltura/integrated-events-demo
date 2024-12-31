import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaValidateActiveEdgeConditionArgs extends KalturaConditionArgs {
    edgeServerIds?: string;
}
export declare class KalturaValidateActiveEdgeCondition extends KalturaCondition {
    edgeServerIds: string;
    constructor(data?: KalturaValidateActiveEdgeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
