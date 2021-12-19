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
		Marker: {
			class: Marker,
			shortcut: 'CMD+SHIFT+M',
		},
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

/**Certificate section	*/
const cert = new EditorJS({
	holder: "certificates",
	// set min height for editor place
	minHeight: 0,
	tools: {
		header: Header,
		Marker: {
			class: Marker,
			shortcut: 'CMD+SHIFT+M',
		},
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
				"id" : "",
				"type" : "header",
				"data" : {
					"text" : "Certified for compliance in the work area (2012)",
					"level" : 5,
					"weight": "bold"
				}
			},
			{
				"type": "paragraph",
				"data": {
					"text": "For meeting the expectations of leading the team to work the specified tasks in the labor field."
				}
			},

			{
				"id" : "",
				"type" : "header",
				"data" : {
					"text" : "Certified for compliance in the work area (2012)",
					"level" : 5,
					"weight": "bold"
				}
			},
			{
				"type": "paragraph",
				"data": {
					"text": "For meeting the expectations of leading the team to work the specified tasks in the labor field."
				}
			}, 
			{
				"id" : "",
				"type" : "header",
				"data" : {
					"text" : "Certified for compliance in the work area (2012)",
					"level" : 5,
					"weight": "bold"
				}
			},
			{
				"type": "paragraph",
				"data": {
					"text": "For meeting the expectations of leading the team to work the specified tasks in the labor field."
				}
			}
		]
	}
	// generate languages list
});