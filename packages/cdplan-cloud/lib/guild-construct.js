"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildConstruct = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
class GuildConstruct extends cdk.Construct {
    constructor(scope, id, props) {
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
exports.GuildConstruct = GuildConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQtY29uc3RydWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3VpbGQtY29uc3RydWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaURBQWlEO0FBUWpELE1BQWEsY0FBZSxTQUFRLEdBQUcsQ0FBQyxTQUFTO0lBRy9DLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBWTtRQUN4RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDaEUsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakMsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFdBQVcsRUFBRTtnQkFDWCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVk7YUFDdEQ7WUFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ2xDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBRTFCLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxNQUFNLGdCQUFnQixHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBeEJELHdDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gXCJAYXdzLWNkay9hd3MtbGFtYmRhXCI7XG5pbXBvcnQgKiBhcyBhcGlndyBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIjtcbmltcG9ydCB7IElGdW5jdGlvbiB9IGZyb20gXCJAYXdzLWNkay9hd3MtbGFtYmRhXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRva2VuUHJvdmlkZXI6IElGdW5jdGlvbjtcbiAgcmVzdEdhdGV3YXk6IGFwaWd3LlJlc3RBcGk7XG59XG5cbmV4cG9ydCBjbGFzcyBHdWlsZENvbnN0cnVjdCBleHRlbmRzIGNkay5Db25zdHJ1Y3Qge1xuICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlcjogbGFtYmRhLkZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgY29uc3QgZ3VpbGRQcm94eSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHdWlsZFByb3h5SGFuZGxlclwiLCB7XG4gICAgICBjb2RlOiBuZXcgbGFtYmRhLkFzc2V0Q29kZShcInNyY1wiKSxcbiAgICAgIGhhbmRsZXI6IFwiZ3VpbGQtcHJveHkuaGFuZGxlclwiLFxuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBUT0tFTl9GVU5DVElPTl9OQU1FOiBwcm9wcy50b2tlblByb3ZpZGVyLmZ1bmN0aW9uTmFtZSxcbiAgICAgIH0sXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmhhbmRsZXIgPSBndWlsZFByb3h5O1xuXG4gICAgcHJvcHMudG9rZW5Qcm92aWRlci5ncmFudEludm9rZShndWlsZFByb3h5KTtcblxuICAgIGNvbnN0IGd1aWxkID0gcHJvcHMucmVzdEdhdGV3YXkucm9vdC5hZGRSZXNvdXJjZShcImd1aWxkXCIpO1xuICAgIGNvbnN0IGd1aWxkSW50ZWdyYXRpb24gPSBuZXcgYXBpZ3cuTGFtYmRhSW50ZWdyYXRpb24oZ3VpbGRQcm94eSk7XG4gICAgZ3VpbGQuYWRkTWV0aG9kKFwiR0VUXCIsIGd1aWxkSW50ZWdyYXRpb24pO1xuICB9XG59XG4iXX0=