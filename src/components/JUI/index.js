/*
 * @Descripttion: 
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-23 00:20:39
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-23 23:19:30
 */
import jButton from '@/components/JUI/common/jButton';
import jCol from '@/components/JUI/common/jCol';
import jQuery from '@/components/JUI/common/jQuery';
import jRow from '@/components/JUI/common/jRow';
import jPagination from '@/components/JUI/common/jPagination';
const index = {
    install: function(Vue) {
        Vue.component('j-button', jButton);
        Vue.component('j-col', jCol);
        Vue.component('j-query', jQuery);
        Vue.component('j-row', jRow);
        Vue.component('j-pagination',jPagination);
    }
}
export default index;