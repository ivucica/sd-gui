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
 * @interface BodyRoopImageRoopImagePost
 */
export interface BodyRoopImageRoopImagePost {
    /**
     * 
     * @type {string}
     * @memberof BodyRoopImageRoopImagePost
     */
    sourceImage?: string;
    /**
     * 
     * @type {string}
     * @memberof BodyRoopImageRoopImagePost
     */
    targetImage?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BodyRoopImageRoopImagePost
     */
    faceIndex?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof BodyRoopImageRoopImagePost
     */
    scale?: number;
    /**
     * 
     * @type {number}
     * @memberof BodyRoopImageRoopImagePost
     */
    upscaleVisibility?: number;
    /**
     * 
     * @type {string}
     * @memberof BodyRoopImageRoopImagePost
     */
    faceRestorer?: string;
    /**
     * 
     * @type {number}
     * @memberof BodyRoopImageRoopImagePost
     */
    restorerVisibility?: number;
    /**
     * 
     * @type {string}
     * @memberof BodyRoopImageRoopImagePost
     */
    model?: string;
}

/**
 * Check if a given object implements the BodyRoopImageRoopImagePost interface.
 */
export function instanceOfBodyRoopImageRoopImagePost(value: object): value is BodyRoopImageRoopImagePost {
    return true;
}

export function BodyRoopImageRoopImagePostFromJSON(json: any): BodyRoopImageRoopImagePost {
    return BodyRoopImageRoopImagePostFromJSONTyped(json, false);
}

export function BodyRoopImageRoopImagePostFromJSONTyped(json: any, ignoreDiscriminator: boolean): BodyRoopImageRoopImagePost {
    if (json == null) {
        return json;
    }
    return {
        
        'sourceImage': json['source_image'] == null ? undefined : json['source_image'],
        'targetImage': json['target_image'] == null ? undefined : json['target_image'],
        'faceIndex': json['face_index'] == null ? undefined : json['face_index'],
        'scale': json['scale'] == null ? undefined : json['scale'],
        'upscaleVisibility': json['upscale_visibility'] == null ? undefined : json['upscale_visibility'],
        'faceRestorer': json['face_restorer'] == null ? undefined : json['face_restorer'],
        'restorerVisibility': json['restorer_visibility'] == null ? undefined : json['restorer_visibility'],
        'model': json['model'] == null ? undefined : json['model'],
    };
}

  export function BodyRoopImageRoopImagePostToJSON(json: any): BodyRoopImageRoopImagePost {
      return BodyRoopImageRoopImagePostToJSONTyped(json, false);
  }

  export function BodyRoopImageRoopImagePostToJSONTyped(value?: BodyRoopImageRoopImagePost | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'source_image': value['sourceImage'],
        'target_image': value['targetImage'],
        'face_index': value['faceIndex'],
        'scale': value['scale'],
        'upscale_visibility': value['upscaleVisibility'],
        'face_restorer': value['faceRestorer'],
        'restorer_visibility': value['restorerVisibility'],
        'model': value['model'],
    };
}

