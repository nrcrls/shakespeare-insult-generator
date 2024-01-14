let insults = [
    [
        "artless", "bawdy", "beslubbering", "bootless", "churlish", "craven", "dankish", "droning", "forward",
        "fawning", "frothy", "gleeking", "impertinent", "infectious", "lumpish", "mangled", "paunchy", "puny",
        "reeky", "roguish", "ruttish", "saucy", "tottering", "vain", "villainous", "yeasty",
    ],
    [
        "bat-fowling", "beetle-headed", "boil-brained", "clay-brained", "common-kissing", "crook-pated", "dizzy-eyed", "earth-vexing", "elf-skinned",
        "fat-kidneyed", "flap-mouthed", "folly-fallen", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hell-hated", "ill-breeding",
        "knotty-pated", "motley-minded", "pox-marked", "rump-fed", "sheep-biting", "swag-bellied", "tickle-brained", "toad-spotted"
    ],
    [
        "clotpole", "flax-wench", "harpy", "baggage", "death-token", "moldwarp", "canker-blossom", "yarlot", "barnacle",
        "bum-bailey", "horn-beast", "flirt-gill", "foot-licker", "measie", "hedge-pig", "boar-pig", "pumpion", "lewdster",
        "strumpet", "bugbear", "ratsbane", "vassal", "magot-pie", "coxcomb", "whey-face", "codpiece"
    ]
];

let generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', getRandomInsult);

function getRandomInsult() {
    // Generate an insult
    let insult = getAdjectives();

    // Display the insult in the div
    let insultDiv = document.getElementById('insult-container');
    insultDiv.textContent = insult;
}

// Function to generate a random element from the insult array
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

// Function to generate random adjectives to make insult
function getAdjectives() {
    const randomAdjectives = insults.map(getRandomElement);
    const insultPhrase = `Thou ${randomAdjectives.join(" ")}!`;
    return insultPhrase;
};