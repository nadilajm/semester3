let penjualan = 450000 /* menyesuaikan */
let uang_jasa = 0;
let uang_komisi = 0; 

if (penjualan <= 200000){
    uang_jasa = 10000 ;
    uang_komisi = penjualan * 0.10;
}else if (penjualan <= 500000){
    uang_jasa = 20000 ;
    uang_komisi = penjualan * 0.15;
}else{
    uang_jasa = 30000 ;
    uang_komisi = penjualan * 0.20;
}


let total_pendapatan = uang_jasa + uang_komisi;
console.log("uang penjualan: Rp." + penjualan)
console.log("uang jasa : Rp." + uang_jasa)
console.log("uang komisi : Rp." + uang_komisi)
console.log("total pendapatan : Rp." + total_pendapatan)