/*global jQuery, $*/

$(() => {
    "use strict";
    console.log("Script is loading!");

    $('.close-btn').on("click", e => e.target.parentElement.remove());

    // Attach listeners
    $('#submitItemBtn').on("click", function (e) {
        e.preventDefault();

        const lastItem = document.querySelector(".list-group-item:last-child");
        const index = lastItem !== null ? parseInt(lastItem.id.charAt(4), 10) : 1;
        const li = document.createElement("li");
        li.className = "list-group-item";

        const cb = document.createElement("input");
        const id = "todo" + index;

        cb.type = "checkbox";
        cb.className = "todoCheckbox";
        cb.id = id;

        li.appendChild(cb);

        const l = document.createElement("label");
        const t = document.getElementById("itemText").value;
        const ltn = document.createTextNode(t);

        l.setAttribute("for", id);
        l.appendChild(ltn);
        li.appendChild(l);

        const clsBtn = document.createElement("input");

        clsBtn.type = "button";
        clsBtn.value = "close";
        clsBtn.className = "close-btn";

        $(clsBtn).on("click", e => e.target.parentElement.remove());

        li.appendChild(clsBtn);

        document.getElementById("itemList").appendChild(li)
    });

    $('#reorderTasksBtn').on("click", function () {
        event.preventDefault();
        $('#itemList li input[type="checkbox"]').each(function () {
            if ($(this).is(":checked")) {
                $('#itemList').prepend($(this).parent());
            }
        });
    });

    $('#clearFinishedTasks').on("click", e => {
        e.preventDefault();

        $('#itemList li input[type="checkbox"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parent().remove();
            }
        });
    });

    /**
     * Using fetch API to retrieve the tasks from server.
     */
    function getListItem(task) {
        const checkBox = `<input type="checkbox" class="todoCheckbox" id="todo${task.id}" ${task.done ? "checked" : ""} />`;
        const label = `<label for="todo${task.id}">${task.text}</label>`;
        const closeBtn = `<input type="button" value="Close" class="close-btn" />`;
        const li = `<li class="list-group-item">\n${checkBox}\n${label}\n${closeBtn}\n</li>\n`;

        return li;
    }

    function getListItems(tasks) {
        const reducer = (a, c) => a + getListItem(c);
        return tasks.reduce(reducer, "");
    }

    fetch("http://localhost:3000/tasks")
        .then(res => res.json())
        .then(body => document.getElementById("itemList").innerHTML = getListItems(body));


    console.log("Script has loaded!");
});
