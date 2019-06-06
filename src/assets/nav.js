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
  
function test(){
   this.a = 1;
   this.b = function(){
      console.log(this.a)
   }
}
test.prototype = {
  b:function(){
     this.a =2;
     console.log(this.a)
  }
}