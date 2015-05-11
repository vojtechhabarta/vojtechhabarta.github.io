var Data;
(function (Data) {
    function loadData(url) {
        return $.getJSON(url).then(function (data) {
            return array(data.famousPainters).map(function (painter) { return new Painter(painter.name, painter.born && new Date(painter.born), painter.placeOfBirth, painter.died && new Date(painter.died), painter.placeOfDeath, painter.nationality, painter.style, painter.examples && array(painter.examples).map(function (painting) { return typeof painting === "string" ? new Painting(painting, null, null) : new Painting(painting.name, painting.year, painting.link); })); });
        });
    }
    Data.loadData = loadData;
    var Painter = (function () {
        function Painter(name, born, placeOfBirth, died, placeOfDeath, nationality, style, examples) {
            this.name = name;
            this.born = born;
            this.placeOfBirth = placeOfBirth;
            this.died = died;
            this.placeOfDeath = placeOfDeath;
            this.nationality = nationality;
            this.style = style;
            this.examples = examples;
        }
        return Painter;
    })();
    Data.Painter = Painter;
    var Painting = (function () {
        function Painting(name, year, link) {
            this.name = name;
            this.year = year;
            this.link = link;
        }
        return Painting;
    })();
    Data.Painting = Painting;
    function array(array) {
        array.constructor.prototype = Array;
        return array;
    }
})(Data || (Data = {}));
