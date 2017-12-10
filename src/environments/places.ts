export const places = {
	'types': [
		{
			'key': 'restaurant',
			'value': 'Restaurant'
		},
		{
			'key': 'epicerie',
			'value': 'Épicerie'
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
			'keywords': ['macaron', 'boulangerie', 'sandwich', 'salade'],
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
			'keywords': ['hublais', 'crèperie', 'crèpe', 'grill', 'saladerie', 'salade'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'cap-o-saveurs',
			'name': 'Cap ô Saveurs',
			'latitude': 48.114510,
			'longitude': -1.621700,
			'description': 'L\'indémodable Ibis, presque une seconde cantine de Niji',
			'distance-to-niji': 400,
			'type': 'restaurant',
			'keywords': ['cap', 'saveur', 'traditionnel', 'viande', 'poisson', 'buffet'],
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
			'keywords': ['nota', 'bene', 'pizzeria', 'pizza'],
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
			'keywords': ['boucherie', 'grill', 'viande'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'biocoop',
			'name': 'Biocoop',
			'latitude': 48.113604,
			'longitude': -1.607218,
			'description': 'Restaurant-épicerie bio éco-résponsble',
			'distance-to-niji': 1000,
			'type': 'epicerie',
			'keywords': ['biocop', 'biocoop', 'bio', 'épicerie'],
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
			'keywords': ['ponte', 'vecchio', 'pizzeria', 'pizza', 'pasta', 'pate', 'grill', 'saladerie', 'salade'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'cuisine',
			'name': 'Food Truck La Cuisine',
			'latitude': 48.112549,
			'longitude': -1.608843,
			'description': 'Food Truck sur la parking de Jardiland',
			'distance-to-niji': 1100,
			'type': 'truck',
			'keywords': ['cuisine', 'sandwich'],
			'options': ['emporte'],
			'opening-days': ['mercredi']
		},
		{
			'id': 'belle-equipe',
			'name': 'La Belle Équipe',
			'latitude': 48.116588,
			'longitude': -1.604850,
			'description': 'Restaurant favoris de David',
			'distance-to-niji': 1100,
			'type': 'restaurant',
			'keywords': ['belle', 'equipe', 'burger', 'frite'],
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
			'keywords': ['edgar'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'soleil-kebab',
			'name': 'Soleil Kébab',
			'latitude': 48.117719,
			'longitude': -1.609021,
			'description': 'Bon Kébab à Cesson',
			'distance-to-niji': 1100,
			'type': 'fast',
			'keywords': ['soleil', 'kébab', 'kebab', 'frite'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'chouet',
			'name': 'Boulangerie Chouët',
			'latitude': 48.114439,
			'longitude': -1.602738,
			'description': 'Patisseries de qualité !',
			'distance-to-niji': 1200,
			'type': 'sandwich',
			'keywords': ['chouet', 'chouët', 'boulangerie', 'sandwich', 'patisserie'],
			'options': ['emporte'],
			'opening-days': ['mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'cafe-paris',
			'name': 'Le Café de Paris',
			'latitude': 48.114254,
			'longitude': -1.602007,
			'description': 'Bon bistrot, esprit convivial, prix abordable',
			'distance-to-niji': 1300,
			'type': 'bistrot',
			'keywords': ['café', 'paris', 'traditionnel'],
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
			'keywords': ['ange', 'boulangerie', 'sandwich', 'pizza'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'aviateurs',
			'name': 'Les Aviateurs',
			'latitude': 48.107532,
			'longitude': -1.614216,
			'description': 'Restaurant, spécialités au feu de bois',
			'distance-to-niji': 1400,
			'type': 'restaurant',
			'keywords': ['aviateurs', 'pizza', 'burger', 'grill', 'pasta', 'pate', 'feu', 'bois'],
			'options': ['place'],
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
			'keywords': ['caf', 'cave', 'flo', 'tartine', 'charcuterie', 'fromage', 'bocal', 'bière'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'favola',
			'name': 'La Favola',
			'latitude': 48.108302,
			'longitude': -1.612603,
			'description': 'Pizzeria',
			'distance-to-niji': 1500,
			'type': 'restaurant',
			'keywords': ['favola', 'pizza', 'grill'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'class-croute',
			'name': 'Class\'Croute',
			'latitude': 48.107734,
			'longitude': -1.612251,
			'description': 'Sandwich et salade top, un des fournisseurs des réunions de site',
			'distance-to-niji': 1500,
			'type': 'sandwich',
			'keywords': ['class', 'croute', 'sandwich', 'salade'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'hippocampe',
			'name': 'L\'Hippocampe',
			'latitude': 48.119256,
			'longitude': -1.602750,
			'description': 'Petit restaurant de la piscine de Césson.',
			'distance-to-niji': 1500,
			'type': 'restaurant',
			'keywords': ['hippocampe'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'tournebride',
			'name': 'Le Tournebride',
			'latitude': 48.113948,
			'longitude': -1.636839,
			'description': 'Aka le Tournebide, idéal bistrot pour un vendredi midi ou une journée difficile...',
			'distance-to-niji': 1600,
			'type': 'bistrot',
			'keywords': ['tournebride', 'tournebide', 'traditionnel'],
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
			'keywords': ['cosy', 'pizzeria', 'pizza', 'grill', 'burger'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'ptite-flambee',
			'name': 'La P\'tite Flambée',
			'latitude': 48.105357,
			'longitude': -1.628327,
			'description': 'Pizzeria - Grill - Burger - Crêpe',
			'distance-to-niji': 2200,
			'type': 'restaurant',
			'keywords': ['ptite', 'petite', 'flambée', 'pizza', 'grill', 'burger'],
			'options': ['place'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'piment-rouge',
			'name': 'Piment Rouge',
			'latitude': 48.114328,
			'longitude': -1.588607,
			'description': 'Bobun ? Bobun !',
			'distance-to-niji': 2400,
			'type': 'epicerie',
			'keywords': ['piment', 'rouge', 'bobun', 'epicerie'],
			'options': ['emporte'],
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
			'keywords': ['buffalo', 'grill', 'viande'],
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
			'keywords': ['carrefour', 'sandwich', 'kebab', 'pizza'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'whitefields',
			'name': 'WhiteFields Café',
			'latitude': 48.135160,
			'longitude': -1.622208,
			'description': 'Foodcourt à thématique : frenchy, italian, chinese, healthy et un bar',
			'distance-to-niji': 2900,
			'type': 'restaurant',
			'keywords': ['whitefield', 'whitefields', 'café', 'française', 'italienne', 'asiatique', 'healthy'],
			'options': ['place'],
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
			'keywords': ['longchamps', 'longschamps', 'sandwich'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'laurette',
			'name': 'Chez Laurette',
			'latitude': 48.101107,
			'longitude': -1.632770,
			'description': 'Bistrot / Resto, très bonne cuisine, service au top',
			'distance-to-niji': 3000,
			'type': 'restaurant',
			'keywords': ['laurette', 'traditionnel'],
			'options': ['place'],
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
			'id': 'hippolyte',
			'name': 'La table d\'Hippolyte',
			'latitude': 48.099473,
			'longitude': -1.614823,
			'description': 'Restaurant gourmand',
			'distance-to-niji': 3100,
			'type': 'restaurant',
			'keywords': ['hippolyte', 'traditionnel'],
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
			'id': 'wok',
			'name': 'Le Wok Restaurant',
			'latitude': 48.129918,
			'longitude': -1.642752,
			'description': 'Restaurant asiatique',
			'distance-to-niji': 3500,
			'type': 'restaurant',
			'keywords': ['wok', 'asiatique', 'thai', 'sushis', 'nems', 'raviolis', 'woks'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		},
		{
			'id': 'victoire',
			'name': 'Restaurant la Victoire',
			'latitude': 48.145756,
			'longitude': -1.607730,
			'description': 'Routier, esprit convivial, vin illimité, très bon plat, entrée en mode buffet',
			'distance-to-niji': 4500,
			'type': 'restaurant',
			'keywords': ['victoire', 'traditionnel', 'buffet', 'vin'],
			'options': ['place', 'emporte'],
			'opening-days': ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi']
		}
	]
};
