function startSong () {
    for (i = 99; i >=0; i--) {
        document.getElementById("main").innerHTML+=i+" bottles of beer on the wall, "+i+ " bottles of beer "+"<br/>"
        +"Take one down and pass it around, "+"<br/>" +(i-1)+" bottles of beer on the wall"+"<br/>";
    }
        if (i==1) {
            document.getElementById("main").innerHTML= " 1 bottle of beer on the wall, "+" 1 bottle of beer "+"<br/>"
            +"Take one down and pass it around, "+"<br/>" +" no bottles of beer on the wall";

        }
}
