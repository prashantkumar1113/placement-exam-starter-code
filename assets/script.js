// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Prashant Kumar" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   // Total

function updateCookie(element, cookie, increment){
    switch (cookie){
        case 'gb':
            gb+=increment
            element.textContent = gb
            break
        case 'cc':
            cc+=increment
            element.textContent = cc
            break
        case 'sugar':
            sugar+=increment
            element.textContent = sugar
            break 
        default:
            console.log('Error')
    }
    total+=increment
    //console.log(element)
    
    document.getElementById('qty-total').textContent = total

}

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    // gb+=1
    // total+=1
    //document.getElementById('qty-gb').textContent = gb
    // document.getElementById('qty-total').textContent = total
    //console.log('Gingerbread ' + gb)

    updateCookie(document.getElementById('qty-gb'), 'gb', 1)
    
})
document.getElementById('minus-gb').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    if(gb != 0){
        // gb-=1
        // total-=1
        // document.getElementById('qty-gb').textContent = gb
        // document.getElementById('qty-total').textContent = total

        updateCookie(document.getElementById('qty-gb'), 'gb', -1)

    }
    //console.log('Gingerbread ' + gb)
})
// TODO: Hook up event listeners for the rest of the buttons

//Chocolatechip Cookie
// Event listener for clicks on the "+" button for chocolate chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "chocolate chip" is clicked
    // cc+=1
    // total+=1
    // document.getElementById('qty-cc').textContent = cc
    // document.getElementById('qty-total').textContent = total
    //console.log('Chocolate Chip ' + cc)

    updateCookie(document.getElementById('qty-cc'), 'cc', 1)
})
document.getElementById('minus-cc').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "chocolate chip" is clicked
    if(cc != 0){
        // cc-=1
        // total-=1
        // document.getElementById('qty-cc').textContent = cc
        // document.getElementById('qty-total').textContent = total

        updateCookie(document.getElementById('qty-cc'), 'cc', -1)

    }
    //console.log('Chocolate Chip ' + cc)
})

//Chocolatechip Cookie
// Event listener for clicks on the "+" button for Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Sugar" is clicked
    // sugar+=1
    // total+=1
    // document.getElementById('qty-sugar').textContent = sugar
    // document.getElementById('qty-total').textContent = total
    //console.log('Sugar ' + sugar)

    updateCookie(document.getElementById('qty-sugar'), 'sugar', 1)

})
document.getElementById('minus-sugar').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Sugar" is clicked
    if(sugar != 0){
        // sugar-=1
        // total-=1
        // document.getElementById('qty-sugar').textContent = sugar
        // document.getElementById('qty-total').textContent = total

        updateCookie(document.getElementById('qty-sugar'), 'sugar', -1)

    }
    //console.log('Sugar ' + sugar)
})