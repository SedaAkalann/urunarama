let urun1={
    isim:"Asus Vivobook ",
    kategori:"teknoloji",
    fiyat:6784
};
let urun2={
    isim:"Asus X515ea ",
    kategori:"teknoloji",
    fiyat:11.875
};
let urun3={
    isim:"Lenovo Tab  ",
    kategori:"teknoloji",
    fiyat:5.987
};
let urun4={
    isim:"Lenovo Ideapad  ",
    kategori:"teknoloji",
    fiyat:14.987
};
let urun5={
    isim:"Casper Excalibur ",
    kategori:"teknoloji",
    fiyat:18.668
};
let urun6={
    isim:"Casper Vıa",
    kategori:"teknoloji",
    fiyat:3.555
};

let urunler=[urun1,urun2,urun3,urun4,urun5,urun6];
let urunISmi=prompt("lütfen bir ürün giriniz");
let filtrelenmisUrunler=[];

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtrelenmisUrunler);


function filtreliUrunleriDoldur(urunler){
urunler.forEach(function(urun){
    if(urun.isim.toUpperCase().includes(urunISmi.toUpperCase())){
        filtrelenmisUrunler.push(urun);
    }
})
};
 function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log(`------------------------------------------------------`)
        console.log(`| ${urun.isim} | ${urun.fiyat} | ${urun.kategori}` )
        console.log(`-----------------------------------------------------`)
    })
 }
