const bhaskara = (a, b, c) => {
    delta = (b * b) - (4 * a * c);

    if(delta < 0){
        return "Delta é negativo";
    }else{
        x1 = (-b + Math.sqrt(delta));
        x2 = (-b - Math.sqrt(delta));
        return [x1, x2];
    }
}

console.log(bhaskara(3, -5, 12));