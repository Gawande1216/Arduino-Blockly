Blockly.Blocks['ir_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_LS4")
        .appendField(new Blockly.FieldLabelSerializable("LS 4"), "LS4")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Value_LS4")
        .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "Logic_LS4");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_LS3")
        .appendField(new Blockly.FieldLabelSerializable("LS 3"), "LS3")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Value_LS3")
        .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "Logic_LS3");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_LS2")
        .appendField(new Blockly.FieldLabelSerializable("LS 2"), "LS2")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Value_LS2")
        .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "Logic_LS2");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_LS1")
        .appendField(new Blockly.FieldLabelSerializable("LS 1"), "LS1")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Value_LS1")
        .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "Logic_LS1");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_RS1")
        .appendField(new Blockly.FieldLabelSerializable("RS 1"), "RS1")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Value_RS1")
        .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "Logic_RS1");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_RS2")
        .appendField(new Blockly.FieldLabelSerializable("RS 2"), "RS2")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Value_RS2")
        .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "Logic_RS2");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_RS3")
        .appendField(new Blockly.FieldLabelSerializable("RS 3"), "RS3")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Value_RS3")
        .appendField(new Blockly.FieldDropdown([["and","and"], ["or","or"]]), "Logic_RS3");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("if"), "if_RS4")
        .appendField(new Blockly.FieldLabelSerializable("RS 4"), "RS4")
        .appendField("=")
        .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"]]), "Value_RS4")
        .appendField("then");
    this.appendStatementInput("move")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["Left","left"], ["Right","right"], ["Forward","forward"], ["Backward","backward"], ["Turn Around","deg360"], ["Stop","stop"]]), "move_dropdown")
        .appendField("at");
    this.appendValueInput("speed")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("delay")
        .appendField(new Blockly.FieldTextInput("0"), "delay");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("void setup                                   .");
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("void loop                                    .");
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line Follower");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wall Follower");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("front distance");
    this.setOutput(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['en'] = {
  init: function() {
    this.appendValueInput("right_moto_speed")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("speed of right motor = ");
    this.appendValueInput("left_motor_speed")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("left motor = ");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Comment = ")
        .appendField(new Blockly.FieldTextInput("Add Comment"), "comment");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print = ")
        .appendField(new Blockly.FieldTextInput("Print"), "print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['s1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S1 = ")
        .appendField(new Blockly.FieldDropdown([["0","low"], ["1","high"]]), "Value_LS4");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['s2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S2 = ")
        .appendField(new Blockly.FieldDropdown([["0","low"], ["1","high"]]), "Value_LS4");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['s3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S3 = ")
        .appendField(new Blockly.FieldDropdown([["0","low"], ["1","high"]]), "Value_LS4");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['s4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S4 = ")
        .appendField(new Blockly.FieldDropdown([["0","low"], ["1","high"]]), "Value_LS4");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['s5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("S5 = ")
        .appendField(new Blockly.FieldDropdown([["0","low"], ["1","high"]]), "Value_LS4");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ir1'] = {
  init: function() {
    this.appendValueInput("S1")
        .setCheck(null);
    this.appendValueInput("S2")
        .setCheck(null);
    this.appendValueInput("S3")
        .setCheck(null);
    this.appendValueInput("S4")
        .setCheck(null);
    this.appendValueInput("S5")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#cc0099");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ir2'] = {
  init: function() {
    this.appendValueInput("S2")
        .setCheck(null);
    this.appendValueInput("S3")
        .setCheck(null);
    this.appendValueInput("S4")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remote'] = {
  init: function() {
    this.appendDummyInput();
      this.gradient = new ColourGradient();
    this.appendValueInput("button_set_1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("                 ");
    this.appendValueInput("button_set_2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour("#753a88", "#fff");
 this.setTooltip("");
 this.setHelpUrl("");
  },
    onchange : function() {
		/* Adding a vertical gradient to the example block */
        this.gradient.setVerticalGradient(
            this, { 
                "start" : "#CB2B5E",
                "stop" : this.getColour() 
            }, ["linear"]
        );
	}
};

Blockly.Blocks['_1'] = {
  init: function() {
    this.appendValueInput("set1")
        .setCheck(null);
      this.gradient = new ColourGradient();
    this.appendValueInput("set2")
        .setCheck(null);
    this.appendValueInput("set3")
        .setCheck(null);
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#753a88");
 this.setTooltip("");
 this.setHelpUrl("");
  },
    onchange : function() {
		/* Adding a vertical gradient to the example block */
        this.gradient.setVerticalGradient(
            this, { 
                "start" : "#CB2B5E",
                "stop" : this.getColour() 
            }, ["blub"]
        );
	}
};

Blockly.Blocks['button_horizontal_slot_1'] = {
  init: function() {
    this.appendValueInput("button_set_1")
        .setCheck(null);
      this.gradient = new ColourGradient();
    this.appendValueInput("button_set_2")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#753a88");
 this.setTooltip("");
 this.setHelpUrl("");
  },
    onchange : function() {
		/* Adding a vertical gradient to the example block */
        this.gradient.setVerticalGradient(
            this, { 
                "start" : "#CB2B5E",
                "stop" : this.getColour() 
            }, ["blub"]
        );
	}
};

Blockly.Blocks['button_horizontal_slot_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("             ");
    this.appendValueInput("button_set_3")
        .setCheck(null);
      this.gradient = new ColourGradient();
    this.appendDummyInput()
        .appendField("            ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#753a88");
 this.setTooltip("");
 this.setHelpUrl("");
  },
    onchange : function() {
		/* Adding a vertical gradient to the example block */
        this.gradient.setVerticalGradient(
            this, { 
                "start" : "#CB2B5E",
                "stop" : this.getColour() 
            }, ["blub"]
        );
	}
};

Blockly.Blocks['remote_option_1'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://gawande1216.github.io/Arduino-Blockly/button7.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([[{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%201.png","width":70,"height":20,"alt":"Forward"},"forward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%202.png","width":70,"height":20,"alt":"Backward"},"backward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%203.png","width":70,"height":20,"alt":"Left"},"left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%204.png","width":70,"height":20,"alt":"Right"},"right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%205.png","width":70,"height":20,"alt":"Spin Left"},"spin_left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%206.png","width":70,"height":20,"alt":"Spin Right"},"spin_right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%207.png","width":70,"height":20,"alt":"LED"},"led()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%208.png","width":70,"height":20,"alt":"Buzzer"},"buzzer()"]]), "options_dropdown");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#cdcdcd");
      this.gradient = new ColourGradient();
 this.setTooltip("");
 this.setHelpUrl("");
  }
//    ,
//    onchange : function() {
//		/* Adding a vertical gradient to the example block */
//        this.gradient.setVerticalGradient(
//            this, { 
//                "start" : "#CB2B5E",
//                "stop" : this.getColour() 
//            }, ["blub"]
//        );
//	}
};

Blockly.Blocks['remote_option_2'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://gawande1216.github.io/Arduino-Blockly/button8.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([[{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%201.png","width":70,"height":20,"alt":"Forward"},"forward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%202.png","width":70,"height":20,"alt":"Backward"},"backward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%203.png","width":70,"height":20,"alt":"Left"},"left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%204.png","width":70,"height":20,"alt":"Right"},"right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%205.png","width":70,"height":20,"alt":"Spin Left"},"spin_left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%206.png","width":70,"height":20,"alt":"Spin Right"},"spin_right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%207.png","width":70,"height":20,"alt":"LED"},"led()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%208.png","width":70,"height":20,"alt":"Buzzer"},"buzzer()"]]), "options_dropdown");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#cdcdcd");
      this.gradient = new ColourGradient();
 this.setTooltip("");
 this.setHelpUrl("");
  }
//    ,
//    onchange : function() {
//		/* Adding a vertical gradient to the example block */
//        this.gradient.setVerticalGradient(
//            this, { 
//                "start" : "#CB2B5E",
//                "stop" : this.getColour() 
//            }, ["blub"]
//        );
//	}
};

Blockly.Blocks['remote_option_3'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://gawande1216.github.io/Arduino-Blockly/button5.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([[{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%201.png","width":70,"height":20,"alt":"Forward"},"forward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%202.png","width":70,"height":20,"alt":"Backward"},"backward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%203.png","width":70,"height":20,"alt":"Left"},"left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%204.png","width":70,"height":20,"alt":"Right"},"right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%205.png","width":70,"height":20,"alt":"Spin Left"},"spin_left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%206.png","width":70,"height":20,"alt":"Spin Right"},"spin_right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%207.png","width":70,"height":20,"alt":"LED"},"led()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%208.png","width":70,"height":20,"alt":"Buzzer"},"buzzer()"]]), "options_dropdown");
    this.setInputsInline(false);
    this.setOutput(true, null);
      this.gradient = new ColourGradient();
    this.setColour("#cdcdcd");
 this.setTooltip("");
 this.setHelpUrl("");
  }
//    ,
//    onchange : function() {
//		/* Adding a vertical gradient to the example block */
//        this.gradient.setVerticalGradient(
//            this, { 
//                "start" : "#CB2B5E",
//                "stop" : this.getColour() 
//            }, ["blub"]
//        );
//	}
};

Blockly.Blocks['remote_option_4'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://gawande1216.github.io/Arduino-Blockly/button6.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([[{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%201.png","width":70,"height":20,"alt":"Forward"},"forward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%202.png","width":70,"height":20,"alt":"Backward"},"backward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%203.png","width":70,"height":20,"alt":"Left"},"left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%204.png","width":70,"height":20,"alt":"Right"},"right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%205.png","width":70,"height":20,"alt":"Spin Left"},"spin_left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%206.png","width":70,"height":20,"alt":"Spin Right"},"spin_right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%207.png","width":70,"height":20,"alt":"LED"},"led()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%208.png","width":70,"height":20,"alt":"Buzzer"},"buzzer()"]]), "options_dropdown");
    this.setInputsInline(false);
      this.gradient = new ColourGradient();
    this.setOutput(true, null);
    this.setColour("#cdcdcd");
 this.setTooltip("");
 this.setHelpUrl("");
  }
//    ,
//    onchange : function() {
//		/* Adding a vertical gradient to the example block */
//        this.gradient.setVerticalGradient(
//            this, { 
//                "start" : "#CB2B5E",
//                "stop" : this.getColour() 
//            }, ["blub"]
//        );
//	}
};

Blockly.Blocks['remote_option_5'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://gawande1216.github.io/Arduino-Blockly/button1.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([[{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%201.png","width":70,"height":20,"alt":"Forward"},"forward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%202.png","width":70,"height":20,"alt":"Backward"},"backward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%203.png","width":70,"height":20,"alt":"Left"},"left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%204.png","width":70,"height":20,"alt":"Right"},"right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%205.png","width":70,"height":20,"alt":"Spin Left"},"spin_left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%206.png","width":70,"height":20,"alt":"Spin Right"},"spin_right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%207.png","width":70,"height":20,"alt":"LED"},"led()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%208.png","width":70,"height":20,"alt":"Buzzer"},"buzzer()"]]), "options_dropdown");
    this.setInputsInline(false);
    this.setOutput(true, null);
      this.gradient = new ColourGradient();
    this.setColour("#cdcdcd");
 this.setTooltip("");
 this.setHelpUrl("");
  }
//    ,
//    onchange : function() {
//		/* Adding a vertical gradient to the example block */
//        this.gradient.setVerticalGradient(
//            this, { 
//                "start" : "#CB2B5E",
//                "stop" : this.getColour() 
//            },
//        );
//	}
};

Blockly.Blocks['remote_option_6'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://gawande1216.github.io/Arduino-Blockly/button2.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([[{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%201.png","width":70,"height":20,"alt":"Forward"},"forward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%202.png","width":70,"height":20,"alt":"Backward"},"backward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%203.png","width":70,"height":20,"alt":"Left"},"left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%204.png","width":70,"height":20,"alt":"Right"},"right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%205.png","width":70,"height":20,"alt":"Spin Left"},"spin_left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%206.png","width":70,"height":20,"alt":"Spin Right"},"spin_right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%207.png","width":70,"height":20,"alt":"LED"},"led()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%208.png","width":70,"height":20,"alt":"Buzzer"},"buzzer()"]]), "options_dropdown");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#cdcdcd");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['remote_option_7'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://gawande1216.github.io/Arduino-Blockly/button3.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([[{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%201.png","width":70,"height":20,"alt":"Forward"},"forward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%202.png","width":70,"height":20,"alt":"Backward"},"backward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%203.png","width":70,"height":20,"alt":"Left"},"left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%204.png","width":70,"height":20,"alt":"Right"},"right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%205.png","width":70,"height":20,"alt":"Spin Left"},"spin_left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%206.png","width":70,"height":20,"alt":"Spin Right"},"spin_right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%207.png","width":70,"height":20,"alt":"LED"},"led()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%208.png","width":70,"height":20,"alt":"Buzzer"},"buzzer()"]]), "options_dropdown");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#cdcdcd");
 this.setTooltip("");
 this.setHelpUrl("");
  },
    onchange : function() {
		/* Adding a vertical gradient to the example block */
        this.gradient.setVerticalGradient(
            this, { 
                "start" : "#CB2B5E",
                "stop" : this.getColour() 
            }, ["blub"]
        );
	}
//    ,
//    onchange : function() {
//		/* Adding a vertical gradient to the example block */
//        this.gradient.setVerticalGradient(
//            this, { 
//                "start" : "#CB2B5E",
//                "stop" : this.getColour() 
//            }, ["blub"]
//        );
//	}
};

Blockly.Blocks['remote_option_8'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://gawande1216.github.io/Arduino-Blockly/button4.png", 40, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([[{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%201.png","width":70,"height":20,"alt":"Forward"},"forward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%202.png","width":70,"height":20,"alt":"Backward"},"backward()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%203.png","width":70,"height":20,"alt":"Left"},"left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%204.png","width":70,"height":20,"alt":"Right"},"right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%205.png","width":70,"height":20,"alt":"Spin Left"},"spin_left()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%206.png","width":70,"height":20,"alt":"Spin Right"},"spin_right()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%207.png","width":70,"height":20,"alt":"LED"},"led()"], [{"src":"https://gawande1216.github.io/Arduino-Blockly/Group%208.png","width":70,"height":20,"alt":"Buzzer"},"buzzer()"]]), "options_dropdown");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour("#cdcdcd");
      this.gradient = new ColourGradient();
 this.setTooltip("");
 this.setHelpUrl("");
  }
//    ,
//    onchange : function() {
//		/* Adding a vertical gradient to the example block */
//        this.gradient.setVerticalGradient(
//            this, { 
//                "start" : "#CB2B5E",
//                "stop" : this.getColour() 
//            }, ["blub"]
//        );
//	}
};

Blockly.Blocks['move_line_follower'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["Left","left"], ["Right","right"], ["Forward","forward"], ["Backward","backward"], ["Turn Around","deg360"], ["Stop","stop"]]), "move_dropdown")
        .appendField("at");
    this.appendValueInput("speed")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
