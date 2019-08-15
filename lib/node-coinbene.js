const util = require("./util.js");
const MARKET_URL = require("./util.js").MARKET_URL;
const TRADE_URL = require("./util.js").TRADE_URL;

const httpGetNosign = require("./util.js").httpGetNosign;
const httpPostSign = require("./util.js").httpPostSign;

function getTicker(symbol) {
    let url = MARKET_URL + "ticker?symbol=" + symbol;
    return httpGetNosign(url);
}


function getOrderbook(symbol, depth = 200) {
    let url = MARKET_URL + "orderbook?symbol=" + symbol + "&depth=" + depth;
    return httpGetNosign(url);
}


function getTrade(symbol, size = 300) {
    let url = MARKET_URL + "trades?symbol=" + symbol + "&size=" + size
    return httpGetNosign(url)
}


function postBalance(config) {
    url = TRADE_URL + "balance"
    return httpPostSign(url, config)
}


function postOrderPlace(config) {
    url = TRADE_URL + "order/place"
    return httpPostSign(url, config)
}


function postInfo(config) {
    url = TRADE_URL + "order/info"
    return httpPostSign(url, config)
}



function postOpenOrders(config) {
    url = TRADE_URL + "order/open-orders"
    return httpPostSign(url, config)
}


function postCancel(config) {
    url = TRADE_URL + "order/cancel"
    return httpPostSign(url, config)
}

exports.getOrderbook = getOrderbook;
exports.getTicker = getTicker;
exports.getTrade = getTrade;

exports.postBalance = postBalance;
exports.postCancel = postCancel;
exports.postInfo = postInfo;
exports.postOpenOrders = postOpenOrders;
exports.postOrderPlace = postOrderPlace;
exports.postCancel = postCancel;