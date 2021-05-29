"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = require("aws-sdk");
exports.handler = async (event = {}) => {
    var _a, _b;
    console.log('Request', event);
    const { region } = event;
    const dynamo = new aws_sdk_1.DynamoDB();
    const item = await dynamo
        .getItem({
        TableName: (_a = process.env.TOKEN_TABLE_NAME) !== null && _a !== void 0 ? _a : '',
        Key: { region: { S: region.toLowerCase() } },
    })
        .promise();
    return (_b = item.Item) === null || _b === void 0 ? void 0 : _b.api_token.S;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUM7QUFFdEIsUUFBQSxPQUFPLEdBQUcsS0FBSyxFQUFFLFFBQWEsRUFBRSxFQUFnQixFQUFFOztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRXpCLE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQVEsRUFBRSxDQUFDO0lBRTlCLE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTTtTQUN0QixPQUFPLENBQUM7UUFDUCxTQUFTLFFBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsbUNBQUksRUFBRTtRQUM3QyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUU7S0FDN0MsQ0FBQztTQUNELE9BQU8sRUFBRSxDQUFDO0lBRWIsYUFBTyxJQUFJLENBQUMsSUFBSSwwQ0FBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSAnYXdzLXNkayc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnkgPSB7fSk6IFByb21pc2U8YW55PiA9PiB7XG4gIGNvbnNvbGUubG9nKCdSZXF1ZXN0JywgZXZlbnQpO1xuICBjb25zdCB7IHJlZ2lvbiB9ID0gZXZlbnQ7XG5cbiAgY29uc3QgZHluYW1vID0gbmV3IER5bmFtb0RCKCk7XG5cbiAgY29uc3QgaXRlbSA9IGF3YWl0IGR5bmFtb1xuICAgIC5nZXRJdGVtKHtcbiAgICAgIFRhYmxlTmFtZTogcHJvY2Vzcy5lbnYuVE9LRU5fVEFCTEVfTkFNRSA/PyAnJyxcbiAgICAgIEtleTogeyByZWdpb246IHsgUzogcmVnaW9uLnRvTG93ZXJDYXNlKCkgfSB9LFxuICAgIH0pXG4gICAgLnByb21pc2UoKTtcblxuICByZXR1cm4gaXRlbS5JdGVtPy5hcGlfdG9rZW4uUztcbn07XG4iXX0=