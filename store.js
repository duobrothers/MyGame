let playerCoins = 200;
let hasWeaponLicense = false;

document.getElementById('buy-weapon').addEventListener('click', function() {
    if (playerCoins >= 100) {
        playerCoins -= 100;

        // Load and add weapon to player in 3D scene
        loader.load('models/weapon_model.glb', function(gltf) {
            const weapon = gltf.scene;
            player.add(weapon); // Attach weapon to player
            weapon.position.set(0, 0, 0); // Adjust weapon position relative to the player
            weapons.push(weapon); // Add to weapon array
        });

        savePlayerData();
        updateUI();
        alert('You bought a weapon!');
    } else {
        alert('Not enough coins!');
    }
});

document.getElementById('buy-license').addEventListener('click', function() {
    if (confirm('This will cost real money. Proceed?')) {
        hasWeaponLicense = true;
        savePlayerData();
        alert('You bought a weapon license!');
    }
});

function savePlayerData() {
    // Code to save player data (e.g., to local storage or a server)
}

function updateUI() {
    document.getElementById('balance').innerText = `Coins: ${playerCoins}`;
}