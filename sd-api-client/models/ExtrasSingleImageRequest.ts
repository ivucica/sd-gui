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
/**
 * 
 * @export
 * @interface ExtrasSingleImageRequest
 */
export interface ExtrasSingleImageRequest {
    /**
     * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    resizeMode?: ExtrasSingleImageRequestResizeModeEnum;
    /**
     * Should the backend return the generated image?
     * @type {boolean}
     * @memberof ExtrasSingleImageRequest
     */
    showExtrasResults?: boolean;
    /**
     * Sets the visibility of GFPGAN, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    gfpganVisibility?: number;
    /**
     * Sets the visibility of CodeFormer, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    codeformerVisibility?: number;
    /**
     * Sets the weight of CodeFormer, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    codeformerWeight?: number;
    /**
     * By how much to upscale the image, only used when resize_mode=0.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    upscalingResize?: number;
    /**
     * Target width for the upscaler to hit. Only used when resize_mode=1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    upscalingResizeW?: number;
    /**
     * Target height for the upscaler to hit. Only used when resize_mode=1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    upscalingResizeH?: number;
    /**
     * Should the upscaler crop the image to fit in the chosen size?
     * @type {boolean}
     * @memberof ExtrasSingleImageRequest
     */
    upscalingCrop?: boolean;
    /**
     * The name of the main upscaler to use, it has to be one of this list: 
     * @type {string}
     * @memberof ExtrasSingleImageRequest
     */
    upscaler1?: string;
    /**
     * The name of the secondary upscaler to use, it has to be one of this list: 
     * @type {string}
     * @memberof ExtrasSingleImageRequest
     */
    upscaler2?: string;
    /**
     * Sets the visibility of secondary upscaler, values should be between 0 and 1.
     * @type {number}
     * @memberof ExtrasSingleImageRequest
     */
    extrasUpscaler2Visibility?: number;
    /**
     * Should the upscaler run before restoring faces?
     * @type {boolean}
     * @memberof ExtrasSingleImageRequest
     */
    upscaleFirst?: boolean;
    /**
     * Image to work on, must be a Base64 string containing the image's data.
     * @type {string}
     * @memberof ExtrasSingleImageRequest
     */
    image?: string;
}


/**
 * @export
 */
export const ExtrasSingleImageRequestResizeModeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;
export type ExtrasSingleImageRequestResizeModeEnum = typeof ExtrasSingleImageRequestResizeModeEnum[keyof typeof ExtrasSingleImageRequestResizeModeEnum];


/**
 * Check if a given object implements the ExtrasSingleImageRequest interface.
 */
export function instanceOfExtrasSingleImageRequest(value: object): value is ExtrasSingleImageRequest {
    return true;
}

export function ExtrasSingleImageRequestFromJSON(json: any): ExtrasSingleImageRequest {
    return ExtrasSingleImageRequestFromJSONTyped(json, false);
}

export function ExtrasSingleImageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtrasSingleImageRequest {
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
        'image': json['image'] == null ? undefined : json['image'],
    };
}

export function ExtrasSingleImageRequestToJSON(json: any): ExtrasSingleImageRequest {
    return ExtrasSingleImageRequestToJSONTyped(json, false);
}

export function ExtrasSingleImageRequestToJSONTyped(value?: ExtrasSingleImageRequest | null, ignoreDiscriminator: boolean = false): any {
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
        'image': value['image'],
    };
}

