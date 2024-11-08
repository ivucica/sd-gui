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
 * @interface FaceRestorerItem
 */
export interface FaceRestorerItem {
    /**
     * 
     * @type {string}
     * @memberof FaceRestorerItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FaceRestorerItem
     */
    cmdDir?: string;
}

/**
 * Check if a given object implements the FaceRestorerItem interface.
 */
export function instanceOfFaceRestorerItem(value: object): value is FaceRestorerItem {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function FaceRestorerItemFromJSON(json: any): FaceRestorerItem {
    return FaceRestorerItemFromJSONTyped(json, false);
}

export function FaceRestorerItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): FaceRestorerItem {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'cmdDir': json['cmd_dir'] == null ? undefined : json['cmd_dir'],
    };
}

  export function FaceRestorerItemToJSON(json: any): FaceRestorerItem {
      return FaceRestorerItemToJSONTyped(json, false);
  }

  export function FaceRestorerItemToJSONTyped(value?: FaceRestorerItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'cmd_dir': value['cmdDir'],
    };
}

