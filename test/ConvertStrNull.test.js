/**
 * Created by zhaofeng
 * Date: 2017/11/16
 * Time: 14:05
 *
 */
'use strict';
const assert = require('assert');

describe('ConvertStrNull', () => {
    it('ConvertStrNull', () => {
        const objectList = [{ id: 101711010137523,
            amount: '0.02',
            preFee: '0.00',
            buyerName: 'null',
            preference: '网银',
            ordernum: '201711011539343981',
            ordersts: '待支付',
            createdate: '2017-11-01 15:39:46',
            subject: 'sales',
            bodys: 'sales',
            buyerRealname: 'null',
            trade_way: 'CMB' }];
        const convertList =objectList.map(item => {
            for(let i in item){
                if(item[i] === 'null'){
                    item[i] = '';
                }else {
                    item[i] = item[i] || '';
                }
            }
            return item;
        });
        console.log(convertList)
    });
});
