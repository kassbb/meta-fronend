const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

export function fetchAPI(date) {
    let result = [];
    let dt = new Date(date);
    let seed = dt.getDate(); // Utilisation du jour du mois comme graine

    let random = seededRandom(seed);
    for (let i = 17; i <= 23; i++) { // Génère des créneaux de 17h00 à 23h30
        if (random() < 0.5) {
            result.push(`${i}:00`);
        }
        if (random() < 0.5) {
            result.push(`${i}:30`);
        }
    }
    return result;
}

export function submitAPI(formData) {
    // Simule une soumission réussie de formulaire
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Vous pouvez simuler une erreur ici si nécessaire
            resolve(true);
        }, 1000); // Délai simulé de 1 seconde
    });
}
