var Rendering;
(function (Rendering) {
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.prototype.renderPainterSelect = function (painters) {
            var painterSelect = document.getElementById("PainterSelect");
            painters.forEach(function (painter) {
                var option = document.createElement("option");
                option.title = painter.name;
                option.text = painter.name;
                painterSelect.appendChild(option);
            });
        };
        Renderer.prototype.renderPainter = function (painter) {
            var bornElement = document.getElementById("Born");
            bornElement.textContent = (painter.born ? painter.born.toLocaleDateString() : "") + (painter.placeOfBirth ? " (" + painter.placeOfBirth + ")" : "");
            var diedElement = document.getElementById("Died");
            diedElement.textContent = (painter.died ? painter.died.toLocaleDateString() : "") + (painter.placeOfDeath ? " (" + painter.placeOfDeath + ")" : "");
            var nationalityElement = document.getElementById("Nationality");
            nationalityElement.textContent = painter.nationality || "";
            var styleElement = document.getElementById("Style");
            styleElement.textContent = painter.style || "";
            var thumbnailsElement = document.getElementById("PaintingThumbnails");
            thumbnailsElement.innerHTML = "";
            painter.examples.forEach(function (painting) {
                var colDiv = document.createElement("div");
                colDiv.classList.add("col-sm-3");
                thumbnailsElement.appendChild(colDiv);
                var thumbnailDiv = document.createElement("div");
                thumbnailDiv.classList.add("thumbnailDiv");
                colDiv.appendChild(thumbnailDiv);
                if (painting.link) {
                    var a = document.createElement("a");
                    a.href = painting.link;
                    thumbnailDiv.appendChild(a);
                    var img = document.createElement("img");
                    img.src = painting.link;
                    img.alt = painting.name;
                    a.appendChild(img);
                }
                var captionDiv = document.createElement("div");
                captionDiv.classList.add("caption");
                thumbnailDiv.appendChild(captionDiv);
                var nameElement = document.createElement("h3");
                nameElement.textContent = painting.name;
                captionDiv.appendChild(nameElement);
                var yearElement = document.createElement("p");
                yearElement.textContent = String(painting.year || "");
                captionDiv.appendChild(yearElement);
            });
        };
        return Renderer;
    })();
    Rendering.Renderer = Renderer;
})(Rendering || (Rendering = {}));
