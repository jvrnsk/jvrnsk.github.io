window.addEventListener('DOMContentLoaded', function (event) {

    const bd = [
        {
            id: 0,
            name: "Сэндвич Итальянский БМТ",
            cost: 300
        },
        {
            id: 1,
            name: "Сэндвич Альпийский",
            cost: 600
        },
        {
            id: 2,
            name: "Сэндвич Минтай",
            cost: 500
        },
        {
            id: 3,
            name: "Сэндвич Ростбиф",
            cost: 350
        },
        {
            id: 4,
            name: "Сэндвич Курица-Бекон",
            cost: 400
        },
        {
            id: 5,
            name: "Сэндвич Острый Итальянский",
            cost: 450
        },
        {
            id: 6,
            name: "Сэндвич Курица-терияки",
            cost: 550
        },
    ];

    document.querySelector("#button1").onclick = (event) => {

        event.preventDefault();

        const number_of_products = document.getElementsByName("numberfield")[0].value;
        const product_select = document.getElementsByName("selectfield")[0].value;

        if (isValidValue(number_of_products)) {
            let product_cost = bd[product_select].cost;

            document.getElementById("result").innerHTML = "Стоимость Вашего заказа - " + product_cost * Number(number_of_products) + " руб.";
        }
        else {
            alert("Введите правильное количество");
        }
    };

});

function isValidValue(val) {
    return val.match(/^\d+$/) !== null;
}