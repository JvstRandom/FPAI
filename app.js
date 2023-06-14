class CF{
    
    B01; B02; B03; B04; B05; B06; B07; B08; B09; B10; B11; B12; B13; B14; B15; B16; B17; B18; B19; B20; 
     
    
    constructor(){
        this.B01 = 0; this.B11 = 0;
        this.B02 = 0; this.B12 = 0;
        this.B03 = 0; this.B13 = 0;
        this.B04 = 0; this.B14 = 0;
        this.B05 = 0; this.B15 = 0;
        this.B06 = 0; this.B16 = 0;
        this.B07 = 0; this.B17 = 0;
        this.B08 = 0; this.B18 = 0;
        this.B09 = 0; this.B19 = 0;
        this.B10 = 0; this.B20 = 0; 
    }

    GejalaKulitKering(U01, U16, U10, U11, U12) {
        this.B01 = 0.6;
        this.B16 = 0.6;
        this.B10 = 0.8;
        this.B11 = 0.6;
        this.B12 = 0.6;

        let cf1 = this.B01 * U01;
        let cf2 = this.B16 * U16;
        let cf3 = this.B10 * U10;
        let cf4 = this.B11 * U11;
        let cf5 = this.B12 * U12;

        let cfc = cf1 + cf2 * (1-cf1);
        cfc = cfc + cf3 * (1-cfc);
        cfc = cfc + cf4 * (1-cfc);
        cfc = cfc + cf5 * (1-cfc);

        let persKeyakinan = cfc * 100;

        return persKeyakinan;
    }

    GejalaKulitBerminyak(U07, U08, U09, U16) {
        this.B07 = 0.8;
        this.B08 = 0.8;
        this.B09 = 0.8;
        this.B16 = 0.8;

        let cf1 = this.B07 * U07;
        let cf2 = this.B08 * U08;
        let cf3 = this.B09 * U09;
        let cf4 = this.B16 * U16;

        let cfc = cf1 + cf2 * (1-cf1);
        cfc = cfc + cf3 * (1-cfc);
        cfc = cfc + cf4 * (1-cfc);

        let persKeyakinan = cfc * 100;

        return persKeyakinan;
    }

    GejalaKulitKombinasi(U07, U14, U15, U16, U17) {
        this.B07 = 0.6;
        this.B14 = 0.4;
        this.B15 = 0.6;
        this.B16 = 0.4;
        this.B17 = 0.6;

        let cf1 = this.B07 * U07;
        let cf2 = this.B14 * U14;
        let cf3 = this.B15 * U15;
        let cf4 = this.B16 * U16;
        let cf5 = this.B17 * U17;

        let cfc = cf1 + cf2 * (1-cf1);
        cfc = cfc + cf3 * (1-cfc);
        cfc = cfc + cf4 * (1-cfc);
        cfc = cfc + cf5 * (1-cfc);

        let persKeyakinan = cfc * 100;

        return persKeyakinan;
    }

    GejalaKulitSensitif(U12, U18, U19, U20) {
        this.B12 = 0.8;
        this.B18 = 0.6;
        this.B19 = 0.6;
        this.B20 = 0.6;

        let cf1 = this.B12 * U12;
        let cf2 = this.B18 * U18;
        let cf3 = this.B19 * U19;
        let cf4 = this.B20 * U20;

        let cfc = cf1 + cf2 * (1-cf1);
        cfc = cfc + cf3 * (1-cfc);
        cfc = cfc + cf4 * (1-cfc);

        let persKeyakinan = cfc * 100;

        return persKeyakinan;
    }

    GejalaKulitNormal(U01, U02, U03, U04, U05, U06, U11) {
        this.B01 = 0.8;
        this.B02 = 0.8;
        this.B03 = 0.8;
        this.B04 = 0.8;
        this.B05 = 0.8;
        this.B06 = 0.8;
        this.B11 = 0.8;

        let cf1 = this.B01 * U01;
        let cf2 = this.B02 * U02;
        let cf3 = this.B03 * U03;
        let cf4 = this.B04 * U04;
        let cf5 = this.B05 * U05;
        let cf6 = this.B06 * U06;
        let cf7 = this.B11 * U11;

        let cfc = cf1 + cf2 * (1-cf1);
        cfc = cfc + cf3 * (1-cfc);
        cfc = cfc + cf4 * (1-cfc);
        cfc = cfc + cf5 * (1-cfc);
        cfc = cfc + cf6 * (1-cfc);
        cfc = cfc + cf7 * (1-cfc);

        let persKeyakinan = cfc * 100;

        return persKeyakinan;
    }

}

