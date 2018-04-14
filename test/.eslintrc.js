module.exports = {
	"env": {
		"mocha": true
	},
	"globals": {
		"sandbox": true,
		"expect": true,
		"sinon": true
	},
	"rules": {
		"arrow-body-style": "off",
		"no-unused-expressions": "off"
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js"],
					"moduleDirectory": [
						"node_modules",
						"src"
					]
			}
		}
	}
}

