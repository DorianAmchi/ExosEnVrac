$(document).ready(function () {
    var windowUrl = window.location.href;
    var pseudo = "";
    var param = false;
    verifyUser();

    function verifyUser() {
        for (var i in windowUrl) {
            if (windowUrl[i] === "?") {
                var param = true;
                var iParam = i;
            }
            if (param && i !== iParam) {
                pseudo += windowUrl[i];
            }
        }

        $.ajax({
            type: "GET",
            url: "http://192.168.1.54:12001/",
            success: function (data) {
                console.log(data);
                affichageChat(user_Is_Connected(data));
            }
        });

        function user_Is_Connected(data) {
            for (var i in data) {
                if (data[i].pseudo === pseudo) {
                    if (data[i].is_Connected === true) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }

        function affichageChat(is_Connected) {
            if (!is_Connected) {
                $("#chat").text("Vous ne vous etes pas identifié. Veuillez réessayer.")
            } else {
                $("#chat")
                    .append(
                        $("<div/>").attr("id", "fenetreChat"))
                    .append(
                        $("<div/>").addClass("input-group mb-3")
                            .append(
                                $("<input/>")
                                    .attr("type", "text")
                                    .attr("id", "message")
                                    .attr("placeholder", "Ecriver votre message")
                                    .addClass("form-control"))
                            .append(
                                $("<button/>")
                                    .addClass("btn btn-outline-secondary")
                                    .attr("type", "button")
                                    .text("Envoyer")
                                    .click(function () { newMessage() })
                            )
                    );

            }
        }
    }
    refreshPage();
    function newMessage() {
        var message = {
            "message": $("#message").val(),
            "pseudo": pseudo
        }
        if (message.message === "") {
            return;
        }
        $.ajax({
            type: "POST",
            url: "http://192.168.1.54:12002/message",
            data: message,
            statusCode: {
                200: function () {
                    refreshPage();
                }
            }
        });
    }




});
function newMessage() {
    var message = {
        "message": $("#message").val(),
        "pseudo": pseudo
    }
    if (message.message === "") {
        return;
    }
    $.ajax({
        type: "POST",
        url: "http://192.168.1.54:12002/message",
        data: message,
        statusCode: {
            200: function () {
                refreshPage();
            }
        }
    });
}

function refreshPage() {
    $("#fenetreChat").empty();
    $.ajax({
        type: "GET",
        url: "http://192.168.1.54:12002",
        success: function (messages) {
            for (var i in messages) {
                $("#fenetreChat")
                    .append(
                        $("<div/>")
                            .append(
                                $("<div/>").addClass("pseudoMessage").text(messages[i].pseudo))
                            .append(
                                $("<div/>").addClass("message").text(messages[i].message))
                    );
            }
        }
    });
}

setInterval("refreshPage()",1000);