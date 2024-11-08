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
 * @interface PNGInfoResponse
 */
export interface PNGInfoResponse {
    /**
     * A string with the parameters used to generate the image
     * @type {string}
     * @memberof PNGInfoResponse
     */
    info: string;
    /**
     * A dictionary containing all the other fields the image had
     * @type {object}
     * @memberof PNGInfoResponse
     */
    items: object;
    /**
     * A dictionary with parsed generation info fields
     * @type {object}
     * @memberof PNGInfoResponse
     */
    parameters: object;
}

/**
 * Check if a given object implements the PNGInfoResponse interface.
 */
export function instanceOfPNGInfoResponse(value: object): value is PNGInfoResponse {
    if (!('info' in value) || value['info'] === undefined) return false;
    if (!('items' in value) || value['items'] === undefined) return false;
    if (!('parameters' in value) || value['parameters'] === undefined) return false;
    return true;
}

export function PNGInfoResponseFromJSON(json: any): PNGInfoResponse {
    return PNGInfoResponseFromJSONTyped(json, false);
}

export function PNGInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PNGInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'info': json['info'],
        'items': json['items'],
        'parameters': json['parameters'],
    };
}

  export function PNGInfoResponseToJSON(json: any): PNGInfoResponse {
      return PNGInfoResponseToJSONTyped(json, false);
  }

  export function PNGInfoResponseToJSONTyped(value?: PNGInfoResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'info': value['info'],
        'items': value['items'],
        'parameters': value['parameters'],
    };
}

