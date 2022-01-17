(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{1582:function(e,t,a){"use strict";a.r(t);var n=a(26),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"general-guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-guidelines"}},[e._v("#")]),e._v(" General Guidelines")]),e._v(" "),a("p",[e._v("Please make sure that everything works correctly and that no unnecessary code gets added. It is important to follow the following guidelines:")]),e._v(" "),a("h2",{attrs:{id:"do-not-change-incoming-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-not-change-incoming-data"}},[e._v("#")]),e._v(" Do not change incoming data")]),e._v(" "),a("p",[e._v("Never change the incoming data a node receives (which can be queried with "),a("code",[e._v("this.getInputData()")]),e._v(") as it gets shared by all nodes. If data has to get added, changed or deleted it has to be cloned and the new data returned. If that is not done, sibling nodes which execute after the current one will operate on the altered data and would process different data than they were supposed to.\nIt is however not needed to always clone all the data. If a node for, example only, changes only the binary data but not the JSON data, a new item can be created which reuses the reference to the JSON item.")]),e._v(" "),a("p",[e._v("An example can be seen in the code of the "),a("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/ReadBinaryFile.node.ts#L69-L83",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReadBinaryFile-Node"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"write-nodes-in-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-nodes-in-typescript"}},[e._v("#")]),e._v(" Write nodes in TypeScript")]),e._v(" "),a("p",[e._v("All code of n8n is written in TypeScript and hence, the nodes should also be written in TypeScript. That makes development easier, faster, and avoids at least some bugs.")]),e._v(" "),a("h2",{attrs:{id:"use-the-built-in-request-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-built-in-request-library"}},[e._v("#")]),e._v(" Use the built in request library")]),e._v(" "),a("p",[e._v("Some third-party services have their own libraries on npm which make it easier to create an integration. It can be quite tempting to use them. The problem with those is that you add another dependency and not only one, you add but also all the dependencies of the dependencies. This means more and more code gets added, has to get loaded, can introduce security vulnerabilities, bugs, and so on. So please use the built-in module which can be used like this:")]),e._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("helpers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("httpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("The full documentation and migration instructions from the deprecated "),a("code",[e._v("this.helpers.request")]),e._v(" can be found "),a("RouterLink",{attrs:{to:"/nodes/creating-nodes/making-http-requests.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("That is using the npm package "),a("a",{attrs:{href:"https://github.com/request/request-promise-native",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("request-promise-native")]),a("OutboundLink")],1),e._v(" which is the basic npm "),a("code",[e._v("request")]),e._v(" module but with promises. For a full set of "),a("code",[e._v("options")]),e._v(" consider looking at "),a("a",{attrs:{href:"https://github.com/request/request#requestoptions-callback",target:"_blank",rel:"noopener noreferrer"}},[e._v("the underlying "),a("code",[e._v("request")]),e._v(" options documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"reuse-parameter-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reuse-parameter-names"}},[e._v("#")]),e._v(" Reuse parameter names")]),e._v(" "),a("p",[e._v('When a node can perform multiple operations like edit and delete some kind of entity, for both operations, it would need an entity-id. Do not call them "editId" and "deleteId", call them "id". n8n can handle multiple parameters with the same name without a problem as long as only one is visible. To make sure that is the case, the "displayOptions" can be used. By keeping the same name, the value can be kept if a user switches the operation from "edit" to "delete".')]),e._v(" "),a("h2",{attrs:{id:"create-an-additional-fields-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-additional-fields-parameter"}},[e._v("#")]),e._v(" Create an 'Additional Fields' parameter")]),e._v(" "),a("p",[e._v("Some nodes may need a lot of options. Add only the very important ones to the top level and for all others, create an 'Additional Fields' parameter where they can be added if needed. This ensures that the interface stays clean and does not unnecessarily confuse people. A good example of that would be the XML node.")]),e._v(" "),a("h2",{attrs:{id:"follow-existing-parameter-naming-guideline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#follow-existing-parameter-naming-guideline"}},[e._v("#")]),e._v(" Follow existing parameter naming guideline")]),e._v(" "),a("p",[e._v('There is not much of a guideline yet but if your node can do multiple things, call the parameter which sets the behavior either "mode" (like "Merge" and "XML" node) or "operation" like the most other ones. If these operations can be done on different resources (like "User" or "Order) create a "resource" parameter (like "Pipedrive" and "Trello" node).')]),e._v(" "),a("h2",{attrs:{id:"node-icons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-icons"}},[e._v("#")]),e._v(" Node icons")]),e._v(" "),a("p",[e._v("Check existing node icons as a reference when you create own ones. The resolution of an icon should be 60x60px and saved as PNG.")]),e._v(" "),a("h2",{attrs:{id:"node-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-versions"}},[e._v("#")]),e._v(" Node versions")]),e._v(" "),a("p",[e._v("n8n now supports node versioning and it's a blast! You can make changes to existing nodes without breaking the existing behavior by introducing a new version. You can check an example of a versioned node by browsing the "),a("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Mattermost/v1/MattermostV1.node.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mattermost node"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Node versioning in a glimpse:")]),e._v(" "),a("ul",[a("li",[e._v("The main node file should now extend "),a("code",[e._v("NodeVersionedType")]),e._v(" instead of "),a("code",[e._v("INodeType")])]),e._v(" "),a("li",[e._v("The main node file now only contains a base description containing the "),a("code",[e._v("defaultVersion")]),e._v(" (usually the latest) and a list of versions")]),e._v(" "),a("li",[e._v("We recommend you use "),a("code",[e._v("v1")]),e._v(", "),a("code",[e._v("v2")]),e._v(", etc. for version folder names")]),e._v(" "),a("li",[e._v("A new code separation has been created and can be seen in the Mattermost node above. Highlights:\n"),a("ul",[a("li",[a("code",[e._v("actions")]),e._v(" folder with description and implementation of each possible action")]),e._v(" "),a("li",[a("code",[e._v("methods")]),e._v(" is an optional folder with the loading dynamic parameters' functions")]),e._v(" "),a("li",[a("code",[e._v("transport")]),e._v(" is a folder with all the communication implementation")])])])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" For the "),a("code",[e._v("actions")]),e._v(" folder we recommend using "),a("code",[e._v("resources")]),e._v(" and "),a("code",[e._v("operations")]),e._v(" names as subfolders hierarchically. For the implementation an description you can use separate files. Our recommendation is to use "),a("code",[e._v("execute.ts")]),e._v(" and "),a("code",[e._v("description.ts")]),e._v(" as file names. This make browsing through the code a lot easier. This can be simplified for nodes that have a less complicated structure.")])])}),[],!1,null,null,null);t.default=o.exports}}]);