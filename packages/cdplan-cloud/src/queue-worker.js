"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = require("aws-sdk");
exports.handler = async (event) => {
    var _a, _b, _c, _d;
    console.log("QueueWorker Request", event);
    const lambda = new aws_sdk_1.Lambda();
    const dynamo = new aws_sdk_1.DynamoDB.DocumentClient();
    const item = await dynamo
        .get({
        TableName: (_a = process.env.QUEUE_TABLE_NAME) !== null && _a !== void 0 ? _a : "",
        Key: { token: `${event.token}` },
    })
        .promise();
    await dynamo
        .delete({
        TableName: (_b = process.env.QUEUE_TABLE_NAME) !== null && _b !== void 0 ? _b : "",
        Key: { token: `${event.token}` },
    })
        .promise();
    if ((_c = item === null || item === void 0 ? void 0 : item.Item) === null || _c === void 0 ? void 0 : _c.payloadIn) {
        const payloadEvent = JSON.parse(item.Item.payloadIn);
        let funcResult;
        if (payloadEvent.type === "character") {
            funcResult = await lambda
                .invoke({
                FunctionName: process.env.FUNCTION_NAME_CHARACTER || "",
                Payload: JSON.stringify(payloadEvent.params),
            })
                .promise();
        }
        if (payloadEvent.type === "guild") {
            funcResult = await lambda
                .invoke({
                FunctionName: process.env.FUNCTION_NAME_GUILD || "",
                Payload: JSON.stringify(payloadEvent.params),
            })
                .promise();
        }
        if (payloadEvent.type === "item") {
            funcResult = await lambda
                .invoke({ FunctionName: process.env.FUNCTION_NAME_ITEM || "", Payload: JSON.stringify(payloadEvent.params) })
                .promise();
        }
        if (payloadEvent.type === "spell") {
            funcResult = await lambda
                .invoke({ FunctionName: process.env.FUNCTION_NAME_SPELL || "", Payload: JSON.stringify(payloadEvent.params) })
                .promise();
        }
        if (funcResult) {
            await dynamo
                .update({
                TableName: (_d = process.env.RESULT_TABLE_NAME) !== null && _d !== void 0 ? _d : "",
                Key: { token: event.token },
                UpdateExpression: `set payloadOut = :payload, createdAt = :createdAt`,
                ExpressionAttributeValues: {
                    ":payload": funcResult.Payload,
                    ":createdAt": Date.now(),
                },
            })
                .promise();
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUtd29ya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVldWUtd29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUEyQztBQUc5QixRQUFBLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBdUIsRUFBZ0IsRUFBRTs7SUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztJQUM1QixNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFN0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNO1NBQ3RCLEdBQUcsQ0FBQztRQUNILFNBQVMsUUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixtQ0FBSSxFQUFFO1FBQzdDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRTtLQUNqQyxDQUFDO1NBQ0QsT0FBTyxFQUFFLENBQUM7SUFFYixNQUFNLE1BQU07U0FDVCxNQUFNLENBQUM7UUFDTixTQUFTLFFBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsbUNBQUksRUFBRTtRQUM3QyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUU7S0FDakMsQ0FBQztTQUNELE9BQU8sRUFBRSxDQUFDO0lBRWIsVUFBSSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSwwQ0FBRSxTQUFTLEVBQUU7UUFDekIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJELElBQUksVUFBVSxDQUFDO1FBQ2YsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUNyQyxVQUFVLEdBQUcsTUFBTSxNQUFNO2lCQUN0QixNQUFNLENBQUM7Z0JBQ04sWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLElBQUksRUFBRTtnQkFDdkQsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzthQUM3QyxDQUFDO2lCQUNELE9BQU8sRUFBRSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2pDLFVBQVUsR0FBRyxNQUFNLE1BQU07aUJBQ3RCLE1BQU0sQ0FBQztnQkFDTixZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxFQUFFO2dCQUNuRCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQzdDLENBQUM7aUJBQ0QsT0FBTyxFQUFFLENBQUM7U0FDZDtRQUNELElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDaEMsVUFBVSxHQUFHLE1BQU0sTUFBTTtpQkFDdEIsTUFBTSxDQUFDLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2lCQUM1RyxPQUFPLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNqQyxVQUFVLEdBQUcsTUFBTSxNQUFNO2lCQUN0QixNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQzdHLE9BQU8sRUFBRSxDQUFDO1NBQ2Q7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLE1BQU0sTUFBTTtpQkFDVCxNQUFNLENBQUM7Z0JBQ04sU0FBUyxRQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLG1DQUFJLEVBQUU7Z0JBQzlDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUMzQixnQkFBZ0IsRUFBRSxtREFBbUQ7Z0JBQ3JFLHlCQUF5QixFQUFFO29CQUN6QixVQUFVLEVBQUUsVUFBVSxDQUFDLE9BQU87b0JBQzlCLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2lCQUN6QjthQUNGLENBQUM7aUJBQ0QsT0FBTyxFQUFFLENBQUM7U0FDZDtLQUNGO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREIsIExhbWJkYSB9IGZyb20gXCJhd3Mtc2RrXCI7XG5pbXBvcnQgeyBRdWV1ZVdvcmtlcklucHV0IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IFF1ZXVlV29ya2VySW5wdXQpOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zb2xlLmxvZyhcIlF1ZXVlV29ya2VyIFJlcXVlc3RcIiwgZXZlbnQpO1xuXG4gIGNvbnN0IGxhbWJkYSA9IG5ldyBMYW1iZGEoKTtcbiAgY29uc3QgZHluYW1vID0gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XG5cbiAgY29uc3QgaXRlbSA9IGF3YWl0IGR5bmFtb1xuICAgIC5nZXQoe1xuICAgICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5RVUVVRV9UQUJMRV9OQU1FID8/IFwiXCIsXG4gICAgICBLZXk6IHsgdG9rZW46IGAke2V2ZW50LnRva2VufWAgfSxcbiAgICB9KVxuICAgIC5wcm9taXNlKCk7XG5cbiAgYXdhaXQgZHluYW1vXG4gICAgLmRlbGV0ZSh7XG4gICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LlFVRVVFX1RBQkxFX05BTUUgPz8gXCJcIixcbiAgICAgIEtleTogeyB0b2tlbjogYCR7ZXZlbnQudG9rZW59YCB9LFxuICAgIH0pXG4gICAgLnByb21pc2UoKTtcblxuICBpZiAoaXRlbT8uSXRlbT8ucGF5bG9hZEluKSB7XG4gICAgY29uc3QgcGF5bG9hZEV2ZW50ID0gSlNPTi5wYXJzZShpdGVtLkl0ZW0ucGF5bG9hZEluKTtcblxuICAgIGxldCBmdW5jUmVzdWx0O1xuICAgIGlmIChwYXlsb2FkRXZlbnQudHlwZSA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgICAgZnVuY1Jlc3VsdCA9IGF3YWl0IGxhbWJkYVxuICAgICAgICAuaW52b2tlKHtcbiAgICAgICAgICBGdW5jdGlvbk5hbWU6IHByb2Nlc3MuZW52LkZVTkNUSU9OX05BTUVfQ0hBUkFDVEVSIHx8IFwiXCIsXG4gICAgICAgICAgUGF5bG9hZDogSlNPTi5zdHJpbmdpZnkocGF5bG9hZEV2ZW50LnBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICAgIC5wcm9taXNlKCk7XG4gICAgfVxuICAgIGlmIChwYXlsb2FkRXZlbnQudHlwZSA9PT0gXCJndWlsZFwiKSB7XG4gICAgICBmdW5jUmVzdWx0ID0gYXdhaXQgbGFtYmRhXG4gICAgICAgIC5pbnZva2Uoe1xuICAgICAgICAgIEZ1bmN0aW9uTmFtZTogcHJvY2Vzcy5lbnYuRlVOQ1RJT05fTkFNRV9HVUlMRCB8fCBcIlwiLFxuICAgICAgICAgIFBheWxvYWQ6IEpTT04uc3RyaW5naWZ5KHBheWxvYWRFdmVudC5wYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgICAucHJvbWlzZSgpO1xuICAgIH1cbiAgICBpZiAocGF5bG9hZEV2ZW50LnR5cGUgPT09IFwiaXRlbVwiKSB7XG4gICAgICBmdW5jUmVzdWx0ID0gYXdhaXQgbGFtYmRhXG4gICAgICAgIC5pbnZva2UoeyBGdW5jdGlvbk5hbWU6IHByb2Nlc3MuZW52LkZVTkNUSU9OX05BTUVfSVRFTSB8fCBcIlwiLCBQYXlsb2FkOiBKU09OLnN0cmluZ2lmeShwYXlsb2FkRXZlbnQucGFyYW1zKSB9KVxuICAgICAgICAucHJvbWlzZSgpO1xuICAgIH1cbiAgICBpZiAocGF5bG9hZEV2ZW50LnR5cGUgPT09IFwic3BlbGxcIikge1xuICAgICAgZnVuY1Jlc3VsdCA9IGF3YWl0IGxhbWJkYVxuICAgICAgICAuaW52b2tlKHsgRnVuY3Rpb25OYW1lOiBwcm9jZXNzLmVudi5GVU5DVElPTl9OQU1FX1NQRUxMIHx8IFwiXCIsIFBheWxvYWQ6IEpTT04uc3RyaW5naWZ5KHBheWxvYWRFdmVudC5wYXJhbXMpIH0pXG4gICAgICAgIC5wcm9taXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGZ1bmNSZXN1bHQpIHtcbiAgICAgIGF3YWl0IGR5bmFtb1xuICAgICAgICAudXBkYXRlKHtcbiAgICAgICAgICBUYWJsZU5hbWU6IHByb2Nlc3MuZW52LlJFU1VMVF9UQUJMRV9OQU1FID8/IFwiXCIsXG4gICAgICAgICAgS2V5OiB7IHRva2VuOiBldmVudC50b2tlbiB9LFxuICAgICAgICAgIFVwZGF0ZUV4cHJlc3Npb246IGBzZXQgcGF5bG9hZE91dCA9IDpwYXlsb2FkLCBjcmVhdGVkQXQgPSA6Y3JlYXRlZEF0YCxcbiAgICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XG4gICAgICAgICAgICBcIjpwYXlsb2FkXCI6IGZ1bmNSZXN1bHQuUGF5bG9hZCxcbiAgICAgICAgICAgIFwiOmNyZWF0ZWRBdFwiOiBEYXRlLm5vdygpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5wcm9taXNlKCk7XG4gICAgfVxuICB9XG59O1xuIl19