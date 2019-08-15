#API COINBENE


##Install
```sh
npm install coinbene --save
```

```sh
const coinbene = require("node-coinbene");
```

##Use methods

getTicker

```sh
coinbene.getTicker('rifbtc').then((dt:any) => { return JSON.parse(dt); });
```

```
result:
{
     "ticker": [
         {
            "symbol": "BTCUSDT",
             "24hrHigh": "6798.39",
             "last": "6714.54",
             "24hrVol": "5591.1010",
             "ask": "6714.55",
             "24hrLow": "6611.98",
             "bid": "6714.54",
             "24hrAmt": "37694522.351754"
         }
     ],
     "status": "ok",
     "timestamp": 1529598925985
 }
```

getTrade

```sh
coinbene.getTrade('rifbtc', 30).then((dt:any) => { return JSON.parse(dt); })
```

```
{
     "symbol": "ETHUSDT",
     "trades": [
         {
             "price": "529.07",
             "quantity": "0.01",
             "time": 1529599014000,
             "take": "sell",
             "tradeId": "201806220035559610014931201806220036548650015602"
         },
         {
             "price": "529.07",
             "quantity": "0.11",
             "time": 1529599014000,
             "take": "sell",
             "tradeId": "201806220035559610014931201806220036541990015342"
         }
     ],
     "status": "ok",
     "timestamp": 1529599015128
}

```

