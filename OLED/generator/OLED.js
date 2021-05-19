//下列三行代码,为刚需,此提供了下列所有代码的入口
'use strict';
 
goog.provide('Blockly.Arduino.OLED');//注意脚本类别及路径名称
 
goog.require('Blockly.Arduino');
 
 // ---OLED模块图形转代码---
 
 //include模块
  Blockly.Arduino.U8g2lib_include = function() {
    var INCLUDE = this.getFieldValue('INCLUDE');//使用INCLUDE 变量来存储,block文件夹中的OLED.js脚本,文本输入对象的值
    Blockly.Arduino.definitions_['define_'+INCLUDE] = '#include <'+INCLUDE+'.h>';//严格函数,固定写法(转include调用内容)
    return '';
};
 
 //配置构造函数模块
  Blockly.Arduino.config = function() {
  	Blockly.Arduino.definitions_['define_'] = 'U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0,SCL,SDA);\n';
    return '';
};
 
//开启 U8g2驱动模块
  Blockly.Arduino.initOled = function() {
    Blockly.Arduino.setups_['setup_intOled'] = 'u8g2.begin();\n';//严格函数固定写法(转setup函数中代码)
    return '';
};
 
//中文输入模块
  Blockly.Arduino.displayCN=function(){
   var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
   return 'u8g2.firstPage();' + '\n'  +  'do {'  + '\n' +    'u8g2.setFont(u8g2_font_unifont_t_chinese1);' + '\n'  +    'u8g2.drawUTF8(0,15,'   +value+  ');' + '\n' +  '} while ( u8g2.nextPage() );' + '\n' +  'delay(1000);';
  };