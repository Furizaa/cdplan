"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = require("aws-sdk");
const node_fetch_1 = require("node-fetch");
exports.handler = async (event) => {
    var _a, _b;
    console.log("Guild Proxy Request", event);
    const lambda = new aws_sdk_1.Lambda();
    const { region, name, realm } = event;
    const tokenResponse = await lambda
        .invoke({
        FunctionName: (_a = process.env.TOKEN_FUNCTION_NAME) !== null && _a !== void 0 ? _a : "",
        Payload: JSON.stringify({ ...event }),
    })
        .promise();
    const bearer = JSON.parse((_b = tokenResponse === null || tokenResponse === void 0 ? void 0 : tokenResponse.Payload) !== null && _b !== void 0 ? _b : "");
    const guildPromise = node_fetch_1.default(`https://${region}.api.blizzard.com/data/wow/guild/${realm}/${name}/roster`, {
        headers: { authorization: `Bearer ${bearer}`, "battlenet-namespace": `profile-${region}` },
    });
    const [guildResponse] = await Promise.all([guildPromise]);
    if (guildResponse.status !== 200) {
        return {
            data: null,
            error: { code: guildResponse.status, text: await guildResponse.text() },
        };
    }
    const guildJson = await guildResponse.json();
    return {
        data: { guild: guildJson },
        error: null,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQtcHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJndWlsZC1wcm94eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBaUM7QUFDakMsMkNBQStCO0FBR2xCLFFBQUEsT0FBTyxHQUFHLEtBQUssRUFBRSxLQUFvQyxFQUFnQixFQUFFOztJQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTFDLE1BQU0sTUFBTSxHQUFHLElBQUksZ0JBQU0sRUFBRSxDQUFDO0lBRTVCLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQztJQUV0QyxNQUFNLGFBQWEsR0FBRyxNQUFNLE1BQU07U0FDL0IsTUFBTSxDQUFDO1FBQ04sWUFBWSxRQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLG1DQUFJLEVBQUU7UUFDbkQsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0tBQ3RDLENBQUM7U0FDRCxPQUFPLEVBQUUsQ0FBQztJQUViLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLE9BQUUsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLE9BQWtCLG1DQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRXBFLE1BQU0sWUFBWSxHQUFHLG9CQUFLLENBQUMsV0FBVyxNQUFNLG9DQUFvQyxLQUFLLElBQUksSUFBSSxTQUFTLEVBQUU7UUFDdEcsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLFVBQVUsTUFBTSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxNQUFNLEVBQUUsRUFBRTtLQUMzRixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUUxRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO1FBQ2hDLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtTQUN4RSxDQUFDO0tBQ0g7SUFFRCxNQUFNLFNBQVMsR0FBRyxNQUFNLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUU3QyxPQUFPO1FBQ0wsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUMxQixLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW1iZGEgfSBmcm9tIFwiYXdzLXNka1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5pbXBvcnQgeyBRdWV1ZVBheWxvYWRJbkd1aWxkIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IFF1ZXVlUGF5bG9hZEluR3VpbGRbXCJwYXJhbXNcIl0pOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zb2xlLmxvZyhcIkd1aWxkIFByb3h5IFJlcXVlc3RcIiwgZXZlbnQpO1xuXG4gIGNvbnN0IGxhbWJkYSA9IG5ldyBMYW1iZGEoKTtcblxuICBjb25zdCB7IHJlZ2lvbiwgbmFtZSwgcmVhbG0gfSA9IGV2ZW50O1xuXG4gIGNvbnN0IHRva2VuUmVzcG9uc2UgPSBhd2FpdCBsYW1iZGFcbiAgICAuaW52b2tlKHtcbiAgICAgIEZ1bmN0aW9uTmFtZTogcHJvY2Vzcy5lbnYuVE9LRU5fRlVOQ1RJT05fTkFNRSA/PyBcIlwiLFxuICAgICAgUGF5bG9hZDogSlNPTi5zdHJpbmdpZnkoeyAuLi5ldmVudCB9KSxcbiAgICB9KVxuICAgIC5wcm9taXNlKCk7XG5cbiAgY29uc3QgYmVhcmVyID0gSlNPTi5wYXJzZSgodG9rZW5SZXNwb25zZT8uUGF5bG9hZCBhcyBzdHJpbmcpID8/IFwiXCIpO1xuXG4gIGNvbnN0IGd1aWxkUHJvbWlzZSA9IGZldGNoKGBodHRwczovLyR7cmVnaW9ufS5hcGkuYmxpenphcmQuY29tL2RhdGEvd293L2d1aWxkLyR7cmVhbG19LyR7bmFtZX0vcm9zdGVyYCwge1xuICAgIGhlYWRlcnM6IHsgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2JlYXJlcn1gLCBcImJhdHRsZW5ldC1uYW1lc3BhY2VcIjogYHByb2ZpbGUtJHtyZWdpb259YCB9LFxuICB9KTtcblxuICBjb25zdCBbZ3VpbGRSZXNwb25zZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbZ3VpbGRQcm9taXNlXSk7XG5cbiAgaWYgKGd1aWxkUmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiB7IGNvZGU6IGd1aWxkUmVzcG9uc2Uuc3RhdHVzLCB0ZXh0OiBhd2FpdCBndWlsZFJlc3BvbnNlLnRleHQoKSB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdCBndWlsZEpzb24gPSBhd2FpdCBndWlsZFJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IHsgZ3VpbGQ6IGd1aWxkSnNvbiB9LFxuICAgIGVycm9yOiBudWxsLFxuICB9O1xufTtcbiJdfQ==