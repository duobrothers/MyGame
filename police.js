// police.js

const policeUnits = [];

// Load police models
function loadPolice(scene) {
    const loader = new THREE.GLTFLoader();

    // Load the first police model
    loader.load('models/police_model.glb', function(gltf) {
        const police = gltf.scene;
        police.position.set(-10, 0, 0); // Adjust the position as needed
        scene.add(police);
        policeUnits.push(police);
    });

    // Load the second police model (if you have one)
    loader.load('models/police_model_2.glb', function(gltf) {
        const police2 = gltf.scene;
        police2.position.set(-15, 0, -5); // Adjust the position as needed
        scene.add(police2);
        policeUnits.push(police2);
    });

    // Add more police units as needed
}

// Police patrol logic (basic example)
function patrolPolice() {
    policeUnits.forEach(police => {
        // Example: Move police in a circular patrol route
        police.position.x += 0.02 * Math.cos(Date.now() * 0.001);
        police.position.z += 0.02 * Math.sin(Date.now() * 0.001);

        // Add more complex patrol or chase logic here
    });
}

// Call this function in your main animation loop
function updatePolice() {
    patrolPolice();
}

export { loadPolice, updatePolice };