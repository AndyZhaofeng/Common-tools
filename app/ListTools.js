/**
 * Created by zhaofeng
 * Date: 2017/11/21
 * Time: 10:57
 *
 */
'use strict';
function removeNullFromList(list){
    return list.map(item => {
        for(let i in item){
            if(item[i] === 'null'){
                item[i] = '';
            }
            item[i] = item[i] || '';
        }
        return item;
    });
}
module.exports={
    removeNullFromList,
};
