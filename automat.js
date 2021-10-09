let [amount, drink] = process.argv.slice(2);

amount = amount.split("=");
amount = amount[1];

drink = drink.split("=");
drink = drink[1];

if (drink === "coffe") {
    drink = "Kawę";
} else if (drink === "juice") {
    drink = "Sok";
};

const information = () => {
    console.log(`Przygotowuję ${drink} o pojemności ${amount}ml`);
};

information();