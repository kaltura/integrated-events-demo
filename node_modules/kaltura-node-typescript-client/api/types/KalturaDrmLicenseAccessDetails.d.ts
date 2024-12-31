import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDrmLicenseAccessDetailsArgs extends KalturaObjectBaseArgs {
    policy?: string;
    duration?: number;
    absolute_duration?: number;
    licenseParams?: KalturaKeyValue[];
}
export declare class KalturaDrmLicenseAccessDetails extends KalturaObjectBase {
    policy: string;
    duration: number;
    absolute_duration: number;
    licenseParams: KalturaKeyValue[];
    constructor(data?: KalturaDrmLicenseAccessDetailsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
