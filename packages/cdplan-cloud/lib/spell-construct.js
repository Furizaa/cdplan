"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellConstruct = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
const dynamodb = require("@aws-cdk/aws-dynamodb");
class SpellConstruct extends cdk.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        this.cacheTable = new dynamodb.Table(this, 'BNETSpellCache', {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
        });
        const spellProxy = new lambda.Function(this, 'SpellProxyHandler', {
            code: new lambda.AssetCode('src'),
            handler: 'spell-proxy.handler',
            runtime: lambda.Runtime.NODEJS_12_X,
            environment: {
                TOKEN_FUNCTION_NAME: props.tokenProvider.functionName,
                CACHE_TABLE_NAME: this.cacheTable.tableName,
            },
            timeout: cdk.Duration.seconds(15),
        });
        this.handler = spellProxy;
        props.tokenProvider.grantInvoke(spellProxy);
        this.cacheTable.grantReadWriteData(spellProxy);
        const character = props.restGateway.root.addResource('spell');
        const characterIntegration = new apigw.LambdaIntegration(spellProxy);
        character.addMethod('GET', characterIntegration);
    }
}
exports.SpellConstruct = SpellConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwtY29uc3RydWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlbGwtY29uc3RydWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaURBQWlEO0FBQ2pELGtEQUFrRDtBQVFsRCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsU0FBUztJQUsvQyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQVk7UUFDeEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDM0QsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7U0FDbEUsQ0FBQyxDQUFDO1FBRUgsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsV0FBVyxFQUFFO2dCQUNYLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWTtnQkFDckQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2FBQzVDO1lBQ0QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUUxQixLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9DLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxNQUFNLG9CQUFvQixHQUFHLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGO0FBaENELHdDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCAqIGFzIGR5bmFtb2RiIGZyb20gJ0Bhd3MtY2RrL2F3cy1keW5hbW9kYic7XG5pbXBvcnQgeyBJRnVuY3Rpb24gfSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9rZW5Qcm92aWRlcjogSUZ1bmN0aW9uO1xuICByZXN0R2F0ZXdheTogYXBpZ3cuUmVzdEFwaTtcbn1cblxuZXhwb3J0IGNsYXNzIFNwZWxsQ29uc3RydWN0IGV4dGVuZHMgY2RrLkNvbnN0cnVjdCB7XG4gIHB1YmxpYyByZWFkb25seSBoYW5kbGVyOiBsYW1iZGEuRnVuY3Rpb247XG5cbiAgcHVibGljIHJlYWRvbmx5IGNhY2hlVGFibGU6IGR5bmFtb2RiLlRhYmxlO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgdGhpcy5jYWNoZVRhYmxlID0gbmV3IGR5bmFtb2RiLlRhYmxlKHRoaXMsICdCTkVUU3BlbGxDYWNoZScsIHtcbiAgICAgIHBhcnRpdGlvbktleTogeyBuYW1lOiAnaWQnLCB0eXBlOiBkeW5hbW9kYi5BdHRyaWJ1dGVUeXBlLlNUUklORyB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3BlbGxQcm94eSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ1NwZWxsUHJveHlIYW5kbGVyJywge1xuICAgICAgY29kZTogbmV3IGxhbWJkYS5Bc3NldENvZGUoJ3NyYycpLFxuICAgICAgaGFuZGxlcjogJ3NwZWxsLXByb3h5LmhhbmRsZXInLFxuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBUT0tFTl9GVU5DVElPTl9OQU1FOiBwcm9wcy50b2tlblByb3ZpZGVyLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgQ0FDSEVfVEFCTEVfTkFNRTogdGhpcy5jYWNoZVRhYmxlLnRhYmxlTmFtZSxcbiAgICAgIH0sXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSksXG4gICAgfSk7XG5cbiAgICB0aGlzLmhhbmRsZXIgPSBzcGVsbFByb3h5O1xuXG4gICAgcHJvcHMudG9rZW5Qcm92aWRlci5ncmFudEludm9rZShzcGVsbFByb3h5KTtcbiAgICB0aGlzLmNhY2hlVGFibGUuZ3JhbnRSZWFkV3JpdGVEYXRhKHNwZWxsUHJveHkpO1xuXG4gICAgY29uc3QgY2hhcmFjdGVyID0gcHJvcHMucmVzdEdhdGV3YXkucm9vdC5hZGRSZXNvdXJjZSgnc3BlbGwnKTtcbiAgICBjb25zdCBjaGFyYWN0ZXJJbnRlZ3JhdGlvbiA9IG5ldyBhcGlndy5MYW1iZGFJbnRlZ3JhdGlvbihzcGVsbFByb3h5KTtcbiAgICBjaGFyYWN0ZXIuYWRkTWV0aG9kKCdHRVQnLCBjaGFyYWN0ZXJJbnRlZ3JhdGlvbik7XG4gIH1cbn1cbiJdfQ==