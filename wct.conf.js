module.exports = {
  plugins: {
  	local: {
  		browsers: ['chrome', 'safari']
  	},
    sauce: {
      username: 'hourliert',
      accessKey: '033d2a88-73e4-470f-ac0b-db2c726ee4c3',
      browsers: [
		  {
		    "browserName": "internet explorer",
		    "platform":    "Windows 8.1",
		    "version":     "11"
		  },
		  {
		    "browserName": "internet explorer",
		    "platform":    "Windows 7",
		    "version":     "10"
		  },

		  {
		    "browserName": "chrome",
		    "platform":    "Linux",
		    "version":     ""
		  },

		  {
		    "browserName": "firefox",
		    "platform":    "Windows 8.1",
		    "version":     ""
		  },

		  {
		    "browserName": "safari",
		    "platform":    "OS X 10.10",
		    "version":     "8"
		  }
	  ]
    },
  },
};