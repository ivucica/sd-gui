/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FileData } from './FileData';
import {
    FileDataFromJSON,
    FileDataFromJSONTyped,
    FileDataToJSON,
    FileDataToJSONTyped,
} from './FileData';

/**
 * 
 * @export
 * @interface ExtrasBatchImagesRequest
 */
export interface ExtrasBatchImagesRequest {
    /**
     * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    resizeMode?: ExtrasBatchImagesRequestResizeModeEnum;
    /**
     * Should the backend return the generated image?
     * @type {boolean}
     * @memberof ExtrasBatchImagesRequest
     */
    showExtrasResults?: boolean;
    /**
     * Sets the visibility of GFPGAN, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    gfpganVisibility?: number;
    /**
     * Sets the visibility of CodeFormer, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    codeformerVisibility?: number;
    /**
     * Sets the weight of CodeFormer, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    codeformerWeight?: number;
    /**
     * By how much to upscale the image, only used when resize_mode=0.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    upscalingResize?: number;
    /**
     * Target width for the upscaler to hit. Only used when resize_mode=1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    upscalingResizeW?: number;
    /**
     * Target height for the upscaler to hit. Only used when resize_mode=1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    upscalingResizeH?: number;
    /**
     * Should the upscaler crop the image to fit in the chosen size?
     * @type {boolean}
     * @memberof ExtrasBatchImagesRequest
     */
    upscalingCrop?: boolean;
    /**
     * The name of the main upscaler to use, it has to be one of this list: 
     * @type {string}
     * @memberof ExtrasBatchImagesRequest
     */
    upscaler1?: string;
    /**
     * The name of the secondary upscaler to use, it has to be one of this list: 
     * @type {string}
     * @memberof ExtrasBatchImagesRequest
     */
    upscaler2?: string;
    /**
     * Sets the visibility of secondary upscaler, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasBatchImagesRequest
     */
    extrasUpscaler2Visibility?: number;
    /**
     * Should the upscaler run before restoring faces?
     * @type {boolean}
     * @memberof ExtrasBatchImagesRequest
     */
    upscaleFirst?: boolean;
    /**
     * List of images to work on. Must be Base64 strings
     * @type {Array<FileData>}
     * @memberof ExtrasBatchImagesRequest
     */
    imageList: Array<FileData>;
}


/**
 * @export
 */
export const ExtrasBatchImagesRequestResizeModeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;
export type ExtrasBatchImagesRequestResizeModeEnum = typeof ExtrasBatchImagesRequestResizeModeEnum[keyof typeof ExtrasBatchImagesRequestResizeModeEnum];


/**
 * Check if a given object implements the ExtrasBatchImagesRequest interface.
 */
export function instanceOfExtrasBatchImagesRequest(value: object): value is ExtrasBatchImagesRequest {
    if (!('imageList' in value) || value['imageList'] === undefined) return false;
    return true;
}

export function ExtrasBatchImagesRequestFromJSON(json: any): ExtrasBatchImagesRequest {
    return ExtrasBatchImagesRequestFromJSONTyped(json, false);
}

export function ExtrasBatchImagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtrasBatchImagesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'resizeMode': json['resize_mode'] == null ? undefined : json['resize_mode'],
        'showExtrasResults': json['show_extras_results'] == null ? undefined : json['show_extras_results'],
        'gfpganVisibility': json['gfpgan_visibility'] == null ? undefined : json['gfpgan_visibility'],
        'codeformerVisibility': json['codeformer_visibility'] == null ? undefined : json['codeformer_visibility'],
        'codeformerWeight': json['codeformer_weight'] == null ? undefined : json['codeformer_weight'],
        'upscalingResize': json['upscaling_resize'] == null ? undefined : json['upscaling_resize'],
        'upscalingResizeW': json['upscaling_resize_w'] == null ? undefined : json['upscaling_resize_w'],
        'upscalingResizeH': json['upscaling_resize_h'] == null ? undefined : json['upscaling_resize_h'],
        'upscalingCrop': json['upscaling_crop'] == null ? undefined : json['upscaling_crop'],
        'upscaler1': json['upscaler_1'] == null ? undefined : json['upscaler_1'],
        'upscaler2': json['upscaler_2'] == null ? undefined : json['upscaler_2'],
        'extrasUpscaler2Visibility': json['extras_upscaler_2_visibility'] == null ? undefined : json['extras_upscaler_2_visibility'],
        'upscaleFirst': json['upscale_first'] == null ? undefined : json['upscale_first'],
        'imageList': ((json['imageList'] as Array<any>).map(FileDataFromJSON)),
    };
}

export function ExtrasBatchImagesRequestToJSON(json: any): ExtrasBatchImagesRequest {
    return ExtrasBatchImagesRequestToJSONTyped(json, false);
}

export function ExtrasBatchImagesRequestToJSONTyped(value?: ExtrasBatchImagesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'resize_mode': value['resizeMode'],
        'show_extras_results': value['showExtrasResults'],
        'gfpgan_visibility': value['gfpganVisibility'],
        'codeformer_visibility': value['codeformerVisibility'],
        'codeformer_weight': value['codeformerWeight'],
        'upscaling_resize': value['upscalingResize'],
        'upscaling_resize_w': value['upscalingResizeW'],
        'upscaling_resize_h': value['upscalingResizeH'],
        'upscaling_crop': value['upscalingCrop'],
        'upscaler_1': value['upscaler1'],
        'upscaler_2': value['upscaler2'],
        'extras_upscaler_2_visibility': value['extrasUpscaler2Visibility'],
        'upscale_first': value['upscaleFirst'],
        'imageList': ((value['imageList'] as Array<any>).map(FileDataToJSON)),
    };
}

