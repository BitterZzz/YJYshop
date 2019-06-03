<template>
<div>
  <div id="tabs">
           <ul id="top" onclick="topshow()">
             <a  href="javascript:void(0)"  class="txt">
               <img src="https://www.eg-live.com/Storage/template/0/20190412/6369067767382133504915164.jpg" alt="">
             </a>
           </ul>
           <ul id="main" onclick="showDiv()">
                   <li id="newDivOne">
                     <a  href="javascript:void(0)">
                         <img src="https://www.eg-live.com/Storage/Shop/1/Products/1492/1_350.png" alt="" srcset="">
                         <span>林肯新源1</span>
                     </a>
                   </li>
                    <li id="newDivTwo">
                      <a  href="javascript:void(0)">
                          <img src="https://www.eg-live.com/Storage/Shop/1/Products/1476/1_350.png" alt="" srcset="">
                          <span>林肯新源2</span>
                      </a>
                    </li>
                     <li id="newDivThree">
                        <a  href="javascript:void(0)">
                            <img src="https://www.eg-live.com/Storage/Shop/1/Products/1493/1_350.png" alt="" srcset="">
                            <span>林肯新源3</span>
                        </a>
                      </li>
                      <li id="newDivFour">
                          <a  href="javascript:void(0)">
                              <img src="https://www.eg-live.com/Storage/Shop/1/Products/1354/1_350.png" alt="" srcset="">
                              <span>林肯新源4</span>
                          </a>
                        </li>
           </ul>
     </div>

     <div id="alter">
             <div class="alter_t">
                <ul>
                  <li id="writeHref">商品地址<input type="text" id="textHref" placeholder="地址"></li>
                  <li id="writeSrc">图片地址<input type="text" id="textSrc" placeholder="路径"></li>
                  <li id="writeTitle">&nbsp; 标 &nbsp;&nbsp;题 &nbsp;<input type="text" id="textTitle" placeholder="标题"></li>
                </ul> <br/><br/>
                <ul>
                    <li id="writeHrefTwo">商品地址<input type="text" id="textHrefTwo" placeholder="地址"></li>
                    <li id="writeSrcTwo">图片地址<input type="text" id="textSrcTwo" placeholder="路径"></li>
                    <li id="writeTitleTwo">&nbsp; 标 &nbsp;&nbsp;题 &nbsp;<input type="text" id="textTitleTwo" placeholder="标题"></li>
                  </ul>  <br/><br/>
                  <ul> 
                      <li id="writeHrefThree">商品地址<input type="text" id="textHrefThree" placeholder="地址"></li>
                      <li id="writeSrcThree">图片地址<input type="text" id="textSrcThree" placeholder="路径"></li>
                      <li id="writeTitleThree">&nbsp; 标 &nbsp;&nbsp;题 &nbsp;<input type="text" id="textTitleThree" placeholder="标题"></li>
                    </ul> <br/><br/>
                    <ul>
                        <li id="writeHrefFour">商品地址<input type="text" id="textHrefFour" placeholder="地址"></li>
                        <li id="writeSrcFour">图片地址<input type="text" id="textSrcFour" placeholder="路径"></li>
                        <li id="writeTitleFour">&nbsp; 标 &nbsp;&nbsp;题 &nbsp;<input type="text" id="textTitleFour" placeholder="标题"></li>
                    </ul>   
                <button type="submit" id="btn">保存</button>
             </div>
      </div>
       <div id="show">
              <h2>banner 轮播图</h2>
             <li id="writeHref">地址路径：<input type="text" placeholder="地址" id="textHrefshow"></li>
             <li id="writeSrc">图片路径：<input type="text" placeholder="路径" id="textSrcshow"></li>
             <button type="submit" id="btntop">保存</button>
       </div>
</div>
</template>

<script>
$(function () {

    $("#alter").hide();

    $("#btn").click(function(){
           var textHref = $("#textHref").val();
           var textSrc = $("#textSrc").val();
           var textTitle = $("#textTitle").val();

           var textHref1 = $("#textHrefTwo").val();
           var textSrc1 = $("#textSrcTwo").val();
           var textTitle1 = $("#textTitleTwo").val();

           var textHref2 = $("#textHrefThree").val();
           var textSrc2 = $("#textSrcThree").val();
           var textTitle2 = $("#textTitleThree").val();

           var textHref3 = $("#textHrefFour").val();
           var textSrc3 = $("#textSrcFour").val();
           var textTitle3 = $("#textTitleFour").val();

           $("#newDivOne a").attr("href",textHref);
           $("#newDivOne img").attr("src", textSrc);
           $("#newDivOne span").text(textTitle);
           
           $("#newDivTwo a").attr("href",textHref1);
           $("#newDivTwo img").attr("src", textSrc1);
           $("#newDivTwo span").text(textTitle1);

           $("#newDivThree a").attr("href",textHref2);
           $("#newDivThree img").attr("src", textSrc2);
           $("#newDivThree span").text(textTitle2);

           $("#newDivFour a").attr("href",textHref3);
           $("#newDivFour img").attr("src", textSrc3);
           $("#newDivFour span").text(textTitle3);

          $("#alter").hide();
    })
    
  })
  function showDiv(){
    $("#alter").show()
  }

  
  $(function () {

      $("#show").hide();

      $("#btntop").click(function(){
            var textHref = $("#textHrefshow").val();
            var textSrc = $("#textSrcshow").val();
            
            $("#top a").attr("href",textHref); 
            $("#top img").attr("src", textSrc);
           

            $("#show").hide();
      })

      })

 
  function topshow(){
    $("#show").show()
  }
export default {
  name:'app-tabs',
  
}
</script>

<style lang="scss" scoped>
 *{
         margin: 0;
         padding: 0;
       }
       li{
         list-style: none;
       }
       a{
         text-decoration: none;
       }
       #top{
       cursor: pointer;
       width: 375px;
       border: 1px solid red;
       
       }
       #top .txt{
         display: block;
         width: 375px;
        
       }
       #top img{
         width: 100%;
       }
      
       #main img{
           width: 100%;
       }
       #main{
        display: flex;
        margin: 10px 0;
        border: 1px solid blue;
        width: 375px;
       }
  
       
      #main img{
            width: 93.25px;
            height: 93.25px;
          }
</style>
