<template>
    <div id="formar">
        <form action="" id="form">
            <input type="text" id="oldPassWord" placeholder="原支付密码"><br/>
            <input type="text" id="newPassWord" placeholder="新支付密码"><br/>
            <input type="text" id="notarize" placeholder="确认支付密码"><br/>
            <button type="submit" id="submit" @click="btnAction()">提交</button>
        </form>
    </div>
</template>

<script>
export default {
   name:'',
   data(){
      return{
          oldPwd:'',
          newPwd:'',
          notarizePwd:'',
      }
   },
   methods:{
        btnAction(){
           let that = this
           let oldPwd = document.querySelector("#oldPassWord").value
           let newPwd = document.querySelector("#newPassWord").value
           let notarizePwd = document.querySelector("#notarize").value
           if(oldPwd === "" || newPwd === "" || notarizePwd === ""){
                   let value = "密码输入不能为空"
                   that.showToast(value);
                   return;
           }else if(newPwd !== notarizePwd){
                      let value = "两次密码不一样";
                      that.showToast(value);
                      return;
                }else{
                    console.log(oldPwd)
                    console.log(newPwd)
                    console.log(notarizePwd)
                }
        },
        showToast(value) {
           this.$toast(value);
        }
   },
   mounted(){
        let that = this;
        // this.oldPwd = document.querySelector("#oldPassWord")
        // this.newPwd = document.querySelector("#newPassWord")
        // this.notarizePwd = document.querySelector("#notarize")
   },
 
}
</script>

<style lang="scss" scoped>
 #formar{

      #form{
          width: 100%;
          height: 290px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
           input{
               width: 262.5px;
               height: 35px;
               padding-left:10px;
               box-sizing: border-box;
               border-radius: 5px;
                   border: 1px solid #919191;
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
