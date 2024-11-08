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
 * @interface TextToImageResponse
 */
export interface TextToImageResponse {
    /**
     * The generated image in base64 format.
     * @type {Array<string>}
     * @memberof TextToImageResponse
     */
    images?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof TextToImageResponse
     */
    parameters: object;
    /**
     * 
     * @type {string}
     * @memberof TextToImageResponse
     */
    info: string;
}

/**
 * Check if a given object implements the TextToImageResponse interface.
 */
export function instanceOfTextToImageResponse(value: object): value is TextToImageResponse {
    if (!('parameters' in value) || value['parameters'] === undefined) return false;
    if (!('info' in value) || value['info'] === undefined) return false;
    return true;
}

export function TextToImageResponseFromJSON(json: any): TextToImageResponse {
    return TextToImageResponseFromJSONTyped(json, false);
}

export function TextToImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextToImageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'images': json['images'] == null ? undefined : json['images'],
        'parameters': json['parameters'],
        'info': json['info'],
    };
}

  export function TextToImageResponseToJSON(json: any): TextToImageResponse {
      return TextToImageResponseToJSONTyped(json, false);
  }

  export function TextToImageResponseToJSONTyped(value?: TextToImageResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'images': value['images'],
        'parameters': value['parameters'],
        'info': value['info'],
    };
}

