function calculateCost() {
    const product = parseFloat(document.getElementById('product').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    document.getElementById('cost').innerHTML = `Стоимость: ${product * quantity} руб.`;
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', calculateCost);
});
