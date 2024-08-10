// weapons.js

const weapons = {};

// Load weapon models
function loadWeapons(scene) {
    const loader = new THREE.GLTFLoader();

    // Load a pistol model
    loader.load('models/weapons/pistol.glb', function(gltf) {
        const pistol = gltf.scene;
        pistol.scale.set(0.5, 0.5, 0.5); // Adjust the scale if necessary
        weapons.pistol = pistol;
        scene.add(pistol);
    });

    // Load a rifle model
    loader.load('models/weapons/rifle.glb', function(gltf) {
        const rifle = gltf.scene;
        rifle.scale.set(0.5, 0.5, 0.5); // Adjust the scale if necessary
        weapons.rifle = rifle;
        scene.add(rifle);
    });

    // Add more weapons similarly
}

// Equip a weapon to the player
function equipWeapon(player, weaponName) {
    if (weapons[weaponName]) {
        const weapon = weapons[weaponName].clone();
        weapon.position.set(0.5, 1, 0); // Position relative to player
        player.add(weapon);

        // You can add more logic to handle switching weapons, etc.
    }
}

// Update weapon positions (if needed)
function updateWeapons(player) {
    // Logic to update weapon position if needed (e.g., if weapon should follow player)
}

export { loadWeapons, equipWeapon, updateWeapons };