/**
 * Created by zhaofeng
 * Date: 2017/11/9
 * Time: 10:14
 *
 */
'use strict';

function yuanToFen(yuanChars) {
    try {
        const fen = parseInt(parseFloat(yuanChars).toFixed(2).replace('.', ''));
        if (!Number.isNaN(fen)) {
            return fen;
        }
    } catch (err) {
        console.log(err);
    }
    return 0;
}
function fenToYuanChar(fen) {
    try{
        return (parseInt(fen) * 0.01).toFixed(2);
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    yuanToFen,
    fenToYuanChar,
};
