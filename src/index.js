module.exports = function toReadable (number) {
    const arr = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let n1=Math.trunc(number%10);  //units
    let n2=Math.trunc(number/10%10); //tens-dozens
    let n3=Math.trunc(number/100); //hundreds
    let word='';
    if (number==0) {
        return ('zero');
    };
    if (n3!=0) {
        word = arr[n3] + ' hundred';
    }
    if (n2!=0) {
        if (n2==1)
        {
            word = word + ' ' + arr[10+n1];
        } else {
            const arrDozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
            word = word + ' ' + arrDozens[n2];
        }
    }
    if (n1!=0 && n2!=1) {
            word = word + ' ' + arr[n1];
    }

return (word.trim());
}
