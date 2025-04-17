/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { LoanRequestBuilderRequestsMetadata, type LoanRequestBuilder } from './loan/index.js';
// @ts-ignore
import { type WeatherforecastRequestBuilder, WeatherforecastRequestBuilderRequestsMetadata } from './weatherforecast/index.js';
// @ts-ignore
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
// @ts-ignore
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
// @ts-ignore
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
// @ts-ignore
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
// @ts-ignore
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new {@link MyTsClient} and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
// @ts-ignore
export function createMyTsClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<MyTsClient>(requestAdapter, pathParameters, MyTsClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface MyTsClient extends BaseRequestBuilder<MyTsClient> {
    /**
     * The loan property
     */
    get loan(): LoanRequestBuilder;
    /**
     * The weatherforecast property
     */
    get weatherforecast(): WeatherforecastRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const MyTsClientUriTemplate = "{+baseurl}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MyTsClientNavigationMetadata: Record<Exclude<keyof MyTsClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    loan: {
        requestsMetadata: LoanRequestBuilderRequestsMetadata,
    },
    weatherforecast: {
        requestsMetadata: WeatherforecastRequestBuilderRequestsMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
