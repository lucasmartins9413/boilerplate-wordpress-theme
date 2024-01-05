function greet(name) {
    alert('Hello, ' + name + '!');
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('greetButton');
    button.addEventListener('click', function() {
        var name = prompt('What is your name?');
        greet(name);
    });
});
