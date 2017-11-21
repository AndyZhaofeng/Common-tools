/**
 * Created by zhaofeng
 * Date: 2017/11/21
 * Time: 10:58
 *
 */
'use strict';
const assert = require('assert');
const ListTools = require('../app/ListTools');

describe('listTools', () => {
    it('removeNullFromList', () => {
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
            trade_way: 'CMB' },
            { id: 101711010137523,
                amount: '0.02',
                preFee: '0.00',
                buyerName: 'null',
                preference: 'null',
                ordernum: null,
                ordersts: '待支付',
                createdate: '2017-11-01 15:39:46',
                subject: 'sales',
                bodys: 'sales',
                buyerRealname: 'null',
                trade_way: 'CMB' }];
        const finallList = ListTools.removeNullFromList(objectList);
        console.log(finallList)
    });
});
