import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicyBaseFilter, KalturaDrmPolicyBaseFilterArgs } from './KalturaDrmPolicyBaseFilter';
export interface KalturaDrmPolicyFilterArgs extends KalturaDrmPolicyBaseFilterArgs {
}
export declare class KalturaDrmPolicyFilter extends KalturaDrmPolicyBaseFilter {
    constructor(data?: KalturaDrmPolicyFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
