"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenContruct = void 0;
const cdk = require("@aws-cdk/core");
const Events = require("@aws-cdk/aws-events");
const Eventtargets = require("@aws-cdk/aws-events-targets");
const lambda = require("@aws-cdk/aws-lambda");
const dynamodb = require("@aws-cdk/aws-dynamodb");
const secretsmanager = require("@aws-cdk/aws-secretsmanager");
class TokenContruct extends cdk.Construct {
    constructor(scope, id) {
        super(scope, id);
        const table = new dynamodb.Table(this, 'BNETAPITokenCache', {
            partitionKey: { name: 'region', type: dynamodb.AttributeType.STRING },
        });
        const bnetApiSecret = secretsmanager.Secret.fromSecretAttributes(scope, 'prod/SimUI/BNetAPI', {
            secretArn: 'arn:aws:secretsmanager:eu-central-1:169323831851:secret:prod/SimUI/BNetAPI-8Q7rIT',
        });
        const rotator = new lambda.Function(this, 'TokenRotator', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'token-rotator.handler',
            code: lambda.Code.fromAsset('src'),
            environment: {
                TOKEN_TABLE_NAME: table.tableName,
                BNET_SECRET_NAME: bnetApiSecret.secretName,
            },
        });
        const rotatorRule = new Events.Rule(this, 'RotatorRule', {
            schedule: Events.Schedule.expression('rate(12 hours)'),
        });
        this.handler = new lambda.Function(this, 'TokenProviderHandler', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'token-provider.handler',
            code: lambda.Code.fromAsset('src'),
            timeout: cdk.Duration.seconds(10),
            environment: {
                TOKEN_TABLE_NAME: table.tableName,
            },
        });
        table.grantReadData(this.handler);
        table.grantReadWriteData(rotator);
        bnetApiSecret.grantRead(rotator);
        rotatorRule.addTarget(new Eventtargets.LambdaFunction(rotator));
    }
}
exports.TokenContruct = TokenContruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tY29uc3RydWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9rZW4tY29uc3RydWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsNERBQTREO0FBQzVELDhDQUE4QztBQUM5QyxrREFBa0Q7QUFDbEQsOERBQThEO0FBRTlELE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxTQUFTO0lBRzlDLFlBQVksS0FBb0IsRUFBRSxFQUFVO1FBQzFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUMxRCxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtTQUN0RSxDQUFDLENBQUM7UUFFSCxNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRTtZQUM1RixTQUFTLEVBQUUsbUZBQW1GO1NBQy9GLENBQUMsQ0FBQztRQUVILE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2xDLFdBQVcsRUFBRTtnQkFDWCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDakMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLFVBQVU7YUFDM0M7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN2RCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7U0FDdkQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFO1lBQy9ELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDakMsV0FBVyxFQUFFO2dCQUNYLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxTQUFTO2FBQ2xDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBQ0Y7QUEzQ0Qsc0NBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgRXZlbnRzIGZyb20gJ0Bhd3MtY2RrL2F3cy1ldmVudHMnO1xuaW1wb3J0ICogYXMgRXZlbnR0YXJnZXRzIGZyb20gJ0Bhd3MtY2RrL2F3cy1ldmVudHMtdGFyZ2V0cyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBkeW5hbW9kYiBmcm9tICdAYXdzLWNkay9hd3MtZHluYW1vZGInO1xuaW1wb3J0ICogYXMgc2VjcmV0c21hbmFnZXIgZnJvbSAnQGF3cy1jZGsvYXdzLXNlY3JldHNtYW5hZ2VyJztcblxuZXhwb3J0IGNsYXNzIFRva2VuQ29udHJ1Y3QgZXh0ZW5kcyBjZGsuQ29uc3RydWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IGhhbmRsZXI6IGxhbWJkYS5GdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICBjb25zdCB0YWJsZSA9IG5ldyBkeW5hbW9kYi5UYWJsZSh0aGlzLCAnQk5FVEFQSVRva2VuQ2FjaGUnLCB7XG4gICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogJ3JlZ2lvbicsIHR5cGU6IGR5bmFtb2RiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBibmV0QXBpU2VjcmV0ID0gc2VjcmV0c21hbmFnZXIuU2VjcmV0LmZyb21TZWNyZXRBdHRyaWJ1dGVzKHNjb3BlLCAncHJvZC9TaW1VSS9CTmV0QVBJJywge1xuICAgICAgc2VjcmV0QXJuOiAnYXJuOmF3czpzZWNyZXRzbWFuYWdlcjpldS1jZW50cmFsLTE6MTY5MzIzODMxODUxOnNlY3JldDpwcm9kL1NpbVVJL0JOZXRBUEktOFE3cklUJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJvdGF0b3IgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdUb2tlblJvdGF0b3InLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAgIGhhbmRsZXI6ICd0b2tlbi1yb3RhdG9yLmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdzcmMnKSxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIFRPS0VOX1RBQkxFX05BTUU6IHRhYmxlLnRhYmxlTmFtZSxcbiAgICAgICAgQk5FVF9TRUNSRVRfTkFNRTogYm5ldEFwaVNlY3JldC5zZWNyZXROYW1lLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJvdGF0b3JSdWxlID0gbmV3IEV2ZW50cy5SdWxlKHRoaXMsICdSb3RhdG9yUnVsZScsIHtcbiAgICAgIHNjaGVkdWxlOiBFdmVudHMuU2NoZWR1bGUuZXhwcmVzc2lvbigncmF0ZSgxMiBob3VycyknKSxcbiAgICB9KTtcblxuICAgIHRoaXMuaGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ1Rva2VuUHJvdmlkZXJIYW5kbGVyJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBoYW5kbGVyOiAndG9rZW4tcHJvdmlkZXIuaGFuZGxlcicsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJ3NyYycpLFxuICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgVE9LRU5fVEFCTEVfTkFNRTogdGFibGUudGFibGVOYW1lLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRhYmxlLmdyYW50UmVhZERhdGEodGhpcy5oYW5kbGVyKTtcbiAgICB0YWJsZS5ncmFudFJlYWRXcml0ZURhdGEocm90YXRvcik7XG4gICAgYm5ldEFwaVNlY3JldC5ncmFudFJlYWQocm90YXRvcik7XG4gICAgcm90YXRvclJ1bGUuYWRkVGFyZ2V0KG5ldyBFdmVudHRhcmdldHMuTGFtYmRhRnVuY3Rpb24ocm90YXRvcikpO1xuICB9XG59XG4iXX0=