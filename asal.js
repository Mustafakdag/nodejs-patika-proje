const deger = process.argv.slice(2);
function AsalBul(ksayi, bsayi) {
    for (let i = ksayi; i <= bsayi; i++) {
        let Aradakisayilar = true;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                Aradakisayilar = false;
            }
        }
        if (Aradakisayilar) {
            console.log(i);
        }
    }
}
AsalBul(deger[0] * 1, deger[1] * 1);
