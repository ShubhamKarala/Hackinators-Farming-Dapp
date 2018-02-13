module.exports = {
  build: {
    "index.html": "index.html",
	
    "app.js": [
	  "javascripts/jQuery.js",
      "javascripts/app.js"
	  
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  	rpc: {
    	host: "127.0.0.1",
    	port: 8545,
			network_id: "*"
  	}
};
