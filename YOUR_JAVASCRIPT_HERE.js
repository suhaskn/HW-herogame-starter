const hero = {
    name: 'Batman',
    heroic: true,
    health: 10,
    inventory: [],
    weapon: {
        type: 'Sword',
        damage: 2
    }  
}

function rest(hero) {

    if(hero.health === 10)
    {
        alert('Health is already 10');
    }
    else
    {
        hero.health = 10;
    }

    return hero;  
}

function pickUpItem(hero, weaponLike) {
    
    hero.inventory.push(weaponLike);

}

function equipWeapon(hero) {

    if(hero.inventory.length)
    {
        hero.weapon = hero.inventory[0];
    }
  
}

function resetHealth() {
    
    hero.health = 10;
    displayDetails();

}


function displayDetails() {

    document.getElementById('name').innerText = `${hero.name}`;
    document.getElementById('weapon').innerText = `${hero.weapon.type}`;
    document.getElementById('health').innerText = `${hero.health}`;
    document.getElementById('damage').innerText = `${hero.weapon.damage}`;

}

function changeHero() {

    hero.name = document.getElementById('yourhero').value;
    displayDetails();

}