let resultado;

function isPalindrome (a) {
    for (let index = 1; index <= a.length; index += 1) {
        if (a[index - 1] === a[a.length - index]) {
        } else {
            console.log(a + ' não é um palíndromo!');
            break;
        }
        if (false) {
            break;
        } else {
            console.log(a + ' é um palíndromo!');
        }
    }
}

isPalindrome('Arara'.toLowerCase());
