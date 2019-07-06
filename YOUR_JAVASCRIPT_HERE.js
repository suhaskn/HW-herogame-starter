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

}