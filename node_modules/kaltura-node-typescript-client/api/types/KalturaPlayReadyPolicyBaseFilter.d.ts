import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicyFilter, KalturaDrmPolicyFilterArgs } from './KalturaDrmPolicyFilter';
export interface KalturaPlayReadyPolicyBaseFilterArgs extends KalturaDrmPolicyFilterArgs {
}
export declare class KalturaPlayReadyPolicyBaseFilter extends KalturaDrmPolicyFilter {
    constructor(data?: KalturaPlayReadyPolicyBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
