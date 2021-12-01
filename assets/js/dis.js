
var gender_labels = ['Female', 'Male', 'Unknown']
var fraction_labels = ['Alliance', 'Horde', 'Neutral']
var status_lables = ['Alive', 'Deceased', 'Unknown']
var race_labels = [
    'Air Elemental', 'Ancient Guardian', 'Annihilan', 'Arakkoa',
    'August Celestial', 'Bear', 'Black Drake', 'Blood Elf',
    'Blue Drake', 'Boar', 'Broken', 'Bronze Drake', 'Constellar',
    'Crypt Lord', 'Dark Iron Dwarf', 'Demon', 'Draenei', 'Dread Raven',
    'Drogbar', 'Dwarf', 'Earth Elemental', 'Fel Lord', 'Fel Orc',
    'Fire Elemental', 'Forest Troll', 'Forsaken', 'Frost Wyrm',
    'Gnome', 'Goblin', 'God', 'Green Drake', 'Gronn', 'Half-Elf',
    'Half-Ogre', 'Half-Orc', 'High Elf', 'Highmountain Tauren',
    'Hozen', 'Human', 'Ironforge Dwarf', 'Jungle Troll',
    'Keeper Of The Grove', 'Kyrian', 'Lich', 'Loa', "Mag'Har Orc",
    'Maldraxxi', "Man'Ari Eredar", 'Mantid', 'Mogu', "Mok'Nathal",
    'Mountain Dwarf', 'Naaru', 'Naga', 'Nathrezim', 'Night Elf',
    'Nightborne', 'Ogre', 'Ogre Mage', 'Old God', 'Orc', 'Pandaren',
    'Proto-Drake', 'Red Drake', 'Satyr', 'Stag', 'Tauren', 'Titan',
    'Titanic Watcher', 'Turtle', 'Undead', "Val'Kyr", 'Void Elf',
    'Vrykul', 'Water Elemental', 'Wild God', 'Wildhammer Dwarf',
    'Wisp', 'Worgen', 'Zandalari Troll'
]


var chr = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var options = {
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
    legend: {
        display: false
    },
}
var data = {
    type: "bar",
    data: {
        labels: race_labels,
        datasets: [{
            data: [
                2, 1, 3, 2, 4, 2, 7, 9, 5, 1, 1, 5, 1, 1, 1, 1, 3,
                1, 2, 2, 1, 1, 2, 2, 1, 7, 1, 3, 1, 1, 2, 1, 3, 1,
                2, 4, 6, 1, 36, 2, 5, 3, 1, 1, 1, 3, 2, 2, 1, 1, 1,
                2, 6, 1, 4, 9, 2, 1, 3, 4, 19, 9, 1, 3, 1, 1, 7, 7,
                8, 1, 1, 3, 2, 1, 1, 2, 2, 1, 2, 4
            ]
        }]
    },

    options: options
};

var barchr = new Chart(ctx, data);
document.getElementById("gender").addEventListener("click", function () {
    barchr.data = {
        labels: gender_labels,
        datasets: [{
            data: [48, 199, 14],
            borderColor: [
                labelToRGB['Female'][0],
                labelToRGB['Male'][0],
                labelToRGB['Unknown'][0],
            ],
            backgroundColor: [
                labelToRGB['Female'][1],
                labelToRGB['Male'][1],
                labelToRGB['Unknown'][1],
            ],
            borderWidth: 1
        }],
    }
    barchr.config.options = options
    barchr.update();
});

document.getElementById("fraction").addEventListener("click", function () {
    barchr.data = {
        labels: fraction_labels,
        datasets: [{
            data: [41, 41, 179],
            borderColor: [
                labelToRGB['Alliance'][0],
                labelToRGB['Horde'][0],
                labelToRGB['Neutral'][0],
            ],
            backgroundColor: [
                labelToRGB['Alliance'][1],
                labelToRGB['Horde'][1],
                labelToRGB['Neutral'][1],
            ],
            borderWidth: 1
        }],
    }
    barchr.options = options
    barchr.update();
});

document.getElementById("status").addEventListener("click", function () {
    barchr.config.data = {
        labels: status_lables,
        datasets: [{
            data: [150, 107, 4],
            borderColor: [
                labelToRGB['Alive'][0],
                labelToRGB['Deceased'][0],
                labelToRGB['Unknown'][0],
            ],
            backgroundColor: [
                labelToRGB['Alive'][1],
                labelToRGB['Deceased'][1],
                labelToRGB['Unknown'][1],
            ],
            borderWidth: 1
        }],
    }
    barchr.config.options = options
    barchr.update();
});

document.getElementById("race").addEventListener("click", function () {
    barchr.config.data = {
        labels: race_labels,
        datasets: [{
            data: [
                2, 1, 3, 2, 4, 2, 7, 9, 5, 1, 1, 5, 1, 1, 1, 1, 3,
                1, 2, 2, 1, 1, 2, 2, 1, 7, 1, 3, 1, 1, 2, 1, 3, 1,
                2, 4, 6, 1, 36, 2, 5, 3, 1, 1, 1, 3, 2, 2, 1, 1, 1,
                2, 6, 1, 4, 9, 2, 1, 3, 4, 19, 9, 1, 3, 1, 1, 7, 7,
                8, 1, 1, 3, 2, 1, 1, 2, 2, 1, 2, 4
            ],
        }],
    }
    barchr.config.options = options
    barchr.update();
});