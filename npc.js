// npc.js

const npcs = [];

// Load NPC models
function loadNPCs(scene) {
    const loader = new THREE.GLTFLoader();

    // Load the first NPC model
    loader.load('models/npc_model.glb', function(gltf) {
        const npc = gltf.scene;
        npc.position.set(10, 0, 0); // Adjust the position as needed
        scene.add(npc);
        npcs.push(npc);
    });

    // Load the second NPC model (if you have one)
    loader.load('models/npc_model_2.glb', function(gltf) {
        const npc2 = gltf.scene;
        npc2.position.set(15, 0, 5); // Adjust the position as needed
        scene.add(npc2);
        npcs.push(npc2);
    });

    // Add more NPCs as needed
}

// Basic NPC interaction logic (e.g., talking or giving quests)
function interactWithNPCs(player) {
    npcs.forEach(npc => {
        const distance = player.position.distanceTo(npc.position);
        if (distance < 2) { // Interaction distance threshold
            alert('Interacting with NPC');
            // Add more interaction logic here (e.g., dialogues, quests)
        }
    });
}

// NPC movement logic (basic example, moving back and forth)
function moveNPCs() {
    npcs.forEach(npc => {
        npc.position.x += 0.01 * Math.sin(Date.now() * 0.001);

        // Add more complex movement or AI behavior here
    });
}

// Call this function in your main animation loop
function updateNPCs(player) {
    moveNPCs();
    interactWithNPCs(player);
}

export { loadNPCs, updateNPCs };