import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";
import { IFunction } from "@aws-cdk/aws-lambda";
interface Props {
    tokenProvider: IFunction;
    restGateway: apigw.RestApi;
}
export declare class GuildConstruct extends cdk.Construct {
    readonly handler: lambda.Function;
    constructor(scope: cdk.Construct, id: string, props: Props);
}
export {};
