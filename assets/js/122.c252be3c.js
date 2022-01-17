(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1241:function(e,t,r){e.exports=r.p+"assets/img/workflow.ec7cb4e8.png"},1242:function(e,t,r){e.exports=r.p+"assets/img/SecurityScorecard_node.975104b5.png"},1243:function(e,t,r){e.exports=r.p+"assets/img/SecurityScorecard1_node.6d839030.png"},1244:function(e,t,r){e.exports=r.p+"assets/img/SecurityScorecard2_node.500c369e.png"},2025:function(e,t,r){"use strict";r.r(t);var o=r(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"securityscorecard"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#securityscorecard"}},[e._v("#")]),e._v(" SecurityScorecard")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://securityscorecard.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("SecurityScorecard"),o("OutboundLink")],1),e._v(" enables organizations to prove and maintain compliance with leading regulations and standards mandates that include PCI, NIST, SOX, GDPR, and many others.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),o("p",[e._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/SecurityScorecard/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),o("Resource",{attrs:{node:"n8n-nodes-base.securityScorecard"}}),e._v(" "),o("h2",{attrs:{id:"example-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),o("p",[e._v("This workflow allows you to generate, retrieve, and download a report using the SecurityScorecard node. You can also find the "),o("a",{attrs:{href:"https://n8n.io/workflows/920",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),o("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),o("li",[o("a",{attrs:{href:""}},[e._v("SecurityScorecard")])])]),e._v(" "),o("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1241),alt:"A workflow with the SecurityScorecard node"}})]),e._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),o("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),o("h3",{attrs:{id:"_2-securityscorecard-node-generate-report"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-securityscorecard-node-generate-report"}},[e._v("#")]),e._v(" 2. SecurityScorecard node (generate: report)")]),e._v(" "),o("p",[e._v("This node will generate a full scorecard report for a company that we specify.")]),e._v(" "),o("ol",[o("li",[e._v("First of all, you'll have to enter credentials for the SecurityScorecard node. You can find out how to do that "),o("RouterLink",{attrs:{to:"/nodes/credentials/SecurityScorecard/"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("Select 'Report' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Generate' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Full Scorecard' from the "),o("em",[o("strong",[e._v("Report")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Enter the domain of the company in the "),o("em",[o("strong",[e._v("Scorecard Identifier")])]),e._v(" field.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node generates a full scorecard report of "),o("code",[e._v("n8n.io")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1242),alt:"Using the SecurityScorecard node to create full scorecard report"}})]),e._v(" "),o("h3",{attrs:{id:"_3-securityscorecard1-node-getall-report"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-securityscorecard1-node-getall-report"}},[e._v("#")]),e._v(" 3. SecurityScorecard1 node (getAll: report)")]),e._v(" "),o("p",[e._v("This node will return a report from SecurityScorecard.")]),e._v(" "),o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Report' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Get All' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("1")]),e._v(" in the "),o("em",[o("strong",[e._v("Limit")])]),e._v(" field. By setting it to one, the node will return a single report.")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),o("p",[e._v("In the screenshot below, you will notice that the node returns a report from SecurityScroecard.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1243),alt:"Using the SecurityScorecard node to get a report"}})]),e._v(" "),o("h3",{attrs:{id:"_4-securityscorecard2-node-download-report"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-securityscorecard2-node-download-report"}},[e._v("#")]),e._v(" 4. SecurityScorecard2 node (download: report)")]),e._v(" "),o("p",[e._v("This node will download the report that got returned by the previous node.")]),e._v(" "),o("div",{pre:!0},[o("ol",[o("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),o("li",[e._v("Select 'Report' from the "),o("em",[o("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Select 'Download' from the "),o("em",[o("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),o("li",[e._v("Click on the gears icon next to the "),o("em",[o("strong",[e._v("Report URL")])]),e._v(" field and click on "),o("em",[o("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),o("li",[e._v("Select the following in the "),o("em",[o("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > download_url. You can also add the following expression: "),o("code",[e._v('{{$json["download_url"]}}')]),e._v(".")]),e._v(" "),o("li",[e._v("Click on "),o("em",[o("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),o("p",[e._v("In the screenshot below, you will notice that the node downloads the report that was returned by the previous node.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1244),alt:"Using the SecurityScorecard node to download a report"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);