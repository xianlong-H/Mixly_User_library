//下列三行代码,为刚需,此提供了下列所有代码的入口
'use strict';
 
goog.provide('Blockly.Blocks.OLED');//注意脚本类别及路径名称
 
goog.require('Blockly.Blocks');
 
// ---OLED模块图形配置---
 
//include模块
Blockly.Blocks.U8g2lib_include = {
  init: function() {
    this.setColour(120);//模块图形颜色
    this.appendDummyInput("")//此行代码刚需,为模块创建提供入口
        .appendField("#include <") //代码块上的文字内容
        .appendField(new Blockly.FieldTextInput('U8g2lib'), 'INCLUDE')//创建文本输入对象
        .appendField(".h>");
    this.setPreviousStatement(true);//是否可以与上一模块连接
    this.setNextStatement(true);//是否可以与下一模块连接
  }
};
 
//配置构造函数模块
Blockly.Blocks.config = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
    .appendField("配置构造函数")
    .appendField("U8g2 SSD1306 128X64")
 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);//是否开启模块单行显示(true为单行,false为多行)
  }
};
 
//开启 U8g2驱动模块
Blockly.Blocks.initOled = {
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
    .appendField("开启U8g2驱动程序")
 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
 
//中文输入模块
Blockly.Blocks.displayCN = {
  init: function() {
    this.setColour(50);
    this.appendDummyInput("")
    .appendField("输入字符串...")
 
    this.appendValueInput("VALUE", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT);//开启模块右侧可连接
 
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
  }
};