import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
export declare class CacheConstruct extends cdk.Construct {
    readonly cacheLookup: lambda.Function;
    constructor(scope: cdk.Construct, id: string);
}
