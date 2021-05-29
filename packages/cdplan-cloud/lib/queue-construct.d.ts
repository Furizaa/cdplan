import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import { Function } from "@aws-cdk/aws-lambda";
interface Props {
    characterWorkerFunc: Function;
    guildWorkerFunc: Function;
    spellWorkerFunc: Function;
    itemWorkerFunc: Function;
    spellCacheTable: dynamodb.Table;
    itemCacheTable: dynamodb.Table;
}
export declare class QueueConstruct extends cdk.Construct {
    readonly queueInsert: lambda.Function;
    readonly queueLookup: lambda.Function;
    constructor(scope: cdk.Construct, id: string, props: Props);
}
export {};
