// Prompt User to enter Flavors
const froyoFlavor = prompt(
    "Enter a list of comma-separated froyo flavors."
)
// Conver into an array
const flavorsArray = froyoFlavor.split(",");

// Function for flavor's ocurrance
function countFlavors(flavors){
    const flavorsCounts = {};
    flavorsArray.forEach( flavor => {
        const trimmedFlavor = flavor.trim().toLowerCase();
        if (flavorsCounts[trimmedFlavor]){
            flavorsCounts[trimmedFlavor]++;
        } else {
            flavorsCounts[trimmedFlavor] = 1;
        }
    });
    return flavorsCounts;
}
// Count flavors
const flavorsCounts = countFlavors(flavorsArray);

// Output the count flavors
console.log("Froyo flavors count:");
Object.keys(flavorsCounts).forEach(flavor => {
    console.log(`${flavor.charAt(0).toUpperCase() + flavor.slice(1)}: ${flavorsCounts[flavor]}`);
});