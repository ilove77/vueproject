<!--  -->
<template>
   <div >
       <el-button type="info" @click="logout">退出</el-button>
   </div>
    
</template>

<script>
   export default {
      data() {
         return {
            
         }
      },
      methods: {
          logout() {
            //   會清掉所有在Session strorage的 key-value
              window.sessionStorage.clear()
              this.$router.push("/login")
          }
      },
//生命周期 - 创建完成（访问当前this实例）
      created() {
         
      },
//生命周期 - 挂载完成（访问DOM元素）
      mounted() {
          console.log(this.$el) 
      }
    }
</script>
<style scoped>
/* @import 'style.css'; 引入css类 */

</style>