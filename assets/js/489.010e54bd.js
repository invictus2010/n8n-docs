(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{1562:function(n,t,e){"use strict";e.r(t);var a=e(26),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[n._v("#")]),n._v(" Installation")]),n._v(" "),e("p",[n._v("There are a few different ways to set up n8n depending on how you intend to use it:")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#n8n-cloud"}},[n._v("n8n.cloud")]),n._v(" - Hosted solution, no need to install anything")]),n._v(" "),e("li",[e("a",{attrs:{href:"#desktop-app"}},[n._v("Desktop app")]),n._v(" - The fastest way to try n8n on your computer")]),n._v(" "),e("li",[e("a",{attrs:{href:"#self-hosting-n8n"}},[n._v("Self-host")]),n._v(" - Recommended method for production or customized usecases\n"),e("ul",[e("li",[e("a",{attrs:{href:"#npm"}},[n._v("npm")])]),n._v(" "),e("li",[e("a",{attrs:{href:"#docker"}},[n._v("Docker")])]),n._v(" "),e("li",[e("a",{attrs:{href:"#n8n-with-tunnel"}},[n._v("n8n with tunnel")])])])])]),n._v(" "),e("h2",{attrs:{id:"n8n-cloud"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#n8n-cloud"}},[n._v("#")]),n._v(" n8n.cloud")]),n._v(" "),e("p",[n._v("n8n.cloud is our hosted solution. In addition to all the features of n8n, it provides added benefits such as:")]),n._v(" "),e("ul",[e("li",[n._v("No technical set up or maintenance for your n8n instance")]),n._v(" "),e("li",[n._v("24/7 uptime monitoring")]),n._v(" "),e("li",[n._v("Managed OAuth for authentication")]),n._v(" "),e("li",[n._v("Easy upgrades to the newest n8n versions")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://www.n8n.cloud/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Sign up for n8n.cloud"),e("OutboundLink")],1)]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("💡 Keep in mind")]),n._v(" "),e("p",[n._v("The IP address of n8n.cloud is "),e("code",[n._v("20.79.72.105")]),n._v(" and the NAT address is "),e("code",[n._v("20.79.72.36")]),n._v(", however this may change in the future.")])]),n._v(" "),e("h2",{attrs:{id:"desktop-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#desktop-app"}},[n._v("#")]),n._v(" Desktop app")]),n._v(" "),e("p",[n._v("The n8n desktop app is the fastest way to try n8n on Windows or Mac computers (support for Linux is coming soon). Download the app from the link below:")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://downloads.n8n.io/file/n8n-downloads/n8n-win.zip",target:"_blank",rel:"noopener noreferrer"}},[n._v("Download for Windows"),e("OutboundLink")],1),n._v(" "),e("a",{attrs:{href:"https://downloads.n8n.io/file/n8n-downloads/n8n-mac.zip",target:"_blank",rel:"noopener noreferrer"}},[n._v("Download for macOS"),e("OutboundLink")],1)]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("💡 Keep in mind")]),n._v(" "),e("p",[n._v("If you have already installed n8n locally via "),e("code",[n._v("npm")]),n._v(", the desktop app will connect to the existing "),e("code",[n._v("sqlite")]),n._v(" database.")])]),n._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("💡 Tunnel credentials")]),n._v(" "),e("p",[n._v("The n8n desktop creates a tunnel in order to receive webhooks from external services such as Google. This tunnel is protected using a randomly generated combination of username and password. If you are asked for a login to your personal tunnel URL, you can find the generated credentials in the "),e("code",[n._v("n8n-desktop.env")]),n._v(" file in the "),e("code",[n._v(".n8n")]),n._v(" folder of your home directory.")])]),n._v(" "),e("h2",{attrs:{id:"self-hosting-n8n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#self-hosting-n8n"}},[n._v("#")]),n._v(" Self-hosting n8n")]),n._v(" "),e("p",[n._v("You can install via Docker or npm.")]),n._v(" "),e("h3",{attrs:{id:"npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[n._v("#")]),n._v(" npm")]),n._v(" "),e("p",[n._v("You can try n8n without installing it using "),e("RouterLink",{attrs:{to:"/reference/glossary.html#npx"}},[n._v("npx")]),n._v(".")],1),n._v(" "),e("p",[n._v("From the terminal, run:")]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("npx n8n\n")])])]),e("p",[n._v("This command will download everything that is needed to start n8n. You can then access n8n and start building workflows by opening "),e("a",{attrs:{href:"http://localhost:5678",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://localhost:5678"),e("OutboundLink")],1),n._v(".")]),n._v(" "),e("p",[n._v("If you want to install n8n globally, use "),e("RouterLink",{attrs:{to:"/reference/glossary.html#npm"}},[n._v("npm")]),n._v(":")],1),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" n8n -g\n")])])]),e("p",[n._v("After the installation, start n8n by running:")]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("n8n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# or")]),n._v("\nn8n start\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[n._v("💡 Keep in mind")]),n._v(" "),e("p",[n._v("Windows users remember to change into the "),e("code",[n._v(".n8n")]),n._v(" directory of your Home folder ("),e("code",[n._v("~/.n8n")]),n._v(") before running "),e("code",[n._v("n8n start")]),n._v(".")])]),n._v(" "),e("h3",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[n._v("#")]),n._v(" Docker")]),n._v(" "),e("p",[n._v("See the "),e("RouterLink",{attrs:{to:"/getting-started/installation/docker-quickstart.html"}},[n._v("Docker installation")]),n._v(" page for running n8n using Docker.")],1),n._v(" "),e("p",[n._v("n8n also offers a Docker image for Raspberry Pi: "),e("code",[n._v("n8nio/n8n:latest-rpi")]),n._v(".")]),n._v(" "),e("h3",{attrs:{id:"n8n-with-tunnel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#n8n-with-tunnel"}},[n._v("#")]),n._v(" n8n with tunnel")]),n._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[n._v("WARNING")]),n._v(" "),e("p",[n._v("This is only meant for local development and testing. It should not be used in production.")])]),n._v(" "),e("p",[n._v("To be able to use webhooks for trigger nodes of external services like GitHub, n8n has to be reachable from the web. To make that easy, n8n has a special "),e("a",{attrs:{href:"https://github.com/localtunnel/localtunnel",target:"_blank",rel:"noopener noreferrer"}},[n._v("tunnel service"),e("OutboundLink")],1),n._v(" which redirects requests from our servers to your local n8n instance.")]),n._v(" "),e("p",[n._v("If you installed n8n with "),e("strong",[n._v("npm")]),n._v(", start n8n with "),e("code",[n._v("--tunnel")]),n._v(" by running:")]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("n8n start --tunnel\n")])])]),e("p",[n._v("If you are running n8n with "),e("strong",[n._v("Docker")]),n._v(", start n8n with "),e("code",[n._v("--tunnel")]),n._v(" by running:")]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("docker run -it --rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\t--name n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\t-p "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("5678")]),n._v(":5678 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\t-v ~/.n8n:/home/node/.n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\tn8nio/n8n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("\n\tn8n start --tunnel\n")])])]),e("p",[n._v("In case you run into issues with the installation, check out the "),e("RouterLink",{attrs:{to:"/reference/troubleshooting.html"}},[n._v("troubleshooting page")]),n._v(" or ask for help in the "),e("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[n._v("community forum"),e("OutboundLink")],1),n._v(".")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);