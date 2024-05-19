const max3 = (number1, number2, number3) => {
    let vetsiZPrvnichDvouCisel 
    if (number1 > number2) {
        vetsiZPrvnichDvouCisel = number1
    } else {
        vetsiZPrvnichDvouCisel = number2
    }

    if (vetsiZPrvnichDvouCisel > number3) {
        return vetsiZPrvnichDvouCisel
    } else {
        return number3
    }

}


const vysledek = max3(100, 2, 65)
console.log(vysledek)
