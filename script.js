$(function() {
    var vez = 1; // 1 para O, 2 para X
    var vencedor = "";

    function casasIguais(a, b, c) {
        var casaA = $("#casa" + a);
        var casaB = $("#casa" + b);
        var casaC = $("#casa" + c);
        var bgA = casaA.css("background-image");
        var bgB = casaB.css("background-image");
        var bgC = casaC.css("background-image");

        if ((bgA === bgB) && (bgB === bgC) && (bgA !== "none") && (bgA !== "")) {
            if (bgA.indexOf("1.jpg") >= 0) {
                vencedor = "1";
            } else if (bgA.indexOf("2.jpg") >= 0) {
                vencedor = "2";
            }
            return true;
        }
        return false;
    }

    function verificarFimDeJogo() {
        if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)) {
            $("#resultado").html("<h1>O jogador " + vencedor + " venceu!</h1>");
            $(".casa").off("click");
        }
    }

    $(".casa").click(function() {
        var bg = $(this).css("background-image");
        if (bg === "none" || bg === "" || bg.indexOf("1.jpg") === -1 && bg.indexOf("2.jpg") === -1) {
            var fig = "url('" + vez.toString() + ".jpg')";
            $(this).css("background-image", fig);
            vez = (vez === 1 ? 2 : 1);
            verificarFimDeJogo();
        }
    });

    $("#reiniciar").click(function() {
        // Limpar o conteúdo das casas
        $(".casa").css("background-image", "none");

        // Resetar o vencedor
        vencedor = "";

        // Reativar os cliques
        $(".casa").click(function() {
            var bg = $(this).css("background-image");
            if (bg === "none" || bg === "" || bg.indexOf("1.jpg") === -1 && bg.indexOf("2.jpg") === -1) {
                var fig = "url('" + vez.toString() + ".jpg')";
                $(this).css("background-image", fig);
                vez = (vez === 1 ? 2 : 1);
                verificarFimDeJogo();
            }
        });

        // Limpar a mensagem de resultado
        $("#resultado").html("");
    });
});
