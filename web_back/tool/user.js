//用来管理用户所进行的所有接口请求操作
// 将页面中的功能提取到user.js后，需要区分哪部分代码是与接口有关的，那部分是与页面有关的
//  与接口有关的留下来，与页面有关的部分放回到页面中，并通过传参的方式传入

var user = {
  //login方法用来管理用户登录接口的操作方式
  login: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback
        // success:function(res){
        //   options.callback(res)
        // }
    });
  },
  // logout方法用来管理用户退出接口的操作方式
  logout: function(options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: options.callback
    })
  },
  //getuser方法管理用户简单信息
  getinfo: function(options) {
    $.ajax({
      url: USER_INFO,
      success: options.callback
    })
  },
  //getAllInfo用来管理用户的详细信息
  getAllInfo: function(options) {
    $.ajax({
      url: USER_INFO_GET,
      success: options.callback
    })
  },
  //edit编辑
  edit: function(options) {
    $.ajax({
      type: 'post',
      url: 'http://localhost:8000/admin/userinfo_edit',
      data: options.data,
      contentType: false,
      processData: false,
      success: options.callback
    })
  }
};


