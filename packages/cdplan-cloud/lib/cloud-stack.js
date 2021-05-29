"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-new */
const cdk = require("@aws-cdk/core");
const apigw = require("@aws-cdk/aws-apigateway");
const token_construct_1 = require("./token-construct");
const character_construct_1 = require("./character-construct");
const item_construct_1 = require("./item-construct");
const spell_construct_1 = require("./spell-construct");
const queue_construct_1 = require("./queue-construct");
const guild_construct_1 = require("./guild-construct");
class CloudStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const tokenConstruct = new token_construct_1.TokenContruct(this, "TokenConstruct");
        const api = new apigw.RestApi(this, "bnetGateway", {
            restApiName: "BNet Gateway Service",
        });
        const characterConstruct = new character_construct_1.CharacterContruct(this, "CharacterConstruct", {
            tokenProvider: tokenConstruct.handler,
            restGateway: api,
        });
        const guildConstruct = new guild_construct_1.GuildConstruct(this, "GuildConstruct", {
            tokenProvider: tokenConstruct.handler,
            restGateway: api,
        });
        const itemConstruct = new item_construct_1.ItemConstruct(this, "ItemConstruct", {
            tokenProvider: tokenConstruct.handler,
            restGateway: api,
        });
        const spellConstruct = new spell_construct_1.SpellConstruct(this, "SpellConstruct", {
            tokenProvider: tokenConstruct.handler,
            restGateway: api,
        });
        const queueConstruct = new queue_construct_1.QueueConstruct(this, "QueueConstruct", {
            characterWorkerFunc: characterConstruct.handler,
            guildWorkerFunc: guildConstruct.handler,
            itemWorkerFunc: itemConstruct.handler,
            spellWorkerFunc: spellConstruct.handler,
            spellCacheTable: spellConstruct.cacheTable,
            itemCacheTable: itemConstruct.cacheTable,
        });
        new cdk.CfnOutput(this, "ApiGatewayEndpoint", {
            value: api.url,
        });
        const queue = api.root.addResource("queue");
        const queueInsertIntegration = new apigw.LambdaIntegration(queueConstruct.queueInsert);
        const queueLookupIntegration = new apigw.LambdaIntegration(queueConstruct.queueLookup);
        queue.addMethod("POST", queueInsertIntegration);
        queue.addMethod("GET", queueLookupIntegration);
    }
}
exports.default = CloudStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUEyQjtBQUMzQixxQ0FBcUM7QUFDckMsaURBQWlEO0FBQ2pELHVEQUFrRDtBQUNsRCwrREFBMEQ7QUFDMUQscURBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCx1REFBbUQ7QUFDbkQsdURBQW1EO0FBRW5ELE1BQXFCLFVBQVcsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMvQyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sY0FBYyxHQUFHLElBQUksK0JBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVqRSxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNqRCxXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUMsQ0FBQztRQUVILE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBaUIsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDM0UsYUFBYSxFQUFFLGNBQWMsQ0FBQyxPQUFPO1lBQ3JDLFdBQVcsRUFBRSxHQUFHO1NBQ2pCLENBQUMsQ0FBQztRQUVILE1BQU0sY0FBYyxHQUFHLElBQUksZ0NBQWMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDaEUsYUFBYSxFQUFFLGNBQWMsQ0FBQyxPQUFPO1lBQ3JDLFdBQVcsRUFBRSxHQUFHO1NBQ2pCLENBQUMsQ0FBQztRQUVILE1BQU0sYUFBYSxHQUFHLElBQUksOEJBQWEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQzdELGFBQWEsRUFBRSxjQUFjLENBQUMsT0FBTztZQUNyQyxXQUFXLEVBQUUsR0FBRztTQUNqQixDQUFDLENBQUM7UUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLGdDQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ2hFLGFBQWEsRUFBRSxjQUFjLENBQUMsT0FBTztZQUNyQyxXQUFXLEVBQUUsR0FBRztTQUNqQixDQUFDLENBQUM7UUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLGdDQUFjLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ2hFLG1CQUFtQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDL0MsZUFBZSxFQUFFLGNBQWMsQ0FBQyxPQUFPO1lBQ3ZDLGNBQWMsRUFBRSxhQUFhLENBQUMsT0FBTztZQUNyQyxlQUFlLEVBQUUsY0FBYyxDQUFDLE9BQU87WUFDdkMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxVQUFVO1lBQzFDLGNBQWMsRUFBRSxhQUFhLENBQUMsVUFBVTtTQUN6QyxDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQzVDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRztTQUNmLENBQUMsQ0FBQztRQUVILE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZGLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUFsREQsNkJBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwaWd3IGZyb20gXCJAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheVwiO1xuaW1wb3J0IHsgVG9rZW5Db250cnVjdCB9IGZyb20gXCIuL3Rva2VuLWNvbnN0cnVjdFwiO1xuaW1wb3J0IHsgQ2hhcmFjdGVyQ29udHJ1Y3QgfSBmcm9tIFwiLi9jaGFyYWN0ZXItY29uc3RydWN0XCI7XG5pbXBvcnQgeyBJdGVtQ29uc3RydWN0IH0gZnJvbSBcIi4vaXRlbS1jb25zdHJ1Y3RcIjtcbmltcG9ydCB7IFNwZWxsQ29uc3RydWN0IH0gZnJvbSBcIi4vc3BlbGwtY29uc3RydWN0XCI7XG5pbXBvcnQgeyBRdWV1ZUNvbnN0cnVjdCB9IGZyb20gXCIuL3F1ZXVlLWNvbnN0cnVjdFwiO1xuaW1wb3J0IHsgR3VpbGRDb25zdHJ1Y3QgfSBmcm9tIFwiLi9ndWlsZC1jb25zdHJ1Y3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWRTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCB0b2tlbkNvbnN0cnVjdCA9IG5ldyBUb2tlbkNvbnRydWN0KHRoaXMsIFwiVG9rZW5Db25zdHJ1Y3RcIik7XG5cbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ3cuUmVzdEFwaSh0aGlzLCBcImJuZXRHYXRld2F5XCIsIHtcbiAgICAgIHJlc3RBcGlOYW1lOiBcIkJOZXQgR2F0ZXdheSBTZXJ2aWNlXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGFyYWN0ZXJDb25zdHJ1Y3QgPSBuZXcgQ2hhcmFjdGVyQ29udHJ1Y3QodGhpcywgXCJDaGFyYWN0ZXJDb25zdHJ1Y3RcIiwge1xuICAgICAgdG9rZW5Qcm92aWRlcjogdG9rZW5Db25zdHJ1Y3QuaGFuZGxlcixcbiAgICAgIHJlc3RHYXRld2F5OiBhcGksXG4gICAgfSk7XG5cbiAgICBjb25zdCBndWlsZENvbnN0cnVjdCA9IG5ldyBHdWlsZENvbnN0cnVjdCh0aGlzLCBcIkd1aWxkQ29uc3RydWN0XCIsIHtcbiAgICAgIHRva2VuUHJvdmlkZXI6IHRva2VuQ29uc3RydWN0LmhhbmRsZXIsXG4gICAgICByZXN0R2F0ZXdheTogYXBpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaXRlbUNvbnN0cnVjdCA9IG5ldyBJdGVtQ29uc3RydWN0KHRoaXMsIFwiSXRlbUNvbnN0cnVjdFwiLCB7XG4gICAgICB0b2tlblByb3ZpZGVyOiB0b2tlbkNvbnN0cnVjdC5oYW5kbGVyLFxuICAgICAgcmVzdEdhdGV3YXk6IGFwaSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHNwZWxsQ29uc3RydWN0ID0gbmV3IFNwZWxsQ29uc3RydWN0KHRoaXMsIFwiU3BlbGxDb25zdHJ1Y3RcIiwge1xuICAgICAgdG9rZW5Qcm92aWRlcjogdG9rZW5Db25zdHJ1Y3QuaGFuZGxlcixcbiAgICAgIHJlc3RHYXRld2F5OiBhcGksXG4gICAgfSk7XG5cbiAgICBjb25zdCBxdWV1ZUNvbnN0cnVjdCA9IG5ldyBRdWV1ZUNvbnN0cnVjdCh0aGlzLCBcIlF1ZXVlQ29uc3RydWN0XCIsIHtcbiAgICAgIGNoYXJhY3RlcldvcmtlckZ1bmM6IGNoYXJhY3RlckNvbnN0cnVjdC5oYW5kbGVyLFxuICAgICAgZ3VpbGRXb3JrZXJGdW5jOiBndWlsZENvbnN0cnVjdC5oYW5kbGVyLFxuICAgICAgaXRlbVdvcmtlckZ1bmM6IGl0ZW1Db25zdHJ1Y3QuaGFuZGxlcixcbiAgICAgIHNwZWxsV29ya2VyRnVuYzogc3BlbGxDb25zdHJ1Y3QuaGFuZGxlcixcbiAgICAgIHNwZWxsQ2FjaGVUYWJsZTogc3BlbGxDb25zdHJ1Y3QuY2FjaGVUYWJsZSxcbiAgICAgIGl0ZW1DYWNoZVRhYmxlOiBpdGVtQ29uc3RydWN0LmNhY2hlVGFibGUsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcIkFwaUdhdGV3YXlFbmRwb2ludFwiLCB7XG4gICAgICB2YWx1ZTogYXBpLnVybCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHF1ZXVlID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoXCJxdWV1ZVwiKTtcbiAgICBjb25zdCBxdWV1ZUluc2VydEludGVncmF0aW9uID0gbmV3IGFwaWd3LkxhbWJkYUludGVncmF0aW9uKHF1ZXVlQ29uc3RydWN0LnF1ZXVlSW5zZXJ0KTtcbiAgICBjb25zdCBxdWV1ZUxvb2t1cEludGVncmF0aW9uID0gbmV3IGFwaWd3LkxhbWJkYUludGVncmF0aW9uKHF1ZXVlQ29uc3RydWN0LnF1ZXVlTG9va3VwKTtcblxuICAgIHF1ZXVlLmFkZE1ldGhvZChcIlBPU1RcIiwgcXVldWVJbnNlcnRJbnRlZ3JhdGlvbik7XG4gICAgcXVldWUuYWRkTWV0aG9kKFwiR0VUXCIsIHF1ZXVlTG9va3VwSW50ZWdyYXRpb24pO1xuICB9XG59XG4iXX0=