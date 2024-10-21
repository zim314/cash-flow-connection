"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import ecpay_payment from "ecpay_aio_nodejs";
dotenv_1.default.config();
const { MERCHANTID, HASHKEY, HASHIV, HOST } = process.env;
const options = {
    OperationMode: "Test",
    MercProfile: {
        MerchantID: MERCHANTID,
        HashKey: HASHKEY,
        HashIV: HASHIV,
    },
    IsProjectContractor: false,
};
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Server");
});
app.get("/api/checkout", (req, res) => {
    const MerchantTradeDate = new Date().toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
    const base_param = {
        MerchantTradeNo: new Date().getTime() + "1111111", //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
        MerchantTradeDate, //ex: 2017/02/13 15:45:30
        TotalAmount: "100",
        TradeDesc: "測試交易描述",
        ItemName: "測試商品等",
        ReturnURL: `${HOST}/return`,
        // ClientBackURL: 'https://www.google.com',
    };
    // res.send(htm);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
