<template>
  <div class="content">
    <h2 class="padding-30p">계정 만들기</h2>
    <form class="ui form">
      <div class="field">
        <label>이름</label>
        <input v-model="name" type="text" placeholder="이름">
      </div>
      <div class="field">
        <label>닉네임</label>
        <input v-model="nickName" type="text" placeholder="닉네임">
      </div>
      <div class="field">
        <label>이메일</label>
        <input v-model="email" type="email" placeholder="이메일">
      </div>
      <div class="field">
        <label>비밀번호</label>
        <input v-model="password" type="password" placeholder="비밀번호">
      </div>
      <div class="field">
        <label>비밀번호 확인</label>
        <input v-model="passwordCheck" type="password" placeholder="비밀번호 확인">
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input
            type="checkbox"
            tabindex="0"
            class=""
            v-model="checked">
          <label><strong>이용약관</strong> 및 <strong>개인정보 처리방침</strong>에 동의합니다.</label>
        </div>
      </div>
      <div class="field">
        <button
          type="submit"
          class="ui primary button"
          :class="{disabled: isDisabled}">
          계정 만들기
        </button>
      </div>
    </form>
    <br/>
    <div class="ui padding-30p">
      <label>이미 계정이 있으신가요? <a>로그인</a></label>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      nickName: '',
      email: '',
      password: '',
      passwordCheck: '',
      checked: false
    }
  },
  computed: {
    isDisabled() {
      if(this.name.length <= 0 || this.nickName.length <= 0 || this.email.length <= 0
        || this.password.length <= 0 || this.passwordCheck.length <= 0 || this.checked) {
          if(this.password != this.passwordChecked)
            return true;
        }
    }
  }
}
</script>

<style scoped>
.content {
  margin: 0 35%;
}
.button {
  width: 100%
}
.padding-30p{
  padding: 0 30%;
}
</style>
