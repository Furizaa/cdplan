"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const node_fetch_1 = require("node-fetch");
const aws_sdk_1 = require("aws-sdk");
const supported_regions_1 = require("./supported-regions");
exports.handler = async () => {
    var _a, _b;
    const dynamo = new aws_sdk_1.DynamoDB.DocumentClient();
    const sm = new aws_sdk_1.SecretsManager();
    const bnetSecret = await sm.getSecretValue({ SecretId: (_a = process.env.BNET_SECRET_NAME) !== null && _a !== void 0 ? _a : "" }).promise();
    const bnetCredentials = JSON.parse((_b = bnetSecret === null || bnetSecret === void 0 ? void 0 : bnetSecret.SecretString) !== null && _b !== void 0 ? _b : "{}");
    const authString = Buffer.from(`${bnetCredentials.client_id}:${bnetCredentials.client_secret}`).toString("base64");
    const runners = supported_regions_1.default.map(async (regionCode) => {
        var _a;
        const response = await node_fetch_1.default(`https://${regionCode}.battle.net/oauth/token?grant_type=client_credentials`, {
            method: "POST",
            headers: {
                Authorization: `Basic ${authString}`,
            },
        });
        const responseData = await response.json();
        await dynamo
            .update({
            TableName: (_a = process.env.TOKEN_TABLE_NAME) !== null && _a !== void 0 ? _a : "",
            Key: { region: regionCode },
            UpdateExpression: `set api_token = :api_token`,
            ExpressionAttributeValues: {
                ":api_token": responseData.access_token,
            },
        })
            .promise();
        console.log(`Updated token for region ${regionCode}.`);
    });
    await Promise.all(runners);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcm90YXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRva2VuLXJvdGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQStCO0FBQy9CLHFDQUFtRDtBQUNuRCwyREFBbUQ7QUFFdEMsUUFBQSxPQUFPLEdBQUcsS0FBSyxJQUFrQixFQUFFOztJQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDN0MsTUFBTSxFQUFFLEdBQUcsSUFBSSx3QkFBYyxFQUFFLENBQUM7SUFFaEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxRQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLG1DQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkcsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssT0FBQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsWUFBWSxtQ0FBSSxJQUFJLENBQUMsQ0FBQztJQUNyRSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLFNBQVMsSUFBSSxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbkgsTUFBTSxPQUFPLEdBQUcsMkJBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsRUFBRTs7UUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxvQkFBSyxDQUFDLFdBQVcsVUFBVSx1REFBdUQsRUFBRTtZQUN6RyxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxhQUFhLEVBQUUsU0FBUyxVQUFVLEVBQUU7YUFDckM7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLFlBQVksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUzQyxNQUFNLE1BQU07YUFDVCxNQUFNLENBQUM7WUFDTixTQUFTLFFBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsbUNBQUksRUFBRTtZQUM3QyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO1lBQzNCLGdCQUFnQixFQUFFLDRCQUE0QjtZQUM5Qyx5QkFBeUIsRUFBRTtnQkFDekIsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO2FBQ3hDO1NBQ0YsQ0FBQzthQUNELE9BQU8sRUFBRSxDQUFDO1FBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCB7IER5bmFtb0RCLCBTZWNyZXRzTWFuYWdlciB9IGZyb20gXCJhd3Mtc2RrXCI7XG5pbXBvcnQgc3VwcG9ydGVkUmVnaW9ucyBmcm9tIFwiLi9zdXBwb3J0ZWQtcmVnaW9uc1wiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jICgpOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zdCBkeW5hbW8gPSBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbiAgY29uc3Qgc20gPSBuZXcgU2VjcmV0c01hbmFnZXIoKTtcblxuICBjb25zdCBibmV0U2VjcmV0ID0gYXdhaXQgc20uZ2V0U2VjcmV0VmFsdWUoeyBTZWNyZXRJZDogcHJvY2Vzcy5lbnYuQk5FVF9TRUNSRVRfTkFNRSA/PyBcIlwiIH0pLnByb21pc2UoKTtcbiAgY29uc3QgYm5ldENyZWRlbnRpYWxzID0gSlNPTi5wYXJzZShibmV0U2VjcmV0Py5TZWNyZXRTdHJpbmcgPz8gXCJ7fVwiKTtcbiAgY29uc3QgYXV0aFN0cmluZyA9IEJ1ZmZlci5mcm9tKGAke2JuZXRDcmVkZW50aWFscy5jbGllbnRfaWR9OiR7Ym5ldENyZWRlbnRpYWxzLmNsaWVudF9zZWNyZXR9YCkudG9TdHJpbmcoXCJiYXNlNjRcIik7XG5cbiAgY29uc3QgcnVubmVycyA9IHN1cHBvcnRlZFJlZ2lvbnMubWFwKGFzeW5jIChyZWdpb25Db2RlKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly8ke3JlZ2lvbkNvZGV9LmJhdHRsZS5uZXQvb2F1dGgvdG9rZW4/Z3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHthdXRoU3RyaW5nfWAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgYXdhaXQgZHluYW1vXG4gICAgICAudXBkYXRlKHtcbiAgICAgICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5UT0tFTl9UQUJMRV9OQU1FID8/IFwiXCIsXG4gICAgICAgIEtleTogeyByZWdpb246IHJlZ2lvbkNvZGUgfSxcbiAgICAgICAgVXBkYXRlRXhwcmVzc2lvbjogYHNldCBhcGlfdG9rZW4gPSA6YXBpX3Rva2VuYCxcbiAgICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuICAgICAgICAgIFwiOmFwaV90b2tlblwiOiByZXNwb25zZURhdGEuYWNjZXNzX3Rva2VuLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5wcm9taXNlKCk7XG5cbiAgICBjb25zb2xlLmxvZyhgVXBkYXRlZCB0b2tlbiBmb3IgcmVnaW9uICR7cmVnaW9uQ29kZX0uYCk7XG4gIH0pO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKHJ1bm5lcnMpO1xufTtcbiJdfQ==