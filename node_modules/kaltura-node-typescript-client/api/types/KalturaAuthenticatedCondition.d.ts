import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaAuthenticatedConditionArgs extends KalturaConditionArgs {
    privileges?: KalturaStringValue[];
}
export declare class KalturaAuthenticatedCondition extends KalturaCondition {
    privileges: KalturaStringValue[];
    constructor(data?: KalturaAuthenticatedConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
