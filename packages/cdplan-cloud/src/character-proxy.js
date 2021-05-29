"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = require("aws-sdk");
const node_fetch_1 = require("node-fetch");
exports.handler = async (event) => {
    var _a, _b;
    console.log('Character Proxy Request', event);
    const lambda = new aws_sdk_1.Lambda();
    const { region, name, realm } = event;
    const tokenResponse = await lambda
        .invoke({
        FunctionName: (_a = process.env.TOKEN_FUNCTION_NAME) !== null && _a !== void 0 ? _a : '',
        Payload: JSON.stringify({ ...event }),
    })
        .promise();
    const bearer = JSON.parse((_b = tokenResponse === null || tokenResponse === void 0 ? void 0 : tokenResponse.Payload) !== null && _b !== void 0 ? _b : '');
    const characterPromise = node_fetch_1.default(`https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}`, {
        headers: { authorization: `Bearer ${bearer}`, 'battlenet-namespace': `profile-${region}` },
    });
    const equipmentPromise = node_fetch_1.default(`https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/equipment`, { headers: { authorization: `Bearer ${bearer}`, 'battlenet-namespace': `profile-${region}` } });
    const mediaPromise = node_fetch_1.default(`https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/character-media`, { headers: { authorization: `Bearer ${bearer}`, 'battlenet-namespace': `profile-${region}` } });
    const specPromise = node_fetch_1.default(`https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name}/specializations`, { headers: { authorization: `Bearer ${bearer}`, 'battlenet-namespace': `profile-${region}` } });
    const [characterResponse, equipmentResponse, mediaResponse, specResponse] = await Promise.all([
        characterPromise,
        equipmentPromise,
        mediaPromise,
        specPromise,
    ]);
    if (characterResponse.status !== 200) {
        return {
            data: null,
            error: { code: characterResponse.status, text: await characterResponse.text() },
        };
    }
    if (equipmentResponse.status !== 200) {
        return {
            data: null,
            error: { code: equipmentResponse.status, text: await equipmentResponse.text() },
        };
    }
    if (mediaResponse.status !== 200) {
        return {
            data: null,
            error: { code: mediaResponse.status, text: await mediaResponse.text() },
        };
    }
    if (specResponse.status !== 200) {
        return {
            data: null,
            error: { code: specResponse.status, text: await specResponse.text() },
        };
    }
    const characterJson = await characterResponse.json();
    const equipmentJson = await equipmentResponse.json();
    const mediaJson = await mediaResponse.json();
    const specJson = await specResponse.json();
    return {
        data: { character: characterJson, equipment: equipmentJson, media: mediaJson, spec: specJson },
        error: null,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLXByb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhcmFjdGVyLXByb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpQztBQUNqQywyQ0FBK0I7QUFHbEIsUUFBQSxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQXdDLEVBQWdCLEVBQUU7O0lBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7SUFFNUIsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRXRDLE1BQU0sYUFBYSxHQUFHLE1BQU0sTUFBTTtTQUMvQixNQUFNLENBQUM7UUFDTixZQUFZLFFBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsbUNBQUksRUFBRTtRQUNuRCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7S0FDdEMsQ0FBQztTQUNELE9BQU8sRUFBRSxDQUFDO0lBRWIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssT0FBRSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsT0FBa0IsbUNBQUksRUFBRSxDQUFDLENBQUM7SUFFcEUsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBSyxDQUFDLFdBQVcsTUFBTSwyQ0FBMkMsS0FBSyxJQUFJLElBQUksRUFBRSxFQUFFO1FBQzFHLE9BQU8sRUFBRSxFQUFFLGFBQWEsRUFBRSxVQUFVLE1BQU0sRUFBRSxFQUFFLHFCQUFxQixFQUFFLFdBQVcsTUFBTSxFQUFFLEVBQUU7S0FDM0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBSyxDQUM1QixXQUFXLE1BQU0sMkNBQTJDLEtBQUssSUFBSSxJQUFJLFlBQVksRUFDckYsRUFBRSxPQUFPLEVBQUUsRUFBRSxhQUFhLEVBQUUsVUFBVSxNQUFNLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FDL0YsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLG9CQUFLLENBQ3hCLFdBQVcsTUFBTSwyQ0FBMkMsS0FBSyxJQUFJLElBQUksa0JBQWtCLEVBQzNGLEVBQUUsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLFVBQVUsTUFBTSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQy9GLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRyxvQkFBSyxDQUN2QixXQUFXLE1BQU0sMkNBQTJDLEtBQUssSUFBSSxJQUFJLGtCQUFrQixFQUMzRixFQUFFLE9BQU8sRUFBRSxFQUFFLGFBQWEsRUFBRSxVQUFVLE1BQU0sRUFBRSxFQUFFLHFCQUFxQixFQUFFLFdBQVcsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUMvRixDQUFDO0lBRUYsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDNUYsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osV0FBVztLQUNaLENBQUMsQ0FBQztJQUVILElBQUksaUJBQWlCLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUNwQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFO1NBQ2hGLENBQUM7S0FDSDtJQUVELElBQUksaUJBQWlCLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUNwQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDLElBQUksRUFBRSxFQUFFO1NBQ2hGLENBQUM7S0FDSDtJQUVELElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDaEMsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFO1NBQ3hFLENBQUM7S0FDSDtJQUVELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDL0IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFO1NBQ3RFLENBQUM7S0FDSDtJQUVELE1BQU0sYUFBYSxHQUFHLE1BQU0saUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckQsTUFBTSxhQUFhLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyRCxNQUFNLFNBQVMsR0FBRyxNQUFNLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QyxNQUFNLFFBQVEsR0FBRyxNQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUUzQyxPQUFPO1FBQ0wsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtRQUM5RixLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW1iZGEgfSBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCB7IFF1ZXVlUGF5bG9hZEluQ2hhcmFjdGVyIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBRdWV1ZVBheWxvYWRJbkNoYXJhY3RlclsncGFyYW1zJ10pOiBQcm9taXNlPGFueT4gPT4ge1xuICBjb25zb2xlLmxvZygnQ2hhcmFjdGVyIFByb3h5IFJlcXVlc3QnLCBldmVudCk7XG5cbiAgY29uc3QgbGFtYmRhID0gbmV3IExhbWJkYSgpO1xuXG4gIGNvbnN0IHsgcmVnaW9uLCBuYW1lLCByZWFsbSB9ID0gZXZlbnQ7XG5cbiAgY29uc3QgdG9rZW5SZXNwb25zZSA9IGF3YWl0IGxhbWJkYVxuICAgIC5pbnZva2Uoe1xuICAgICAgRnVuY3Rpb25OYW1lOiBwcm9jZXNzLmVudi5UT0tFTl9GVU5DVElPTl9OQU1FID8/ICcnLFxuICAgICAgUGF5bG9hZDogSlNPTi5zdHJpbmdpZnkoeyAuLi5ldmVudCB9KSxcbiAgICB9KVxuICAgIC5wcm9taXNlKCk7XG5cbiAgY29uc3QgYmVhcmVyID0gSlNPTi5wYXJzZSgodG9rZW5SZXNwb25zZT8uUGF5bG9hZCBhcyBzdHJpbmcpID8/ICcnKTtcblxuICBjb25zdCBjaGFyYWN0ZXJQcm9taXNlID0gZmV0Y2goYGh0dHBzOi8vJHtyZWdpb259LmFwaS5ibGl6emFyZC5jb20vcHJvZmlsZS93b3cvY2hhcmFjdGVyLyR7cmVhbG19LyR7bmFtZX1gLCB7XG4gICAgaGVhZGVyczogeyBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YmVhcmVyfWAsICdiYXR0bGVuZXQtbmFtZXNwYWNlJzogYHByb2ZpbGUtJHtyZWdpb259YCB9LFxuICB9KTtcblxuICBjb25zdCBlcXVpcG1lbnRQcm9taXNlID0gZmV0Y2goXG4gICAgYGh0dHBzOi8vJHtyZWdpb259LmFwaS5ibGl6emFyZC5jb20vcHJvZmlsZS93b3cvY2hhcmFjdGVyLyR7cmVhbG19LyR7bmFtZX0vZXF1aXBtZW50YCxcbiAgICB7IGhlYWRlcnM6IHsgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2JlYXJlcn1gLCAnYmF0dGxlbmV0LW5hbWVzcGFjZSc6IGBwcm9maWxlLSR7cmVnaW9ufWAgfSB9LFxuICApO1xuXG4gIGNvbnN0IG1lZGlhUHJvbWlzZSA9IGZldGNoKFxuICAgIGBodHRwczovLyR7cmVnaW9ufS5hcGkuYmxpenphcmQuY29tL3Byb2ZpbGUvd293L2NoYXJhY3Rlci8ke3JlYWxtfS8ke25hbWV9L2NoYXJhY3Rlci1tZWRpYWAsXG4gICAgeyBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtiZWFyZXJ9YCwgJ2JhdHRsZW5ldC1uYW1lc3BhY2UnOiBgcHJvZmlsZS0ke3JlZ2lvbn1gIH0gfSxcbiAgKTtcblxuICBjb25zdCBzcGVjUHJvbWlzZSA9IGZldGNoKFxuICAgIGBodHRwczovLyR7cmVnaW9ufS5hcGkuYmxpenphcmQuY29tL3Byb2ZpbGUvd293L2NoYXJhY3Rlci8ke3JlYWxtfS8ke25hbWV9L3NwZWNpYWxpemF0aW9uc2AsXG4gICAgeyBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtiZWFyZXJ9YCwgJ2JhdHRsZW5ldC1uYW1lc3BhY2UnOiBgcHJvZmlsZS0ke3JlZ2lvbn1gIH0gfSxcbiAgKTtcblxuICBjb25zdCBbY2hhcmFjdGVyUmVzcG9uc2UsIGVxdWlwbWVudFJlc3BvbnNlLCBtZWRpYVJlc3BvbnNlLCBzcGVjUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGNoYXJhY3RlclByb21pc2UsXG4gICAgZXF1aXBtZW50UHJvbWlzZSxcbiAgICBtZWRpYVByb21pc2UsXG4gICAgc3BlY1Byb21pc2UsXG4gIF0pO1xuXG4gIGlmIChjaGFyYWN0ZXJSZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZXJyb3I6IHsgY29kZTogY2hhcmFjdGVyUmVzcG9uc2Uuc3RhdHVzLCB0ZXh0OiBhd2FpdCBjaGFyYWN0ZXJSZXNwb25zZS50ZXh0KCkgfSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKGVxdWlwbWVudFJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBlcnJvcjogeyBjb2RlOiBlcXVpcG1lbnRSZXNwb25zZS5zdGF0dXMsIHRleHQ6IGF3YWl0IGVxdWlwbWVudFJlc3BvbnNlLnRleHQoKSB9LFxuICAgIH07XG4gIH1cblxuICBpZiAobWVkaWFSZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBudWxsLFxuICAgICAgZXJyb3I6IHsgY29kZTogbWVkaWFSZXNwb25zZS5zdGF0dXMsIHRleHQ6IGF3YWl0IG1lZGlhUmVzcG9uc2UudGV4dCgpIH0sXG4gICAgfTtcbiAgfVxuXG4gIGlmIChzcGVjUmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIGVycm9yOiB7IGNvZGU6IHNwZWNSZXNwb25zZS5zdGF0dXMsIHRleHQ6IGF3YWl0IHNwZWNSZXNwb25zZS50ZXh0KCkgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgY2hhcmFjdGVySnNvbiA9IGF3YWl0IGNoYXJhY3RlclJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgZXF1aXBtZW50SnNvbiA9IGF3YWl0IGVxdWlwbWVudFJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgbWVkaWFKc29uID0gYXdhaXQgbWVkaWFSZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHNwZWNKc29uID0gYXdhaXQgc3BlY1Jlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IHsgY2hhcmFjdGVyOiBjaGFyYWN0ZXJKc29uLCBlcXVpcG1lbnQ6IGVxdWlwbWVudEpzb24sIG1lZGlhOiBtZWRpYUpzb24sIHNwZWM6IHNwZWNKc29uIH0sXG4gICAgZXJyb3I6IG51bGwsXG4gIH07XG59O1xuIl19