CREATE TABLE menu_categories(
	categoryId SERIAL PRIMARY KEY,
	title TEXT,
	description TEXT
);

INSERT INTO menu_categories VALUES (DEFAULT, 'Pizza', 'Traditional Italian pizza made with love from our professional pizza baker Claudio. All pizzas are prepared in a traditional stone oven.');
INSERT INTO menu_categories VALUES (DEFAULT, 'Pasta', 'All pasta is 100% hand-made. This is the reason why we are opened only at night. All over the day, we prepare fresh pasta!');
INSERT INTO menu_categories VALUES (DEFAULT, 'Weekly Specials', 'Explore new dishes and promotions every week!');

CREATE TABLE menu_items(
    itemId SERIAL PRIMARY KEY,
	title TEXT,
	description TEXT,
    price MONEY,
	category TEXT,
	allergens TEXT,
	status BOOLEAN
);

INSERT INTO menu_items VALUES(1, 'Pizza Margherita', 'Everyone knows and loves it – pizza margherita is a universally praised pizza for a reason. Originating in Naples, the margherita pizza has an interesting history supposedly rooted in a visit by Queen Margherita to Naples. The iconic pizza margherita is also known for representing the colours of the Italian flag: red tomato sauce, white mozzarella, and green basil. The combination of these ingredients creates a delicious pizza which has withstood the test of time', 6.80, '1, 3', 'A, B, C', TRUE);
INSERT INTO menu_items VALUES(2, 'Marinara', 'Like the margherita pizza, pizza marinara also originated in Naples. This simple pizza is topped with plain marinara sauce, oregano and garlic. Essentially, it is very similar to the margherita pizza but lacks the cheese and basil. Apparently, back in the 1700s and 1800s, pizza marinara was popular with poor sailors and made on their ships as the ingredients used to make it were easily preserved.', 7.80, '1', 'A, B, C, D, E, F', TRUE);
INSERT INTO menu_items VALUES(3, 'PIZZA PUGLIESE', 'Originating in the Italian region of Apulia, pizza pugliese is generally topped with tomato, onion and mozzarella. However, there are many different variations of the pizza pugliese with some versions using oregano, capers and olives. Some recipes call for different cheeses to be used, such as mozzarella, provolone and pecorino and some even suggest that the tomato sauce be omitted completely. <br>Basically, you can mix and match the aforementioned ingredients to suit your own tastes and create your own perfect pizza pugliese.', 7.80, '1', 'A, B, C, D, E, F', TRUE);
INSERT INTO menu_items VALUES(4, 'PIZZA CAPRICCIOSA', 'The pizza capricciosa is one of the most iconic Italian pizzas and can be found in pretty much every pizzeria in Italy. Named for looking ‘capricious’, the abundantly rich pizza capricciosa is generally made up of ham, artichokes, mushrooms and black olives. As with many Italian pizzas, different regions and territories have taken the basic recipe and modified it to make it their own. For example, in Sicily, some prepare the pizza capricciosa with boiled eggs and, to the north, many prepare it with bits of sausage cut into rings.', 8.80, '1', 'A, B, C, D, E', TRUE);
INSERT INTO menu_items VALUES(5, 'PIZZA PROSCIUTTO CRUDO E RUCOLA', 'Though it can obviously be enjoyed at any time of the year the prosciutto crudo e rucola pizza is a summertime favourite thanks to its fresh flavours. Made with prosciutto, rocket and your choice of cheese (some of our favourites include parmesan, mozzarella and fior di latte), pizza prosciutto crudo e rucola is a dinner party favourite for being easy to make and universally loved.', 10.80, '1, 3', 'A, B, C, D, E, F, G, H', TRUE);
INSERT INTO menu_items VALUES(6, 'Spaghetti Carbonara', 'Spaghetti with pancetta, pecorino, parmesan and eggs.', 9.80, '2, 3', 'A, B, C, D, E, F, G', TRUE);
INSERT INTO menu_items VALUES(7, 'Lasagne al Forno Classico', 'Classical lasagne with ground meet sauce', 7.80, '2', 'A, B, C, D, E, F', TRUE);
INSERT INTO menu_items VALUES(8, 'Vesuvio al Ragù di Salsiccia', 'Vesuvio is a short pasta named for the famous volcano of the same name in Campania. The twists and turns of this short pasta make it perfect for catching the chunky bits of tomato and sausage in this Neapolitan-style ragù.', 10.80, '2', 'A, B, C, D, E, F', TRUE);
INSERT INTO menu_items VALUES(9, 'Bucatini all`Amatriciana', 'Named for the town of Amatrice, located about an hour northeast of Roma, this simple dish combines sweet and tangy tomato sauce with rich guanciale (cured pork jowl) and sharp Pecorino Romano DOP cheese, with a spicy kick from peperoncini, or dried chili flakes. The best part? The hollow bucatini make each bite extra saucy.', 10.80, '2', 'A, B, C, D, E', TRUE);
INSERT INTO menu_items VALUES(10, 'Spaghetti alle Vongole', 'Briny clams, white wine, garlic, and peperoncino create a light yet intensely flavorful sauce in this classic Neapolitan spaghetti dish. Look for the freshest clams possible (check with our fishmongers at your local Eataly for a recommendation), and high-quality, bronze-extruded pasta – the coarse texture will help the sauce cling to each strand.', 10.80, '2, 3', 'A, B, C, D, E, F, G, H', TRUE);


-- EXTENSION TABLES:

CREATE TABLE allergens(
	allergenId INT PRIMARY KEY,
	title TEXT,
	description TEXT
);

CREATE TABLE menu_item_categories(
	itemId INT,
	categoryId TEXT
);

CREATE TABLE menu_item_allergens(
	itemId INT,
	allergenId TEXT
);