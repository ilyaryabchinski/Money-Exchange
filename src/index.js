// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const HALF_DOLLAR = 50;
    const QUARTER = 25;
    const DIME = 10;
    const NICKEL = 5;
    const result = {};
    if (currency === 0) return result;
    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    if (Math.trunc(currency / HALF_DOLLAR) > 0) {
        result["H"] = Math.trunc(currency / HALF_DOLLAR);
        currency = currency - (HALF_DOLLAR  * result["H"]);
    }
    if (Math.trunc(currency / QUARTER) > 0) {
        result["Q"] = Math.trunc(currency / QUARTER);
        currency = currency - (QUARTER  * result["Q"]);
    }
    if (Math.trunc(currency / DIME) > 0) {
        result["D"] = Math.trunc(currency /DIME);
        currency = currency - (DIME  * result["D"]);
    }
    if (Math.trunc(currency / NICKEL) > 0) {
        result["N"] = Math.trunc(currency /NICKEL);
        currency = currency - (NICKEL  * result["N"]);
    }
    if (currency > 0) {
        result["P"] = currency;
    }


    return result;
}
