<template>
    <div id="remember">
         <form action="" id="form">
             <h4>您绑定的手机号码为 {{this.phone}}</h4>
            <input type="text" class="text" placeholder="请输入新的支付密码"><br/>
            <input type="text" class="text" placeholder="请确认新的支付密码"><br/>
             <div>
                 <input type="text" class="code" placeholder="验证码">
                 <input type="button" class="acquire" value="发送验证码">
             </div><br/>
            <button type="submit" id="btn">提交</button>
        </form>
    </div>
</template>

<script>
export default {
   name:'',
   data(){
       return{
           phone:'',
       }
   },
   methods:{
       getPhone(){
           let mobile = localStorage.bindPhone
           if(mobile === undefined){
               return;
           }else{
                mobile = "" + mobile;
                this.phone = mobile.substr(0,3) + "****" + mobile.substr(7)
                console.log(this.phone)
           }
          
       }
   },
   created(){
       this.getPhone()
   }
}
</script>
<style lang="scss" scoped>
#remember{

      #form{
          width: 100%;
          height: 290px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h4{
              width:262px;
              font-size: 13px;
              padding: 5px 0;
              box-sizing: border-box;
              color: #444;
          }
           .text{
               width: 262.5px;
               height: 35px;
               padding-left:10px;
               box-sizing: border-box;
               border-radius: 5px;
               border: 1px solid #919191;
           }
           div{
                display: flex;
               .code{
                    width: 162.5px;
                    height: 35px;
                    padding-left:10px;
                    box-sizing: border-box;
                    border-radius: 5px;
                    border: 1px solid #919191;
                    margin-right: 2px;
                   }
                .acquire{
                    width: 100px;
                    height: 35px;
                    display: block;
                    color: initial;
                    border-radius: 5px;
                    border: 1px solid;
                    font-size: 14px;
                    color: #333;
                    background: none;
                    font-weight: 400;
                }
            }
           button{
               width: 267px;
               height: 35px;
               line-height: 35px;
               background: #f3b40b;
               color: #fff;
               outline: none;
               border:none;
               border-radius: 5px;
               font-size: 16px;
           }
       }
}
</style>

