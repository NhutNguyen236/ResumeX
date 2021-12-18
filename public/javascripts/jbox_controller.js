$(document).ready(function () {
    new jBox("Tooltip", {
        attach: ".tooltip",
        getContent: "data-content",
        onInit: function () {
            // Add click events to the attached elements
            $.each(
                this.attachedElements,
                function (index, el) {
                    $(el).on(
                        "click",
                        function () {
                            $("#demo-state-container").html(
                                "You clicked " +
                                    this.source.attr("data-content") +
                                    "!"
                            );
                        }.bind(this)
                    );
                }.bind(this)
            );
        },
        onOpen: function () {
            // The active attached element is saved in this.source as a jQuery element
            var source = this.source;

            // We need to remove the hover-active class from all attached elements
            // because the onClose function does not trigger when we reopen right away
            $.each(this.attachedElements, function (index, el) {
                $(el).removeClass("hover-active").html("Hover me!");
            });
            this.source.addClass("hover-active").html("Now click me!");
        },
        onClose: function () {
            this.source.removeClass("hover-active").html("Hover me!");
        },
    });
});