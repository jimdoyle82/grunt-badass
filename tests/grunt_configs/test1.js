exports.test = {
	src: '<%= rootDir %>tests/resources/svgs/'
	,dest: "<%= rootDir %>dist/test1/compass-sprite-prep/"
	,options: {
		cssPrefix: "bad" // sprites will take this folder name as part of class name, so keep it short

		// if 'standAlone' is marked as true, files will get copied to this directory
		,standAlonePngDir: "<%= rootDir %>dist/test1/singles/"

		// Default is false. Will add compass sprite snippet to top of scss.
		// Only change this to true if your project uses compass sprites and you want to merge badass icons into the main project sprite.
		,includeCompassSpriteStyles: true

		// ,svgDir: "<%= rootDir %>tmp/test1/myicons-svgs/"
		,stylesOutput: "<%= rootDir %>dist/test1/compass-sprite-prep/icons.scss"
		,items: [
			 { filename: "camera", class: "camera-warm", w: 50, h:44, fillCol: "orange" }
			,{ filename: "camera", class: "camera-cold", w: 50, h:44, fillCol: "blue", standAlone: true }
			,{ filename: "cloud", class: "cloud-down", w: 50, h:41, fillCol: "#999" }
			,{ filename: "code", class: "code-sm-bright", w: 50, h:38, fillCol: "yellow" }
			,{ filename: "code", class: "code-md-bright", w: 60, h:45, fillCol: "yellow" }
			,{ filename: "code", class: "code-lg-bright", w: 80, h:60, fillCol: "yellow" }
		]

		,svgoPlugins: [
			{
				removeUselessStrokeAndFill: true
			}
		]

		// ,clearTmpDir: false
	}
}