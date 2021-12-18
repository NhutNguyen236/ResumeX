/**Languges editor */
const lang = new EditorJS({
	holder: "languages_editor",
	/**
	 * Available Tools list.
	 * Pass Tool's class or Settings object for each Tool you want to use
	 */
	// set min height for editor place
	minHeight: 0,
	tools: {
		header: Header,
		paragraph: {
			class: Paragraph,
			inlineToolbar: true,
		},
		embed: Embed,
		image: SimpleImage,
		list: {
			class: List,
			inlineToolbar: true,
		},
		
	},
	// languages data here
	data:{
		blocks: [
			{
				"type" : "list",
				"data" : {
					"style" : "unordered",
					"items" : [
						"English 🎈",
						"Korean",
						"Thailand"
					]
				}
			},
		]
	}
	// generate languages list
});
