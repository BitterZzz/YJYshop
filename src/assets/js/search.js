$(function(){
     $(".c_banner").hide();
     
     $("#bannerBtn").click(function(){
         var bannerHref = $("#BannerHref").val();
         var banenrSrc = $("#bannerSrc").val();
         
         $(".banner a").attr("href",bannerHref);
         $(".banner img").attr("src",banenrSrc);

         $(".c_banner").hide();
     })
     
})
  function bannerShow(){
      $(".c_banner").show();
  }