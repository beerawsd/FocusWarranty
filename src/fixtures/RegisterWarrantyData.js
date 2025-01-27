const RegisterWarrantyData = 
    {
        WarrantyCode : "AA2bmtz6MMYY",
        MobileBrand : "Apple",
        MobileModel : "Apple iPhone 16 Pro Max",
        Product : "Ablemen FF 5XC PV Apple iPhone 16 Pro",
        ChannelBuy : "ร้านมือถือ",
        WarrantyType : "",
        INV : "./src/test-data/imgs/inv.png",
        Package : "./src/test-data/imgs/package.png"
    }

const validWarrantyCode = [
    {
        Code:'AA2bmtz6MMYY',
    },
    {
        Code:'AA5DeS9DVitB',
    },
    {
        Code:'AAfLctROSyJT',
    },
    {
        Code:'AAqj0d25APOa',
    },
    {
        Code:'AADA0LZeOs0E',
    },
    
]
const invalidWarrantyCode = [
    {
        Code:'dfwqweqwe',
    },
    {
        Code:'AAAWATSADA',
    },
    {
        Code:'1214143525',
    },
    {
        Code:'vcxvxc3412',
    },
    {
        Code:'sdFSDEFQE',
    },
    
]

module.exports = { 
    RegisterWarrantyData,
    validWarrantyCode,
    invalidWarrantyCode
};

