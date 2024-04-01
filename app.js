let textbox = document.getElementById('textbox')

textbox.addEventListener('input', function () {
    var text = this.value;
    var char = text.length;
    document.getElementById('char').innerHTML = char;

    text = text.trim();
    let word = text.split(" ")
    var cleanlist = word.filter(function(elm){
        return elm != "";
    })
    document.getElementById('word').innerHTML = cleanlist.length
    
});
