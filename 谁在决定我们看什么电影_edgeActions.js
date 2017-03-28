/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         // Be careful not to block or do too much work!
         // Hide an element 
         sym.$("part2").hide();
         
         // Hide an element 
         sym.$("part3").hide();
         
         // Hide an element 
         sym.$("part4").hide();
         
         // Hide an element 
         sym.$("part5").hide();
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'part1'
   (function(symbolName) {   
   
   })("part1");
   //Edge symbol end:'part1'

   //=========================================================
   
   //Edge symbol: 'daohang'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         
         // Hide an element 
         sym.$("top").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${down}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.getComposition().getStage().$("part5").show();
         
         // Hide an element 
         sym.getComposition().getStage().$("fengmian").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part2").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part3").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part4").hide();
         
         sym.getComposition().getStage().getSymbol("part5").play();
         
         // Hide an element 
         sym.$("down").hide();
         // Show an element 
         sym.getComposition().getStage().getSymbol("daohang").$("top").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${top}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         sym.getComposition().getStage().$("fengmian").show();
         
         // Hide an element 
         sym.getComposition().getStage().$("part2").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part3").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part4").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part5").hide();
         
         // Hide an element 
         sym.$("top").hide();
         // Show an element 
         sym.getComposition().getStage().getSymbol("daohang").$("down").show();

      });
      //Edge binding end

   })("daohang");
   //Edge symbol end:'daohang'

   //=========================================================
   
   //Edge symbol: 'tab1'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${tab}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tab}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         sym.playReverse();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${tab}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Show an element 
         sym.getComposition().getStage().$("part2").show();
         
         // Hide an element 
         sym.getComposition().getStage().$("part3").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part4").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part5").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("daohang").$("top").show();
         // Show an element 
         sym.getComposition().getStage().getSymbol("daohang").$("down").show();
         

      });
      //Edge binding end

   })("tab1");
   //Edge symbol end:'tab1'

   //=========================================================
   
   //Edge symbol: 'tab2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${tab}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tab}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tab}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.getComposition().getStage().$("fengmian").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part2").hide();
         
         // Show an element 
         sym.getComposition().getStage().$("part3").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").$("two").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").$("taib1_hui").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").$("tab2_hong").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").$("tab1_hong").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").$("tab2_hui").show();
         
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").$("one").show();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("one").play(0);
         
         // Hide an element 
         sym.getComposition().getStage().$("part4").hide();
         // Hide an element 
         sym.getComposition().getStage().$("part5").hide();
         // Show an element 
         sym.getComposition().getStage().getSymbol("daohang").$("top").show();
         // Show an element 
         sym.getComposition().getStage().getSymbol("daohang").$("down").show();

      });
      //Edge binding end

   })("tab2");
   //Edge symbol end:'tab2'

   //=========================================================
   
   //Edge symbol: 'tab3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${tab}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tab}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tab}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.getComposition().getStage().$("part4").show();
         
         // Hide an element 
         sym.getComposition().getStage().$("part3").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("part2").hide();
         
         // Hide an element 
         sym.getComposition().getStage().$("fengmian").hide();
         // Hide an element 
         sym.getComposition().getStage().$("part5").hide();
         // Show an element 
         sym.getComposition().getStage().getSymbol("daohang").$("top").show();
         // Show an element 
         sym.getComposition().getStage().getSymbol("daohang").$("down").show();

      });
      //Edge binding end

   })("tab3");
   //Edge symbol end:'tab3'

   //=========================================================
   
   //Edge symbol: 'part2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_1905_x316_y503}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_1905__x320y361").hide();
         

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         
         // Hide an element 
         sym.$("_1905__x192_y145").hide();
         
         // Hide an element 
         sym.$("_2010__x1036_y126").hide();
         
         // Hide an element 
         sym.$("_2008__x864_y550").hide();
         
         // Hide an element 
         sym.$("_1909__x275_y545").hide();
         
         // Hide an element 
         sym.$("_1949__x460_y108").hide();
         
         // Hide an element 
         sym.$("_1922__x442_y545").hide();
         
         // Hide an element 
         sym.$("_1920__x327_y242").hide();
         
         
         // Hide an element 
         sym.$("_2003_x744_y78").hide();
         
         // Hide an element 
         sym.$("_2013_x1213_y581").hide();
         
         // Hide an element 
         sym.$("_1993__x655_y545").hide();
         
         // Hide an element 
         sym.$("_2015__x1426_y88").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1905}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Show an element 
         sym.$("_1905__x192_y145").show();
         
         // Hide an element 
         sym.$("_1905__x320y361").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1905}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         // Hide an element 
         sym.$("_1905__x192_y145").hide();
         
         // Show an element 
         sym.$("_1905__x320y361").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1909}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_1909__x381_y549").hide();
         
         // Show an element 
         sym.$("_1909__x275_y545").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1909}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_1909__x275_y545").hide();
         
         // Show an element 
         sym.$("_1909__x381_y549").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1920}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_1920__x465_y362").hide();
         
         // Show an element 
         sym.$("_1920__x327_y242").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1920}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_1920__x327_y242").hide();
         
         // Show an element 
         sym.$("_1920__x465_y362").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1922}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_1922__x548_y556").hide();
         
         // Show an element 
         sym.$("_1922__x442_y545").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1922}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_1922__x442_y545").hide();
         
         // Show an element 
         sym.$("_1922__x548_y556").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1949}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_1949__x616_y230").hide();
         
         // Show an element 
         sym.$("_1949__x460_y108").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1949}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_1949__x460_y108").hide();
         
         // Show an element 
         sym.$("_1949__x616_y230").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2003}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Hide an element 
         sym.$("_2003__x873_y261").hide();
         
         // Show an element 
         sym.$("_2003_x744_y78").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2013}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_2013__x1356_y601").hide();
         
         // Show an element 
         sym.$("_2013_x1213_y581").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2013}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_2013_x1213_y581").hide();
         
         // Show an element 
         sym.$("_2013__x1356_y601").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2003}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_2003_x744_y78").hide();
         
         // Show an element 
         sym.$("_2003__x873_y261").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1993}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_1993__x752_y611").hide();
         
         // Show an element 
         sym.$("_1993__x655_y545").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1993}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_1993__x655_y545").hide();
         
         // Show an element 
         sym.$("_1993__x752_y611").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2008}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_2008_-x987_y611").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part2").$("_2008__x864_y550").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2008}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_2008__x864_y550").hide();
         
         // Show an element 
         sym.$("_2008_-x987_y611").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2010}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_2010__x1140_y190").hide();
         
         // Show an element 
         sym.$("_2010__x1036_y126").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2010}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_2010__x1036_y126").hide();
         
         // Show an element 
         sym.$("_2010__x1140_y190").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2015}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Hide an element 
         sym.$("_2015__x1564_y168").hide();
         
         // Show an element 
         sym.$("_2015__x1426_y88").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2015}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_2015__x1426_y88").hide();
         
         // Show an element 
         sym.$("_2015__x1564_y168").show();
         

      });
      //Edge binding end

   })("part2");
   //Edge symbol end:'part2'

   //=========================================================
   
   //Edge symbol: 'daban'
   (function(symbolName) {   
   
      

   })("daban");
   //Edge symbol end:'daban'

   //=========================================================
   
   //Edge symbol: 'tab1-2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_tab1_mouseOver_X1653_Y355__x1849_Y}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tab1_mouseOver_X1653_Y355__x1849_Y}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tab1_mouseOver_X1653_Y355__x1849_Y}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.getComposition().getStage().$("part2").show();
         
         // Hide an element 
         sym.getComposition().getStage().$("part3").hide();
         

      });
      //Edge binding end

   })("tab1-2");
   //Edge symbol end:'tab1-2'

   //=========================================================
   
   //Edge symbol: 'part3'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         // Hide an element 
         sym.$("taib1_hui").hide();
         
         // Hide an element 
         sym.$("tab2_hong").hide();
         
         // Be careful not to block or do too much work!

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${taib1_hui}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("one").show();
         
         // Hide an element 
         sym.$("two").hide();
         
         // Hide an element 
         sym.$("taib1_hui").hide();
         
         // Show an element 
         sym.$("tab1_hong").show();
         
         // Hide an element 
         sym.$("tab2_hong").hide();
         
         // Show an element 
         sym.$("tab2_hui").show();
         
         sym.getSymbol("one").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tab2_hui}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("one").hide();
         
         // Show an element 
         sym.getSymbol("two").$("zhipianrenjieshao").show();
         
         // Show an element 
         sym.$("two").show();
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("two").getSymbol("houqi2").play(0);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("two").getSymbol("chupinren").play(0);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("two").getSymbol("bianju2").play(0);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("two").getSymbol("daoyan2").play(0);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("two").getSymbol("jianzhi2").play(0);
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("two").getSymbol("xiaoyuan2").play(0);
         // Hide an element 
         sym.getSymbol("two").$("__x1050_272").hide();
         
         // Hide an element 
         sym.getSymbol("two").getSymbol("jianzhi2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("two").getSymbol("jianzhi2").$("jianzhi").show();
         
         // Hide an element 
         sym.getSymbol("two").getSymbol("houqi2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("two").getSymbol("houqi2").$("houqi").show();
         
         // Hide an element 
         sym.getSymbol("two").getSymbol("chupinren").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("two").getSymbol("chupinren").$("chupren").show();
         
         // Hide an element 
         sym.getSymbol("two").getSymbol("daoyan2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("two").getSymbol("daoyan2").$("daoyan").show();
         
         // Hide an element 
         sym.getSymbol("two").getSymbol("daoyan2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("two").getSymbol("daoyan2").$("daoyan").show();
         
         // Hide an element 
         sym.getSymbol("two").getSymbol("bianju2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("two").getSymbol("bianju2").$("bianju").show();
         
         // Hide an element 
         sym.getSymbol("two").$("houqi").hide();
         
         // Hide an element 
         sym.getSymbol("two").$("chupinren1").hide();
         
         // Hide an element 
         sym.getSymbol("two").$("jianzhi").hide();
         
         // Hide an element 
         sym.getSymbol("two").$("jianzhi").hide();
         
         // Hide an element 
         sym.getSymbol("two").$("daoyan").hide();
         
         // Hide an element 
         sym.getSymbol("two").$("bianju").hide();
         
         
         // Hide an element 
         sym.$("tab2_hui").hide();
         
         // Show an element 
         sym.$("tab2_hong").show();
         
         // Hide an element 
         sym.$("tab1_hong").hide();
         
         // Show an element 
         sym.$("taib1_hui").show();
         

      });
      //Edge binding end

   })("part3");
   //Edge symbol end:'part3'

   //=========================================================
   
   //Edge symbol: 'bianju1'
   (function(symbolName) {   
   
   })("bianju1");
   //Edge symbol end:'bianju1'

   //=========================================================
   
   //Edge symbol: 'chupinren1'
   (function(symbolName) {   
   
   })("chupinren1");
   //Edge symbol end:'chupinren1'

   //=========================================================
   
   //Edge symbol: 'daoyan1'
   (function(symbolName) {   
   
   })("daoyan1");
   //Edge symbol end:'daoyan1'

   //=========================================================
   
   //Edge symbol: 'houqi1'
   (function(symbolName) {   
   
   })("houqi1");
   //Edge symbol end:'houqi1'

   //=========================================================
   
   //Edge symbol: 'jianzhi1'
   (function(symbolName) {   
   
   })("jianzhi1");
   //Edge symbol end:'jianzhi1'

   //=========================================================
   
   //Edge symbol: 'bianqu'
   (function(symbolName) {   
   
   })("bianqu");
   //Edge symbol end:'bianqu'

   //=========================================================
   
   //Edge symbol: 'chuzifangdaibiao'
   (function(symbolName) {   
   
   })("chuzifangdaibiao");
   //Edge symbol end:'chuzifangdaibiao'

   //=========================================================
   
   //Edge symbol: 'jianji'
   (function(symbolName) {   
   
   })("jianji");
   //Edge symbol end:'jianji'

   //=========================================================
   
   //Edge symbol: 'qita'
   (function(symbolName) {   
   
   })("qita");
   //Edge symbol end:'qita'

   //=========================================================
   
   //Edge symbol: 'shexiang'
   (function(symbolName) {   
   
   })("shexiang");
   //Edge symbol end:'shexiang'

   //=========================================================
   
   //Edge symbol: 'yanyuan'
   (function(symbolName) {   
   
   })("yanyuan");
   //Edge symbol end:'yanyuan'

   //=========================================================
   
   //Edge symbol: 'yingshidawan'
   (function(symbolName) {   
   
   })("yingshidawan");
   //Edge symbol end:'yingshidawan'

   //=========================================================
   
   //Edge symbol: 'daoyan11'
   (function(symbolName) {   
   
   })("daoyan11");
   //Edge symbol end:'daoyan11'

   //=========================================================
   
   //Edge symbol: 'part3-1'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         
         // Hide an element 
         sym.getSymbol("jianzhi2").$("_2").hide();
         
         // Hide an element 
         sym.getSymbol("houqi2").$("_2").hide();
         
         // Hide an element 
         sym.getSymbol("chupinren").$("_2").hide();
         
         // Hide an element 
         sym.getSymbol("daoyan2").$("_2").hide();
         
         // Hide an element 
         sym.getSymbol("bianju2").$("_2").hide();
         
         
         // Hide an element 
         sym.$("houqi").hide();
         
         // Hide an element 
         sym.$("chupinren1").hide();
         
         // Hide an element 
         sym.$("jianzhi").hide();
         
         // Hide an element 
         sym.$("daoyan").hide();
         
         // Hide an element 
         sym.$("bianju").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${zhipianren}", "click", function(sym, e) {
         // insert code for mouse click here
         // Show an element 
         sym.$("zhipianrenjieshao").show();
         
         // Hide an element 
         sym.$("houqi").hide();
         
         // Hide an element 
         sym.$("chupinren1").hide();
         
         // Hide an element 
         sym.$("jianzhi").hide();
         
         // Hide an element 
         sym.$("daoyan").hide();
         
         // Hide an element 
         sym.$("bianju").hide();
         
         
         // Hide an element 
         sym.getSymbol("houqi2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("houqi2").$("houqi").show();
         
         // Hide an element 
         sym.getSymbol("chupinren").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("chupinren").$("chupren").show();
         
         // Hide an element 
         sym.getSymbol("jianzhi2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("jianzhi2").$("jianzhi").show();
         
         // Hide an element 
         sym.getSymbol("daoyan2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("daoyan2").$("daoyan").show();
         
         // Hide an element 
         sym.getSymbol("bianju2").$("_2").hide();
         
         // Show an element 
         sym.getSymbol("bianju2").$("bianju").show();

      });
      //Edge binding end

   })("part3-1");
   //Edge symbol end:'part3-1'

   //=========================================================
   
   //Edge symbol: 'part3-2'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         // Hide an element 
         sym.$("_1__x126_y387").hide();
         
         // Hide an element 
         sym.$("_4_x1292_y402").hide();
         
         // Hide an element 
         sym.$("_3_x684_y363").hide();
         
         // Hide an element 
         sym.$("_2_x369_y349").hide();
         
         // Hide an element 
         sym.$("_5__x1589_y641").hide();
         
         // Hide an element 
         sym.$("_6__x1290_y668").hide();
         
         // Hide an element 
         sym.$("_7__x945_y660").hide();
         
         // Hide an element 
         sym.$("_8__x401_y684").hide();
         
         // Hide an element 
         sym.$("_9__x219_y789").hide();
         
         // Hide an element 
         sym.$("_10__x882_y873").hide();
         
         // Be careful not to block or do too much work!

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1_x103_y162}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_1__x126_y387").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1_x103_y162}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_1__x126_y387").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2_x366_y184}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_2_x369_y349").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2_x366_y184}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_2_x369_y349").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_3_x686_y184}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_3_x684_y363").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_3_x686_y184}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_3_x684_y363").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_4_x1011_y195}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_4_x1292_y402").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_4_x1011_y195}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_4_x1292_y402").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_5_x1590_y388}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_5__x1589_y641").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_5_x1590_y388}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_5__x1589_y641").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_6_x1277_y484}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_6__x1290_y668").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_6_x1277_y484}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_6__x1290_y668").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_7_x935_y467}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_7__x945_y660").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_7_x935_y467}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_7__x945_y660").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_8_x514_y504}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_8__x401_y684").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_8_x514_y504}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_8__x401_y684").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_9_x183_y585}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_9__x219_y789").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_9_x183_y585}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_9__x219_y789").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_10_x660_y680}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_10__x882_y873").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_10_x660_y680}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_10__x882_y873").hide();
         

      });
      //Edge binding end

   })("part3-2");
   //Edge symbol end:'part3-2'

   //=========================================================
   
   //Edge symbol: 'part4'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         
         // Hide an element 
         sym.$("panjinlian1").hide();
         
         // Hide an element 
         sym.$("changcheng1").hide();
         
         // Hide an element 
         sym.$("daoshixiashan1").hide();
         
         // Hide an element 
         sym.$("guilai1").hide();
         
         // Hide an element 
         sym.$("gundanba1").hide();
         
         // Hide an element 
         sym.$("gong1").hide();
         
         // Hide an element 
         sym.$("yibuzhiyao1").hide();
         
         // Hide an element 
         sym.$("xialuote1").hide();
         
         // Hide an element 
         sym.$("xunlongjue1").hide();
         
         // Hide an element 
         sym.$("jianbingxia1").hide();
         
         // Hide an element 
         sym.$("jiejiuwuxiansheng1").hide();
         
         // Hide an element 
         sym.$("tangrenjia1").hide();
         
         // Hide an element 
         sym.$("tongzhuodeni1").hide();
         
         // Hide an element 
         sym.$("luyaozhimali1").hide();
         
         // Hide an element 
         sym.$("_1942-1").hide();
         
         // Hide an element 
         sym.$("sirendingzhi1").hide();
         
         // Hide an element 
         sym.$("shanheguren1").hide();
         
         // Hide an element 
         sym.$("sousuo1").hide();
         
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${xunlongjue}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("xunlongjue1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${xunlongjue}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("xunlongjue1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tongzhuodeni}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("tongzhuodeni1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tongzhuodeni}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("tongzhuodeni1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tangrenjia}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("tangrenjia1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tangrenjia}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("tangrenjia1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${luyaozhimali}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("luyaozhimali1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${luyaozhimali}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("luyaozhimali1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jiejiuwuxiansheng}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("jiejiuwuxiansheng1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jiejiuwuxiansheng}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("jiejiuwuxiansheng1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jianbingxia}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("jianbingxia1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jianbingxia}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("jianbingxia1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gundanba}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("gundanba1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gundanba}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("gundanba1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gong}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("gong1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gong}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("gong1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${changcheng}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("changcheng1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${changcheng}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("changcheng1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1942}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("_1942-1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1942}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("_1942-1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${yibuzhiyao}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("yibuzhiyao1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${yibuzhiyao}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("yibuzhiyao1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${xialuote}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("xialuote1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${xialuote}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("xialuote1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${panjinlian}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("panjinlian1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${panjinlian}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("panjinlian1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sousuo}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("sousuo1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sousuo}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("sousuo1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sirendingzhi}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("sirendingzhi1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sirendingzhi}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("sirendingzhi1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shanheguren}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("shanheguren1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${shanheguren}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("shanheguren1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${guilai}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("guilai1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${guilai}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("guilai1").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${daoshixiashan}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Show an element 
         sym.$("daoshixiashan1").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${daoshixiashan}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Hide an element 
         sym.$("daoshixiashan1").hide();
         

      });
      //Edge binding end

   })("part4");
   //Edge symbol end:'part4'

   //=========================================================
   
   //Edge symbol: 'bianju'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${bianju}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bianju}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bianju}", "click", function(sym, e) {
         // insert code for mouse click here
         // Hide an element 
         sym.$("bianju").hide();
         
         // Show an element 
         sym.$("_2").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").$("houqi").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").$("chupren").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").$("jianzhi").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").$("daoyan").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("zhipianrenjieshao").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("houqi").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("chupinren1").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("jianzhi").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("daoyan").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("bianju").show();
         

      });
      //Edge binding end

   })("bianju");
   //Edge symbol end:'bianju'

   //=========================================================
   
   //Edge symbol: 'chupinren'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${chupren}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${chupren}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${chupren}", "click", function(sym, e) {
         
         // Hide an element 
         sym.$("chupren").hide();
         
         // Show an element 
         sym.$("_2").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").$("houqi").show();
         
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").$("jianzhi").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").$("daoyan").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").$("bianju").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("zhipianrenjieshao").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("houqi").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("chupinren1").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("jianzhi").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("daoyan").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("bianju").hide();
         
         

      });
      //Edge binding end

   })("chupinren");
   //Edge symbol end:'chupinren'

   //=========================================================
   
   //Edge symbol: 'daoyan'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${daoyan}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${daoyan}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseout", function(sym, e) {
         
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${daoyan}", "click", function(sym, e) {
         
         // Hide an element 
         sym.$("daoyan").hide();
         
         // Show an element 
         sym.$("_2").show();
         
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").$("houqi").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").$("chupren").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").$("jianzhi").show();
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").$("bianju").show();
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("zhipianrenjieshao").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("houqi").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("chupinren1").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("jianzhi").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("daoyan").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("bianju").hide();
         
         

      });
      //Edge binding end

   })("daoyan");
   //Edge symbol end:'daoyan'

   //=========================================================
   
   //Edge symbol: 'houqi'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${houqi}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${houqi}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseout", function(sym, e) {
         
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${houqi}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("houqi").hide();
         
         // Show an element 
         sym.$("_2").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").$("chupren").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").$("jianzhi").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").$("daoyan").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").$("bianju").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("zhipianrenjieshao").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("houqi").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("chupinren1").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("jianzhi").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("daoyan").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("bianju").hide();
         
         

      });
      //Edge binding end

   })("houqi");
   //Edge symbol end:'houqi'

   //=========================================================
   
   //Edge symbol: 'jianzhi'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jianzhi}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jianzhi}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").stop();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("jianzhi2").play();
         
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("xiaoyuan2").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jianzhi}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Hide an element 
         sym.$("jianzhi").hide();
         
         // Show an element 
         sym.$("_2").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("houqi2").$("houqi").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("chupinren").$("chupren").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("daoyan2").$("daoyan").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").$("_2").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").getSymbol("bianju2").$("bianju").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("zhipianrenjieshao").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("houqi").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("chupinren1").hide();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("jianzhi").show();
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("daoyan").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("part3").getSymbol("two").$("bianju").hide();
         

      });
      //Edge binding end

   })("jianzhi");
   //Edge symbol end:'jianzhi'

   //=========================================================
   
   //Edge symbol: 'xiaoyuan'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("xiaoyuan");
   //Edge symbol end:'xiaoyuan'

   //=========================================================
   
   //Edge symbol: 'jianzhi12'
   (function(symbolName) {   
   
   })("jianzhi12");
   //Edge symbol end:'jianzhi12'

   //=========================================================
   
   //Edge symbol: 'part5'
   (function(symbolName) {   
   
   })("part5");
   //Edge symbol end:'part5'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-393783007");