function validasiForm(){
    var CFUG01 = parseFloat(document.forms["gejala-form"]["G01"].value);
    var CFUG02 = parseFloat(document.forms["gejala-form"]["G02"].value);
    var CFUG03 = parseFloat(document.forms["gejala-form"]["G03"].value);
    var CFUG04 = parseFloat(document.forms["gejala-form"]["G04"].value);
    var CFUG05 = parseFloat(document.forms["gejala-form"]["G05"].value);
    var CFUG06 = parseFloat(document.forms["gejala-form"]["G06"].value);
    var CFUG07 = parseFloat(document.forms["gejala-form"]["G07"].value);
    var CFUG08 = parseFloat(document.forms["gejala-form"]["G08"].value);
    var CFUG09 = parseFloat(document.forms["gejala-form"]["G09"].value);
    var CFUG10 = parseFloat(document.forms["gejala-form"]["G10"].value);
    var CFUG11 = parseFloat(document.forms["gejala-form"]["G11"].value);
    var CFUG12 = parseFloat(document.forms["gejala-form"]["G12"].value);
    var CFUG13 = parseFloat(document.forms["gejala-form"]["G13"].value);
    var CFUG14 = parseFloat(document.forms["gejala-form"]["G14"].value);
    var CFUG15 = parseFloat(document.forms["gejala-form"]["G15"].value);
    var CFUG16 = parseFloat(document.forms["gejala-form"]["G16"].value);
    var CFUG17 = parseFloat(document.forms["gejala-form"]["G17"].value);
    var CFUG18 = parseFloat(document.forms["gejala-form"]["G18"].value);
    var CFUG19 = parseFloat(document.forms["gejala-form"]["G19"].value);
    var CFUG20 = parseFloat(document.forms["gejala-form"]["G20"].value);

    const CF1 = new CF();
    
    var persGKK = CF1.GejalaKulitKering(CFUG01, CFUG16, CFUG10, CFUG11, CFUG12);
    var persGKB = CF1.GejalaKulitBerminyak(CFUG07, CFUG08, CFUG09, CFUG16);
    var persGKO = CF1.GejalaKulitKombinasi(CFUG07, CFUG14, CFUG15, CFUG16, CFUG17);
    var persGKS = CF1.GejalaKulitSensitif(CFUG12, CFUG18, CFUG19, CFUG20);
    var persGKN = CF1.GejalaKulitNormal(CFUG01, CFUG02, CFUG03, CFUG04, CFUG05, CFUG06, CFUG11);

    var max = Math.max(persGKK, persGKB, persGKO, persGKS, persGKN);

    // window.alert("persentase" + max); 


    if( max == persGKK ){
        alert("Persentase keyakinan kulit anda kering = "+max);
        window.location.href = "kulitKering.html";
    }else if( max == persGKB ){
        alert("Persentase keyakinan kulit anda Berminyak = "+max);
        window.location.href = "kulitBerminyak.html";
    }else if( max == persGKO ){
        alert("Persentase keyakinan kulit anda Kombinasi = "+max);
        window.location.href = "kulitKombinasi.html";
    }else if( max == persGKS ){
        alert("Persentase keyakinan kulit anda Sensitif= "+max);
        window.location.href = "kulitSensitif.html";
    }else if( max == persGKN ){
        alert("Persentase keyakinan kulit anda Normal = "+max);
        window.location.href = "kulitNormal.html";
    }else{
        window.location.href = "_blank";
    }

    return false; 
}

// const CF1 = new CF();

// console.log(CF1.GKN(0.6,0.4,0.2));
// console.log(CF1.detail());