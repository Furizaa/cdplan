"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterContruct = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
class CharacterContruct extends cdk.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const characterProxy = new lambda.Function(this, 'CharacterProxyHandler', {
            code: new lambda.AssetCode('src'),
            handler: 'character-proxy.handler',
            runtime: lambda.Runtime.NODEJS_12_X,
            environment: {
                TOKEN_FUNCTION_NAME: props.tokenProvider.functionName,
            },
            timeout: cdk.Duration.seconds(15),
        });
        this.handler = characterProxy;
        props.tokenProvider.grantInvoke(characterProxy);
        const character = props.restGateway.root.addResource('character');
        const characterIntegration = new apigw.LambdaIntegration(characterProxy);
        character.addMethod('GET', characterIntegration);
    }
}
exports.CharacterContruct = CharacterContruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLWNvbnN0cnVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1jb25zdHJ1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxpREFBaUQ7QUFRakQsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsU0FBUztJQUdsRCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQVk7UUFDeEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHVCQUF1QixFQUFFO1lBQ3hFLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2pDLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxXQUFXLEVBQUU7Z0JBQ1gsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZO2FBQ3REO1lBQ0QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUU5QixLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoRCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEUsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQXhCRCw4Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBhcGlndyBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSc7XG5pbXBvcnQgeyBJRnVuY3Rpb24gfSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9rZW5Qcm92aWRlcjogSUZ1bmN0aW9uO1xuICByZXN0R2F0ZXdheTogYXBpZ3cuUmVzdEFwaTtcbn1cblxuZXhwb3J0IGNsYXNzIENoYXJhY3RlckNvbnRydWN0IGV4dGVuZHMgY2RrLkNvbnN0cnVjdCB7XG4gIHB1YmxpYyByZWFkb25seSBoYW5kbGVyOiBsYW1iZGEuRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICBjb25zdCBjaGFyYWN0ZXJQcm94eSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0NoYXJhY3RlclByb3h5SGFuZGxlcicsIHtcbiAgICAgIGNvZGU6IG5ldyBsYW1iZGEuQXNzZXRDb2RlKCdzcmMnKSxcbiAgICAgIGhhbmRsZXI6ICdjaGFyYWN0ZXItcHJveHkuaGFuZGxlcicsXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIFRPS0VOX0ZVTkNUSU9OX05BTUU6IHByb3BzLnRva2VuUHJvdmlkZXIuZnVuY3Rpb25OYW1lLFxuICAgICAgfSxcbiAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KSxcbiAgICB9KTtcblxuICAgIHRoaXMuaGFuZGxlciA9IGNoYXJhY3RlclByb3h5O1xuXG4gICAgcHJvcHMudG9rZW5Qcm92aWRlci5ncmFudEludm9rZShjaGFyYWN0ZXJQcm94eSk7XG5cbiAgICBjb25zdCBjaGFyYWN0ZXIgPSBwcm9wcy5yZXN0R2F0ZXdheS5yb290LmFkZFJlc291cmNlKCdjaGFyYWN0ZXInKTtcbiAgICBjb25zdCBjaGFyYWN0ZXJJbnRlZ3JhdGlvbiA9IG5ldyBhcGlndy5MYW1iZGFJbnRlZ3JhdGlvbihjaGFyYWN0ZXJQcm94eSk7XG4gICAgY2hhcmFjdGVyLmFkZE1ldGhvZCgnR0VUJywgY2hhcmFjdGVySW50ZWdyYXRpb24pO1xuICB9XG59XG4iXX0=