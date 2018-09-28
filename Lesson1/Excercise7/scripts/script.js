/*jslint browser: true, devel: true*/
/*global $*/

$(function () {
    "use strict";

    const baseSize = 30;
    const selectedToppings = [];
    const availableToppings = [];

    let selectedSize = baseSize;

    $("#pizza-size").text(selectedSize);

    $("#pizza-diameter").on("change", function (e) {
        $("#pizza-size").text(e.target.value);
        selectedSize = e.target.valueAsNumber;
    });

    $.getJSON("data/toppings.json", function (data) {
        /** @namespace data.toppings */
        const toppings = data.toppings;

        toppings.forEach(function (t) {
            function dragStartHandler(e) {
                e.originalEvent.stopPropagation();

                e.originalEvent.dataTransfer.setData("text/plain", t.code);
            }

            const topping = $("<span />")
                .attr("id", t.code)
                .addClass("badge badge-primary ")
                .text(t.name)
                .css("cursor", "grab")
                .attr("draggable", "true")
                .on("dragstart", dragStartHandler).on("drop", function (e) {
                    e.preventDefault();
                });
            if (t.default) {
                selectedToppings.push(t);
                $("#added-toppings").append(topping).append(" ");
            } else {
                availableToppings.push(t);
                $("#available-toppings").append(topping).append(" ");
            }
        });
    });

    function addedToppingsDropHandler(e) {
        e.originalEvent.stopPropagation();
        e.originalEvent.preventDefault();

        const id = e.originalEvent.dataTransfer.getData("text/plain");
        const availableIndex = availableToppings.findIndex(function (p) {
            return p.code === id;
        });

        if (availableIndex >= 0) {
            const el = document.getElementById(id);
            $(e.currentTarget).append(el).append(" ");

            selectedToppings.push(availableToppings[availableIndex]);
            availableToppings.splice(availableIndex, 1);
        }
    }

    function availableToppingsDropHandler(e) {
        e.originalEvent.stopPropagation();
        e.originalEvent.preventDefault();

        const id = e.originalEvent.dataTransfer.getData("text/plain");
        const selectedIndex = selectedToppings.findIndex(function (p) {
            return p.code === id;
        });

        if (selectedIndex >= 0) {
            const el = document.getElementById(id);
            $(e.currentTarget).append(el).append(" ");
            availableToppings.push(selectedToppings[selectedIndex]);
            selectedToppings.splice(selectedIndex, 1);
        }
    }

    function dragOverHandler(e) {
        e.originalEvent.preventDefault();
    }

    $("#added-toppings")
        .on("drop", addedToppingsDropHandler)
        .on("dragover", dragOverHandler);

    $("#available-toppings")
        .on("drop", availableToppingsDropHandler)
        .on("dragover", dragOverHandler);

    function checkOutHandler() {
        const basePrice = 40;
        const scalar = Math.pow(selectedSize / baseSize, 2);
        const price = scalar * selectedToppings.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.price;
        }, basePrice);
        const order = {
            price: Math.round(price),
            size: selectedSize,
            toppings: selectedToppings.map(function (p) {
                return p.code;
            })
        };

        console.log(order);

        const message = "Your order has been placed.";

        alert(message);
    }

    $("#check-out-btn").on("click", checkOutHandler);
});