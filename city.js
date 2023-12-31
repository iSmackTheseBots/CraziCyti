function refreshAP(){
	if(apMenu.classList.contains('hidden')) return;
	apMenu.innerHTML = ``;
	let apTitle = document.createElement('h1');
	apMenu.appendChild(apTitle)
	apTitle.innerText = `${player.city.name} Airlines`;
	for (const [key, value] of Object.entries(cities)) {
		if(value.id == player.city.id) {
			}else{
		for (const [key1, value1] of Object.entries(player.city.canGo)) {
			if(value1 == value.id){
				let container = document.createElement('div');
				container.classList.add('flyCont')
				apMenu.appendChild(container)
				let cityName = document.createElement('h2');
				cityName.innerText = `${value.name}`
				container.appendChild(cityName)
				let flyCost = document.createElement('p');
				flyCost.innerText = `$${value.flyPrice.toLocaleString()}`
				flyCost.classList.add('flyCost')
				container.appendChild(flyCost)
				let flyButton = document.createElement('button');
				flyButton.innerText = `Go!`
				flyButton.classList.add('flyButton')
				container.appendChild(flyButton)
				flyButton.addEventListener('click', () => {
					fly(value)
				})
			}else{}}}}
}
function fly(city){
	cost = city.flyPrice
	if(player.money < cost){
		showToast(`You need $${cost - player.money} more`,1250)
		return
	}
	if(city == player.city){
		showToast(`You nare already in ${city.name} more`,1250)
		return
	}
	
	player.money -= cost
	player.city = city;
	updateStats();
}

let cities = {
	home: {
		name:'Crazi Citi',
		
		weapons: {
			ars:ars.home,
			handguns:handguns.home,
			snipers:snipers.home,
			shotguns:shotguns.home,
			melees:melees.home,
		},
		armours:armours.home,
		tools:tools.home,
		consumables:consumables.home,
		flyPrice:100,
		id: 0,
		canGo: [1,3,4,8,9]
	},
	lasVegas: {
		name:'Las Vegas',
		
		weapons: {
			ars:ars.lasVegas,
			handguns:handguns.lasVegas,
			snipers:snipers.lasVegas,
			shotguns:shotguns.lasVegas,
			melees:melees.lasVegas,
		},
		armours:armours.lasVegas,
		tools:tools.lasVegas,
		consumables:consumables.lasVegas,
		flyPrice:200,
		id: 1,
		canGo: [0,3,4,8],
	},
	rome: {
		name:'Rome',
		
		weapons: {
			ars:ars.rome,
			handguns:handguns.rome,
			snipers:snipers.rome,
			shotguns:shotguns.rome,
			melees:melees.rome,
		},
		armours:armours.rome,
		tools:tools.rome,
		consumables:consumables.rome,
		flyPrice:1000,
		id: 2,
		canGo: [5,7,9,10],
	},
	ny: {
		name:'New York',
		
		weapons: {
			ars:ars.ny,
			handguns:handguns.ny,
			snipers:snipers.ny,
			shotguns:shotguns.ny,
			melees:melees.ny,
		},
		armours:armours.ny,
		tools:tools.ny,
		consumables:consumables.ny,
		flyPrice:500,
		id:3,
		canGo: [0,1,8]
	},
	bj: {
		name:'Beijing',
		
		weapons: {
			ars:ars.bj,
			handguns:handguns.bj,
			snipers:snipers.bj,
			shotguns:shotguns.bj,
			melees:melees.bj,
		},
		armours:armours.bj,
		tools:tools.bj,
		consumables:consumables.bj,
		flyPrice:300,
		id:4,
		canGo: [0,1,5,6,10],
	},
	rio: {
		name:'Rio',
		
		weapons: {
			ars:ars.rio,
			handguns:handguns.rio,
			snipers:snipers.rio,
			shotguns:shotguns.rio,
			melees:melees.rio,
		},
		armours:armours.rio,
		tools:tools.rio,
		consumables:consumables.rio,
		flyPrice:1500,
		id:5,
		canGo: [2,4,6],
	},
	sn: {
		name:'Sydney',
		
		weapons: {
			ars:ars.sn,
			handguns:handguns.sn,
			snipers:snipers.sn,
			shotguns:shotguns.sn,
			melees:melees.sn,
		},
		armours:armours.sn,
		tools:tools.sn,
		consumables:consumables.sn,
		flyPrice:1500,
		id:6,
		canGo: [4,5,7,8],
	},
	paris: {
		name:'Paris',
		
		weapons: {
			ars:ars.paris,
			handguns:handguns.paris,
			snipers:snipers.paris,
			shotguns:shotguns.paris,
			melees:melees.paris,
		},
		armours:armours.paris,
		tools:tools.paris,
		consumables:consumables.paris,
		flyPrice:1500,
		id:7,
		canGo: [2,6,9,10],
	},
	tk: {
		name:'Tokyo',
		
		weapons: {
			ars:ars.tk,
			handguns:handguns.tk,
			snipers:snipers.tk,
			shotguns:shotguns.tk,
			melees:melees.tk,
		},
		armours:armours.tk,
		tools:tools.tk,
		consumables:consumables.tk,
		flyPrice:400,
		id:8,
		canGo: [0,1,3,6],
	},
	db: {
		name:'Dubai',
		
		weapons: {
			ars:ars.db,
			handguns:handguns.db,
			snipers:snipers.db,
			shotguns:shotguns.db,
			melees:melees.db,
		},
		armours:armours.db,
		tools:tools.db,
		consumables:consumables.db,
		flyPrice:1000,
		id:9,
		canGo: [0,2,7,10],
	},
	london: {
		name:'London',
		
		weapons: {
			ars:ars.london,
			handguns:handguns.london,
			snipers:snipers.london,
			shotguns:shotguns.london,
			melees:melees.london,
		},
		armours:armours.london,
		tools:tools.london,
		consumables:consumables.london,
		flyPrice:1500,
		id:10,
		canGo: [2,4,7,9],
	},  
};