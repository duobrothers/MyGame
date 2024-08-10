// vehicle.js

const vehicles = [];

// Load vehicle models
function loadVehicles(scene) {
    const loader = new THREE.GLTFLoader();

    // Load the first vehicle model
    loader.load('models/vehicle_model.glb', function(gltf) {
        const vehicle = gltf.scene;
        vehicle.position.set(5, 0, 0); // Adjust the position as needed
        scene.add(vehicle);
        vehicles.push(vehicle);
    });

    // Load the second vehicle model (if you have one)
    loader.load('models/vehicle_model_2.glb', function(gltf) {
        const vehicle2 = gltf.scene;
        vehicle2.position.set(10, 0, 5); // Adjust the position as needed
        scene.add(vehicle2);
        vehicles.push(vehicle2);
    });

    // Add more vehicles as needed
}

// Control vehicle movement
function controlVehicles() {
    vehicles.forEach(vehicle => {
        // Example: Move the vehicle forward
        vehicle.position.z -= 0.05;

        // You can add more logic for vehicle controls here
    });
}

// Call this function in your main animation loop
function updateVehicles() {
    controlVehicles();
}

export { loadVehicles, updateVehicles };