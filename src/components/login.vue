<!--  -->
<template>
<div class="login_container">
    <div class="login_box">
        <!-- 頭像 -->
        <div class="avatar_box">
               <img src="../assets/logo.png" alt="">
        </div>
        <!-- 登陸表單 -->
        <!-- rules定義規則 -->
        <!-- ref定義實例對象 以用來重置表單 -->
        <el-form  ref="loginformref" :rules = "rules" v-bind:model = "loginform" label-width="0px" class="login_form">
            <!-- 用戶名 -->
            <el-form-item prop="username" >
                <!-- prefix-icon添加前置小圖標 -->
                <!-- input裡v-model綁定名字要和prop的一致 -->
                <el-input v-model = "loginform.username" prefix-icon= "icon-user" ></el-input>
            </el-form-item>
            <!-- 密碼 -->
             <el-form-item prop= "password">
                <el-input  type= "password" v-model = "loginform.password" prefix-icon = "icon-search"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button @click="login">登陸</el-button>
                <el-button type="info" @click="resetloginform">重置</el-button> 
            </el-form-item>
              <el-button :plain="true" @click="open1">消息</el-button>
        </el-form>
    </div>
    
</div>

</template>

<script>
export default {
data() {
return {
    loginform: {
        username: "admin",
        password: "123456"
    },
    rules:{
        username:[
            // required:true 是必填項意思
            { required: true, message: '請输入登入帳號', trigger: 'blur' },
            { min: 3, max: 10, message: '長度在3到10個字符', trigger: 'blur' }
        ],
        password:[
            { required: true, message: '請输入登入密碼', trigger: 'blur' },
            { min: 6, max: 15, message: '長度在6到15個字符', trigger: 'blur' } 
        ]
    }
}
},
methods:{
      
          resetloginform(){
            // this下的$refs對象的loginformref
            // 對應<el-button type="info" @click="resetloginform">重置</el-button> 
            this.$refs.loginformref.resetFields()
            // console.log(this.$refs)
            // console.log(event)
            console.log(this)
        },
        login() {
            // 驗證表單正確還錯誤
            
            this.$refs.loginformref.validate(async valid => {
                // console.log(valid) 回傳bool
                if(!valid) return
                // console.log(this.$methods)
                const result = await this.$http.post('/login',this.loginform)
                if(result.meta.status !== 200)  return this.$message.error("錯了喔")
                this.$message.success("成功")

                // 設置token, result.data.token是server的token
                window.sessionStorage.setItem("token",result.data.token)
                // 跳到/home位置
                this.$router.push("/home")
                console.log(result)
                // this.
            })
        },
    //     open1() {
    //     this.$message('这是一条消息提示');
    //   },
    
},


    
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
}
}
</script>
<style lang = "scss" scoped >
/* @import url(); 引入css类 */
@import "../assets/fonts/style.css";

    .login_container{
        background: #2b4b6b;
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background:white;
        border-radius: 3px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;

       
        .avatar_box{
            position: absolute;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            /* top: -76px; */

            margin: auto;
            width: 130px;
            height: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0px 0px 10px #ddd;
            background: #fff;

            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: #808060;
            }
        }
        
        .login_form{
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0 10px;
            box-sizing: border-box;

            el-input{
                margin-left: 5px;
            }
        }
        .btns{
            display: flex;
            justify-content: center;;
        }
        
    }
</style>

