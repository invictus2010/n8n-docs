(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1913:function(t,e,o){"use strict";o.r(e);var s=o(26),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ghost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ghost"}},[t._v("#")]),t._v(" Ghost")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.ghost.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ghost"),s("OutboundLink")],1),t._v(" is an open-source, professional publishing platform built on a Node.js technology stack.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),s("p",[t._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Ghost/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),s("h3",{attrs:{id:"admin-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#admin-api"}},[t._v("#")]),t._v(" Admin API")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Post")]),t._v(" "),s("ul",[s("li",[t._v("Create a post")]),t._v(" "),s("li",[t._v("Delete a post")]),t._v(" "),s("li",[t._v("Get a post")]),t._v(" "),s("li",[t._v("Get all posts")]),t._v(" "),s("li",[t._v("Update a post")])])]),t._v(" "),s("h3",{attrs:{id:"content-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-api"}},[t._v("#")]),t._v(" Content API")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Post")]),t._v(" "),s("ul",[s("li",[t._v("Get a post")]),t._v(" "),s("li",[t._v("Get all posts")])])]),t._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),s("p",[t._v("This workflow allows you to create, update, and get a post in Ghost. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/825",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),s("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following nodes.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("Ghost")])])]),t._v(" "),s("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(934),alt:"A workflow with the Ghost node"}})]),t._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),s("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),s("h3",{attrs:{id:"_2-ghost-node-create-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-ghost-node-create-post"}},[t._v("#")]),t._v(" 2. Ghost node (create: post)")]),t._v(" "),s("p",[t._v("This node will create a new post with the title "),s("code",[t._v("Running ghost with n8n!")]),t._v(". If you want to create a post with a different title, use that instead.")]),t._v(" "),s("ol",[s("li",[t._v("Select 'Admin API' from the "),s("em",[s("strong",[t._v("Source")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("You'll have to enter credentials for the Ghost node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Ghost/"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("li",[t._v("Select 'Create' from the "),s("em",[s("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Enter "),s("code",[t._v("Running ghost with n8n!")]),t._v(" in the "),s("em",[s("strong",[t._v("Title")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Enter the HTML content in the "),s("em",[s("strong",[t._v("Content")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),s("p",[t._v("In the screenshot below, you will notice that the node creates a new post.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(935),alt:"Using the Ghost node to create a new post and publish it"}})]),t._v(" "),s("h3",{attrs:{id:"_3-ghost1-node-update-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ghost1-node-update-post"}},[t._v("#")]),t._v(" 3. Ghost1 node (update: post)")]),t._v(" "),s("p",[t._v("This node will update the status of the post that we created in the previous node. We will change the status of the post to "),s("code",[t._v("Published")]),t._v(".")]),t._v(" "),s("div",{pre:!0},[s("ol",[s("li",[t._v("Select 'Admin API' from the "),s("em",[s("strong",[t._v("Source")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),s("li",[t._v("Select 'Update' from the "),s("em",[s("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("Post ID")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Ghost > Output Data > JSON > id. You can also add the following expression: "),s("code",[t._v('{{$node["Ghost"].json["id"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Add Field")])]),t._v(" and select 'Status'.")]),t._v(" "),s("li",[t._v("Select 'Published' from the "),s("em",[s("strong",[t._v("Status")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[t._v("In the screenshot below, you will notice that the node updates the status of the post that we created in the previous node.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(936),alt:"Using the Ghost node to update the status of a post"}})]),t._v(" "),s("h3",{attrs:{id:"_4-ghost2-node-get-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-ghost2-node-get-post"}},[t._v("#")]),t._v(" 4. Ghost2 node (get: post)")]),t._v(" "),s("p",[t._v("This node returns information about the post that we created using the Ghost node. In this node, we are using the "),s("em",[s("strong",[t._v("Admin API")])]),t._v(". You can also use the "),s("em",[s("strong",[t._v("Content API")])]),t._v(" to get the information about the post.")]),t._v(" "),s("div",{pre:!0},[s("ol",[s("li",[t._v("Select 'Admin API' from the "),s("em",[s("strong",[t._v("Source")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),s("li",[t._v("Select 'ID' from the "),s("em",[s("strong",[t._v("By")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("Identifier")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Ghost > Output Data > JSON > id. You can also add the following expression: "),s("code",[t._v('{{$node["Ghost"].json["id"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[t._v("In the screenshot below, you will notice that the node returns information about the post that we specified.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(937),alt:"Using the Ghost node to get information of a post"}})])])}),[],!1,null,null,null);e.default=n.exports},934:function(t,e,o){t.exports=o.p+"assets/img/workflow.937210cf.png"},935:function(t,e,o){t.exports=o.p+"assets/img/Ghost_node.0ef64efa.png"},936:function(t,e,o){t.exports=o.p+"assets/img/Ghost1_node.85c06317.png"},937:function(t,e,o){t.exports=o.p+"assets/img/Ghost2_node.014ba8aa.png"}}]);