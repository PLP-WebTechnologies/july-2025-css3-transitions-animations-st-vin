// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Function with parameters and return value
function addNumbers(a, b) {
    return a + b;
}

// Demonstrate local vs global scope
let globalVar = 'I am global!';
function testScope() {
    let localVar = 'I am local!';
    return `${globalVar} ${localVar}`;
}

document.getElementById('scopeBtn').onclick = function() {
    const result = testScope();
    document.getElementById('scopeResult').textContent = result;
};

// Reusable function to trigger animation
function triggerAnimation(element, className, duration = 700) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, duration);
}

document.getElementById('animateBtn').onclick = function() {
    const box = document.getElementById('animatedBox');
    triggerAnimation(box, 'animated');
};

// Modal logic
const modal = document.getElementById('modal');
document.getElementById('showModalBtn').onclick = function() {
    modal.classList.add('show');
    setTimeout(() => {
        modal.classList.remove('show');
    }, 2000);
};

// Example: Using parameters and return values
console.log('Add 2 + 3 =', addNumbers(2, 3));
