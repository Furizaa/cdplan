import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from "@aws-cdk/aws-apigateway";
import { IFunction } from "@aws-cdk/aws-lambda";

interface Props {
  tokenProvider: IFunction;
  restGateway: apigw.RestApi;
}

export class GuildConstruct extends cdk.Construct {
  public readonly handler: lambda.Function;

  constructor(scope: cdk.Construct, id: string, props: Props) {
    super(scope, id);

    const guildProxy = new lambda.Function(this, "GuildProxyHandler", {
      code: new lambda.AssetCode("src"),
      handler: "guild-proxy.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      environment: {
        TOKEN_FUNCTION_NAME: props.tokenProvider.functionName,
      },
      timeout: cdk.Duration.seconds(15),
    });

    this.handler = guildProxy;

    props.tokenProvider.grantInvoke(guildProxy);

    const guild = props.restGateway.root.addResource("guild");
    const guildIntegration = new apigw.LambdaIntegration(guildProxy);
    guild.addMethod("GET", guildIntegration);
  }
}
