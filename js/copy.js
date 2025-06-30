/* 禁用f12与按键防抖 start */
let TT = null; 
function debounce(fn, time) {
  if (TT !== null) clearTimeout(TT);
  TT = setTimeout(fn, time);
}

// 复制提醒：直接用 $notify（前提是已全局注册）
document.addEventListener("copy", function () {
  debounce(function () {
    Vue.prototype.$notify({ // 或 this.$notify（在 Vue 组件内）
      title: "哎嘿！复制成功🍬",
      message: "若要转载最好保留原文链接哦，给你一个大大的赞！🤞🤞",
      position: 'top-left',
      offset: 50,
      showClose: true,
      type: "success",
      duration: 5000
    });
  }, 300);
});

// f12提醒：同理调整
document.onkeydown = function (e) {
  if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) {
    debounce(function () {
      Vue.prototype.$notify({
        title: "你已被发现😜",
        message: "小伙子，扒源记住要遵循GPL协议！",
        position: 'top-left',
        offset: 50,
        showClose: true,
        type: "warning",
        duration: 5000
      });
    }, 300);
  }
};
/* 禁用f12与按键防抖 end */