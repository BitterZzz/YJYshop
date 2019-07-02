<template>
    <div id="bind">
        
         <div class="bindPhone">
            <h4>手机绑定</h4>
                 <input type="text" class="txt" id="username" placeholder="请输入手机号">
                 <a href="#" class="countDown"  @click="countDown">发送验证码</a><br/>
                 <input type="text" class="text" id="password" placeholder="请输入验证码"><br/>
                 <button type="submit" class="btn">立即绑定</button><br/>
                 <span class="tips">提示：为了您的账户安全，请及时绑定手机</span>
              
         </div>

        <suspend></suspend>
    </div>
</template>

<script>
import suspend from '../../../components/suspend'
export default {
    name:'',
    components:{
        Suspend:suspend,
    },
    data(){
         return{
             dom: {
                phoneInput: "",
                pwdInput: "",
                errorInput: "",
                _userVerity: "",
                _pwdVerity: "",
                _wxLogin: ""
            },
         }
    },
    methods:{
        
        countDown(){
            let val = document.querySelector(".countDown")
            let countdown = 60;
            let _userVerity = this.dom._userVerity
            if(this.dom.phoneInput.value === ""){
                this.showToast("请输入手机号")
            }
        }
    },
    mounted(){
        let that = this;
        this.dom.phoneInput = document.querySelector("#username");
        this.dom.pwdInput = document.querySelector("#password");
        this.dom._userVerity = /^[1][3,4,5,7,8][0-9]{9}$/;
        this.dom._pwdVerity = /^[0-9]{6}$/;
   }
}
</script>

<style lang="scss" scoped>
   #bind{
        background: #ffffff;
        height: 100%;
        width: 100%;
        position: fixed;
        .bindPhone{
             width: 331px;
             height: 242px;
             margin-top: 45px;
             margin:  45px auto;

               h4{
                    width: 100%;
                    text-align: center;
                    font-size: 19px;
                    line-height: 50px;
                    
               }
               .txt{
                    width: 238px;
                    height: 40px;
                    border: 1px solid #ccc;
                    border-right: none;
                    float: left;
                    margin-bottom: 15px;
                    padding-left: 10px;
                    box-sizing: border-box;
                    font-size: 12px;
                    color: #666;

               }
               a{
                   display: block;
                   width: 92px;
                   float: left;
                   height: 38px;
                   line-height: 38px;
                   text-align: center;
                   border: 1px solid #cccccc;
                   border-left: none;
                   background: #999;
                   color: #fff;
               }
               .text{
                   width: 330px;
                   height: 40px;
                   border: 1px solid #cccccc;
                   margin-bottom: 15px;
                   padding-left: 10px;
                   box-sizing: border-box;
                   font-size: 12px;
                   color: #666;
               }
               button{
                   width: 330px;
                   height: 40px;
                   border: 1px solid #ccc;
                   margin-bottom: 15px;
                   background: #f0ad4e;
                   color: #fff;
                   font-size: 14px;
               }
               span{
                    font-size: 12px;
                    color: #999;
               }
        }  
   }
</style>
