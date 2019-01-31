(function (Vue) {
  new Vue({
    el: '#app',
    data: {
      num: [],
    },
    computed: {
      array() {
        let vm = this
        for (let i = 2; i < 10; i++) {
          vm.num.push(i)
        }
        return vm.num
      }
    },
  })
})(Vue)