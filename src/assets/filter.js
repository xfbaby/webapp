/*import Vue from 'vue'
Vue.filter('type', function(value) {
switch(value)
{
case 1:
  return '主编力推'
  break;
case 2:
  return '新书推荐'
  break;
default:
 return '完本经典'
}
});
var s = this.type;*/
module.exports = function(value){
	switch(value)
			{
			case 1:
			  return '主编力推'
			  break;
			case 2:
			  return '新书推荐'
			  break;
			default:
			 return '完本经典'
			}
}