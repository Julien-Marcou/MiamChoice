export const places = {
	'types': [
		{
			'key': 'restaurant',
			'value': 'Restaurant'
		},
		{
			'key': 'fast',
			'value': 'Fast Food'
		},
		{
			'key': 'truck',
			'value': 'Food Truck'
		},
		{
			'key': 'sandwich',
			'value': 'Sandwicherie'
		},
		{
			'key': 'bistrot',
			'value': 'Bistrot'
		},
		{
			'key': 'brasserie',
			'value': 'Brasserie'
		},
		{
			'key': 'commercial',
			'value': 'Centre Commercial'
		}
	],
	'options': [
		{
			'key': 'place',
			'value': 'Sur Place'
		},
		{
			'key': 'emporte',
			'value': 'À Emporter'
		}
	],
	'days': [
		{
			'key': 'lundi',
			'value': 'Lundi'
		},
		{
			'key': 'mardi',
			'value': 'Mardi'
		},
		{
			'key': 'mercredi',
			'value': 'Mercredi'
		},
		{
			'key': 'jeudi',
			'value': 'jeudi'
		},
		{
			'key': 'vendredi',
			'value': 'Vendredi'
		},
		{
			'key': 'samedi',
			'value': 'Samedi'
		},
		{
			'key': 'dimanche',
			'value': 'Dimanche'
		}
	],
	'places': [
		{
			'id': 'niji',
			'name': 'Cafet\' Niji',
			'latitude': 48.114966,
			'longitude': -1.617723,
			'description': 'J\'ai ramené ma bouffe !',
			'distance-to-niji': 0,
			'type': null,
			'keywords': [],
			'options': [],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'macaron',
			'name': 'Douceur Macaron',
			'latitude': 48.114028,
			'longitude': -1.619043,
			'description': 'Boulangerie juste en façe de Niji',
			'distance-to-niji': 150,
			'type': 'sandwich',
			'keywords': ['macaron', 'sandwich', 'salade'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'mcdo',
			'name': 'McDonald\'s',
			'latitude': 48.113591,
			'longitude': -1.620065,
			'description': 'McDonald\'s à 2 pas de Niji',
			'distance-to-niji': 250,
			'type': 'fast',
			'keywords': ['mcdo', 'macdo', 'mcdonald', 'burger', 'frite'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'hublais',
			'name': 'La Hublais',
			'latitude': 48.114343,
			'longitude': -1.614422,
			'description': 'Crèperie à 2 pas de Niji',
			'distance-to-niji': 300,
			'type': 'restaurant',
			'keywords': ['hublais', 'crèperie', 'crèpe', 'grill', 'saladerie', 'salade', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'kfc',
			'name': 'KFC',
			'latitude': 48.114381,
			'longitude': -1.622315,
			'description': 'KFC à 2 pas de Niji',
			'distance-to-niji': 450,
			'type': 'fast',
			'keywords': ['kfc', 'burger', 'frite', 'poulet'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'dominos',
			'name': 'Domino\'s Pizza',
			'latitude': 48.114042,
			'longitude': -1.611335,
			'description': 'Pizzaaaaaaa',
			'distance-to-niji': 550,
			'type': 'fast',
			'keywords': ['dominos', 'pizzeria', 'pizza'],
			'options': ['emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'nota-bene',
			'name': 'Nota Bené',
			'latitude': 48.114146,
			'longitude': -1.610694,
			'description': 'Restaurant Grill',
			'distance-to-niji': 600,
			'type': 'restaurant',
			'keywords': ['nota', 'bene', 'pizzeria', 'pizza', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'boucherie',
			'name': 'La Boucherie',
			'latitude': 48.114396,
			'longitude': -1.609688,
			'description': 'Restaurant Grill',
			'distance-to-niji': 700,
			'type': 'restaurant',
			'keywords': ['boucherie', 'grill', 'viande', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'biocoop',
			'name': 'Biocoop',
			'latitude': 48.113604,
			'longitude': -1.607218,
			'description': 'Restaurant bio éco-résponsble',
			'distance-to-niji': 1000,
			'type': 'restaurant',
			'keywords': ['biocop', 'biocoop', 'bio', 'autre'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'ponte-vecchio',
			'name': 'Ponte Vecchio',
			'latitude': 48.116400,
			'longitude': -1.605089,
			'description': 'Pizzeria',
			'distance-to-niji': 1000,
			'type': 'restaurant',
			'keywords': ['ponte', 'vecchio', 'pizzeria', 'pizza', 'pasta', 'pate', 'grill', 'saladerie', 'salade', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'belle-equipe',
			'name': 'La Belle Équipe',
			'latitude': 48.116588,
			'longitude': -1.604850,
			'description': 'Restaurant favoris de David',
			'distance-to-niji': 1100,
			'type': 'restaurant',
			'keywords': ['belle', 'equipe', 'burger', 'frite', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'edgar',
			'name': 'Edgar',
			'latitude': 48.116467,
			'longitude': -1.604653,
			'description': 'Restaurant',
			'distance-to-niji': 1100,
			'type': 'restaurant',
			'keywords': ['edgar', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'ange',
			'name': 'Boulangerie Ange',
			'latitude': 48.107362,
			'longitude': -1.615240,
			'description': 'Boulangerie de qualité',
			'distance-to-niji': 1400,
			'type': 'sandwich',
			'keywords': ['ange', 'sandwich', 'pizza'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'caf',
			'name': 'Cave à Flo',
			'latitude': 48.109055,
			'longitude': -1.614354,
			'description': 'Brasserie conviviale avec terrasse',
			'distance-to-niji': 1500,
			'type': 'brasserie',
			'keywords': ['caf', 'tartine', 'charcuterie', 'fromage', 'bocal', 'bière', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'cosy',
			'name': 'Le Cosy',
			'latitude': 48.114005,
			'longitude': -1.599620,
			'description': 'Restaurant Grill',
			'distance-to-niji': 2000,
			'type': 'restaurant',
			'keywords': ['cosy', 'pizzeria', 'pizza', 'grill', 'burger', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'buffalo',
			'name': 'Buffalo',
			'latitude': 48.112896,
			'longitude': -1.587836,
			'description': 'Restaurant Grill',
			'distance-to-niji': 2400,
			'type': 'restaurant',
			'keywords': ['buffalo', 'grill', 'viande', 'autre'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'quick',
			'name': 'Quick',
			'latitude': 48.112294,
			'longitude': -1.588694,
			'description': 'Quick à côté du Carrefour',
			'distance-to-niji': 2400,
			'type': 'fast',
			'keywords': ['quick', 'burger', 'frite'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'carrefour',
			'name': 'Carrefour',
			'latitude': 48.112650,
			'longitude': -1.590921,
			'description': 'Centre Commercial Carrefour',
			'distance-to-niji': 2400,
			'type': 'commercial',
			'keywords': ['carrefour', 'sandwich', 'kebab', 'pizza', 'autre'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'maurice',
			'name': 'Maurice',
			'latitude': 48.135439,
			'longitude': -1.625412,
			'description': 'Burgers à emporter',
			'distance-to-niji': 3000,
			'type': 'fast',
			'keywords': ['maurice', 'burger', 'frite', 'viande'],
			'options': ['emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'longchamps',
			'name': 'Longs Champs',
			'latitude': 48.130503,
			'longitude': -1.633456,
			'description': 'Centre Commercial Intermarché',
			'distance-to-niji': 3000,
			'type': 'commercial',
			'keywords': ['longchamps', 'longschamps', 'sandwich', 'autre'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'cot-boeuf',
			'name': 'Cot\' et Boeuf',
			'latitude': 48.132626,
			'longitude': -1.634019,
			'description': 'Restaurant Grill',
			'distance-to-niji': 3100,
			'type': 'restaurant',
			'keywords': ['cot', 'boeuf', 'grill', 'viande', 'pizza'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'v-and-b',
			'name': 'Food Truck V and B',
			'latitude': 48.130205,
			'longitude': -1.639790,
			'description': 'Food Truck & Brasserie',
			'distance-to-niji': 3500,
			'type': 'truck',
			'keywords': ['v&b', 'burger', 'frite', 'bière', 'vin'],
			'options': ['place', 'emporte'],
			'opening-days': ['mercredi']
		},
		{
			'id': 'le-wok',
			'name': 'Le Wok Restaurant',
			'latitude': 48.130679,
			'longitude': -1.639447,
			'description': 'Restaurant asiatique',
			'distance-to-niji': 3500,
			'type': 'restaurant',
			'keywords': ['asiatique', 'thai', 'sushis', 'nems', 'raviolis', 'Bô Boune', 'woks'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'le-cafe-de-paris',
			'name': 'Le Café de Paris',
			'latitude': 48.114260,
			'longitude': -1.601806,
			'description': 'Bon bistrot, esprit convivial, prix abordable',
			'distance-to-niji': 1300,
			'type': 'bistrot',
			'keywords': ['cuisine traditionnelle'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'la-favola',
			'name': 'La Favola',
			'latitude': 48.108302,
			'longitude': -1.612603,
			'description': 'Pizzeria',
			'distance-to-niji': 1500,
			'type': 'restaurant',
			'keywords': ['pizza', 'grill'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'la-ptite-flambee',
			'name': 'La P\'tite Flambée',
			'latitude': 48.105357,
			'longitude': -1.628327,
			'description': 'Pizzeria - Grill - Burger - Crêpe',
			'distance-to-niji': 2200,
			'type': 'restaurant',
			'keywords': ['pizza', 'grill', 'burger'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'chez-laurette',
			'name': 'Chez Laurette',
			'latitude': 48.101055,
			'longitude': -1.632555,
			'description': 'Bistrot / Resto, très bonne cuisine, service au top',
			'distance-to-niji': 3000,
			'type': 'restaurant',
			'keywords': ['cuisine traditionnelle'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'chouet',
			'name': 'Boulangerie Chouët',
			'latitude': 48.114482,
			'longitude': -1.602665,
			'description': 'Patisseries de qualité !',
			'distance-to-niji': 1200,
			'type': 'sandwich',
			'keywords': ['boulangerie', 'sandwich', 'dessert'],
			'options': ['emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'cap-o-saveurs',
			'name': 'Cap ô Saveurs alias L\'Ibis',
			'latitude': 48.101055,
			'longitude': -1.632555,
			'description': 'L\'indémodable Ibis, presque une seconde cantine de Niji',
			'distance-to-niji': 400,
			'type': 'restaurant',
			'keywords': ['cuisine traditionnelle', 'viande', 'poisson', 'buffet'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'le-tournebride',
			'name': 'Le Tournebride / Tournebide',
			'latitude': 48.113937,
			'longitude': -1.636385,
			'description': 'Idéal bistrot pour un vendredi midi ou une journée difficile...',
			'distance-to-niji': 1600,
			'type': 'bistrot',
			'keywords': ['cuisine traditionnelle'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'la-victoire',
			'name': 'Restaurant La Victoire',
			'latitude': 48.145769,
			'longitude': -1.607299,
			'description': 'Routier, esprit convivial, vin illimité, très bon plat, entrée en mode buffet',
			'distance-to-niji': 4500,
			'type': 'restaurant',
			'keywords': ['cuisine traditionnelle', 'buffet', 'vin'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'soleil-kebab',
			'name': 'Soleil kébab',
			'latitude': 48.117719,
			'longitude': -1.609021,
			'description': 'Bon Kébab à Cesson',
			'distance-to-niji': 1100,
			'type': 'fast',
			'keywords': ['kebab', 'frite'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'class-croute',
			'name': 'Class\'croute',
			'latitude': 48.107734,
			'longitude': -1.612251,
			'description': 'Sandwich et salade top, un des fournisseurs des réunions de site',
			'distance-to-niji': 1500,
			'type': 'sandwich',
			'keywords': ['sandwich', 'salade'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'la-table-d-hippolyte',
			'name': 'La table d\'hippolyte',
			'latitude': 48.099473,
			'longitude': -1.614823,
			'description': 'Restaurant gourmand',
			'distance-to-niji': 3100,
			'type': 'restaurant',
			'keywords': ['cuisine traditionnelle'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		}
	]
};
