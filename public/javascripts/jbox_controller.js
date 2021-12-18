$(document).ready(function () {
	// tooltip for languages
    new jBox("Mouse", {
		attach: "#languages_editor",
		theme: "TooltipDark",
		content: "Pick your most fluent languages here 😁",
	});

    // certificates tooltip
    new jBox("Mouse", {
		attach: "#certificates",
		theme: "TooltipDark",
		content: "Pick your most favorite certificates here 😁",
	});
    
    // experience tooltip
    new jBox("Mouse", {
        attach: "#experience",
        theme: "TooltipDark",
        content: "Add your work experience here 😁",
    });

    // skills tooltip
    new jBox("Mouse", {
        attach: "#skills",
        theme: "TooltipDark",
        content: "Add your skills here 😁",
    });

    // education tooltip
    new jBox("Mouse", {
        attach: "#education",
        theme: "TooltipDark",
        content: "Add your education here 😁",
    });

    // profile tooltip
    new jBox("Mouse", {
        attach: "#profile",
        theme: "TooltipDark",
        content: "Tell us more about you 🧐",
    });

    // projects tooltip
    new jBox("Mouse", {
        attach: "#project_tooltip",
        theme: "TooltipDark",
        content: "Add your projects here 😁",
    });
});
