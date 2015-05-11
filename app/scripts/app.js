window.onload = function () {
    Data.loadData("JSON/famousPainters.json").then(function (painters) {
        console.log(painters);
        var renderer = new Rendering.Renderer();
        renderer.renderPainterSelect(painters);
        var painterSelect = document.getElementById("PainterSelect");
        painterSelect.onchange = function () {
            renderer.renderPainter(painters.filter(function (painter) { return painter.name === painterSelect.value; })[0]);
        };
    });
};
