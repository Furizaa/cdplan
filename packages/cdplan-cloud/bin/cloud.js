#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-new */
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const cloud_stack_1 = require("../lib/cloud-stack");
const app = new cdk.App();
new cloud_stack_1.default(app, 'CloudStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQkFBMkI7QUFDM0IsdUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxvREFBNEM7QUFFNUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxxQkFBVSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IENsb3VkU3RhY2sgZnJvbSAnLi4vbGliL2Nsb3VkLXN0YWNrJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbm5ldyBDbG91ZFN0YWNrKGFwcCwgJ0Nsb3VkU3RhY2snKTtcbiJdfQ==