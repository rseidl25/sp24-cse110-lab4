for (prop in statistics) {
    if(prop[0] == 'r' || statistics[prop] % 2 != 0){
        console.log(prop);
    }
}
