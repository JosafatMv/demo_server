const db = require('./db/connection');
const axios = require('axios');

const createPet = () => {
	const pets = [
		{
			name: 'Firulais',
			type: 'Perro',
			breed: 'Pitbull',
		},
		{
			name: 'Mishi',
			type: 'Gato',
			breed: 'Siames',
		},
		{
			name: 'Lassie',
			type: 'Perro',
			breed: 'Collie',
		},
		{
			name: 'Garfield',
			type: 'Gato',
			breed: 'Persa',
		},
		{
			name: 'Scooby',
			type: 'Perro',
			breed: 'Gran Danes',
		},
		{
			name: 'Tom',
			type: 'Gato',
			breed: 'Egipcio',
		},
		{
			name: 'Pluto',
			type: 'Perro',
			breed: 'Dalmata',
		},
		{
			name: 'Silvestre',
			type: 'Gato',
			breed: 'Angora',
		},
		{
			name: 'Rex',
			type: 'Perro',
			breed: 'Pastor Aleman',
		},
		{
			name: 'Felix',
			type: 'Gato',
			breed: 'Bengala',
		},
		{
			name: 'Spike',
			type: 'Perro',
			breed: 'Bulldog',
		},
		{
			name: 'Whiskers',
			type: 'Gato',
			breed: 'Ragdoll',
		},
		{
			name: 'Max',
			type: 'Perro',
			breed: 'Husky',
		},
		{
			name: 'Luna',
			type: 'Gato',
			breed: 'Siberiano',
		},
		{
			name: 'Rocky',
			type: 'Perro',
			breed: 'Boxer',
		},
		{
			name: 'Milo',
			type: 'Gato',
            breed: 'Siberiano'
		},
	];

	const sql = `SELECT id FROM clients ORDER BY id`;

	db.query(sql, (err, result) => {
		if (err) throw err;

		const randomId = Math.floor(Math.random() * result.length);
		const randomPetIndex = Math.floor(Math.random() * pets.length);

		const pet = pets[randomPetIndex];

		const sql = `INSERT INTO pets (name, type, breed, owner_id) VALUES ('${pet.name}', '${pet.type}', '${pet.breed}', ${randomId})`;
		db.query(sql, (err, result) => {
			if (err) throw err;
			console.log('Mascota creada!');
		});
	});
};

setInterval(createPet, 5000);
