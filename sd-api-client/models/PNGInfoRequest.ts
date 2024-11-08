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
 * @interface PNGInfoRequest
 */
export interface PNGInfoRequest {
    /**
     * The base64 encoded PNG image
     * @type {string}
     * @memberof PNGInfoRequest
     */
    image: string;
}

/**
 * Check if a given object implements the PNGInfoRequest interface.
 */
export function instanceOfPNGInfoRequest(value: object): value is PNGInfoRequest {
    if (!('image' in value) || value['image'] === undefined) return false;
    return true;
}

export function PNGInfoRequestFromJSON(json: any): PNGInfoRequest {
    return PNGInfoRequestFromJSONTyped(json, false);
}

export function PNGInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PNGInfoRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'image': json['image'],
    };
}

  export function PNGInfoRequestToJSON(json: any): PNGInfoRequest {
      return PNGInfoRequestToJSONTyped(json, false);
  }

  export function PNGInfoRequestToJSONTyped(value?: PNGInfoRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'image': value['image'],
    };
}

