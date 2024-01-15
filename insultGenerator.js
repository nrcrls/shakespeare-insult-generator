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
let copyButton = document.getElementById('copy-button');

let insultDiv = document.getElementById('insult-container');

generateButton.addEventListener('click', getRandomInsult);
copyButton.addEventListener('click', copyToClipboard);

function getRandomInsult() {
    // Generate an insult
    let insult = getAdjectives();

    // Display the insult in the div
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
    const insultPhrase = `"Thou ${randomAdjectives.join(" ")}!"`;
    return insultPhrase;
};

function copyToClipboard() {
    // Get the text content from the insult container
    let insultText = insultDiv.textContent;

    /// Use the Clipboard API to write the text to the clipboard
    navigator.clipboard.writeText(insultText)
    .then(() => {
        copyButton.textContent = 'Copied!';
        copyButton.style.backgroundColor = '#FFF1D7';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
            copyButton.style.backgroundColor = '#DAA520'
        }, 1500)
    })
    .catch((err) => {
        showErrorMessage('Failed to copy to clipboard');
    });
}

function showErrorMessage(message) {
    alert(message);
}

getRandomInsult();