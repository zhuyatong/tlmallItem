(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control30_4Hn4Gb: function (elem) {
      if (elem) {
        var data = { allSelect: [], flowName: "", time: [] }; // $(elem).children('tr').each(function (idx, item) {
        //   var child = {
        //     content: []
        //   };
        //   var str = $(item).children('td').eq(0).text();
        //   var s = str.replace(/：/g, "");
        //   child.title = s;
        //   $(item).children('td').eq(1).find('div table tbody tr td div').eq(0).children('div').each(function (i, v) {
        //     var children = {
        //       cont: []
        //     };
        //     children.title = v.textContent;
        //     children.cont = $(v).children('input')[0].checked;
        //     child.content.push(children);
        //   });
        //   data.allSelect.push(child);
        // });
        data.flowName = $(elem).find("#likeSearch").find("#likeQ").find("input").eq(0).val();
        data.submitPerson = $(elem).find("#likeSearch").find("#sponsor").find("input").eq(0).val();
        data.time.push($(elem).find("#startT").find("input").eq(0).val());
        data.time.push($(elem).find("#endT").find("input").eq(0).val());
        return data;
      }
      return '';
    },
    doAction_uiControl34_oRNHQz: function (data, elem) {
      if (data.eventType == "click") {
        var d = data.dataCustom;
        var q = $(elem).children('tr');
        q.eq(d[0]).children('td').eq(1).find('div table tbody tr td div').eq(0).children('div').eq(d[1]).find('input').click();
      } else if (data.eventType == 'blur') {
        $(elem).find('.grayBtn').click();
      } else if (data.eventType == "showLoading") {
        ysp.appMain.showLoading();
      } else if (data.eventType == "hideLoading") {
        ysp.appMain.hideLoading();
      } else if (data.eventType == "inputBlur") {
        if (data.dataCustom.i == "0") {
          var flowName = elem.querySelector("#likeSearch").querySelector("#likeQ").querySelectorAll("input")[0];
          flowName.dispatchEvent(new Event("focus"));
          flowName.dispatchEvent(new Event("mousedown"));
          flowName.value = data.dataCustom.val;
          flowName.dispatchEvent(new Event("change"));
        } else {
          var submitPerson = elem.querySelector("#likeSearch").querySelector("#sponsor").querySelectorAll("input")[0];
          submitPerson.dispatchEvent(new Event("focus"));
          submitPerson.dispatchEvent(new Event("mousedown"));
          submitPerson.value = data.dataCustom.val;
          submitPerson.dispatchEvent(new Event("change"));
        }
      } else if (data.eventType == "startTChange") {
        var startT = elem.querySelector("#startT").querySelectorAll("input")[0];
        startT.dispatchEvent(new Event("focus"));
        startT.dispatchEvent(new Event("mousedown"));
        startT.value = data.dataCustom;
        startT.dispatchEvent(new Event("change"));
        startT.dispatchEvent(new Event("mouseout"));
      } else if (data.eventType == "endTChange") {
        var endT = elem.querySelector("#endT").querySelectorAll("input")[0];
        endT.dispatchEvent(new Event("focus"));
        endT.dispatchEvent(new Event("mousedown"));
        endT.value = data.dataCustom;
        endT.dispatchEvent(new Event("change"));
        endT.dispatchEvent(new Event("mouseout"));
      }
    },
    getTemplate_uiControl34_oRNHQz: function () {
      var selfTemplate = "export default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      show:true\n    }\n  }\n  componentDidMount(){\n    var outer=this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper') \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  showLoading(){\n    var handler=this.props.customHandler;\n    handler&&handler({\n      eventType:'showLoading'\n    })\n  }\n  hideLoading(){\n    var handler=this.props.customHandler;\n    handler&&handler({\n      eventType:'hideLoading'\n    })\n  }\n  stChange=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:e.target.value,\n         eventType:'startTChange'                         \n       })\n     }\n  }\n  etChange=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:e.target.value,\n         eventType:'endTChange'                         \n       })\n     }\n  }\n  flowBlur=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:{val:e.target.value,i:e.target.getAttribute(\"data-index\")},\n         eventType:'inputBlur'                         \n       })\n     }\n  }\n  render(){\n    const {\tcustomData,customHandler\t}=this.props;\n    return(\n    \t<div className=\"ysp-ProcessedTask-main\" ref=\"outerWrapper\">\n      \t<b onClick={()=>{this.setState({show:!this.state.show})}}>\n          \u67E5\u8BE2\n          <span className={\tthis.state.show\t?\t'ysp-blue-bottom-icon'\t:\t'ysp-blue-top-icon'}></span>\n        </b>\n        <Inquiry stateShow={this.state.show} click={(i,idx)=>{customHandler({data:[i,idx],eventType:'click'})}} blur={()=>{customHandler({data:'1',eventType:'blur'});this.showLoading();this.hideLoading()}}  startChange={this.stChange.bind(this)} endChange={this.etChange.bind(this)} inputBlur={this.flowBlur.bind(this)}\tData={customData}/>\n      </div>\n    )\n  }\n}\nclass Inquiry extends React.Component{\n  \n  render(){\n    var data=this.props.Data ||\t[];\n    var allSelect=data.allSelect ||\t[];\n    var flowName=data.flowName||\"\";\n    var submitPerson=data.submitPerson||\"\";\n    var time=data.time||[];\n    return(\n        <div className=\"ysp-ProcessedTask-check-main\" style={{ display:this.props.stateShow\t?\t'none':'block'}}>\n          \n        \t<div className=\"ysp-flowName\">\n            <span className=\"ysp-flowName-span\">\u6D41\u7A0B\u5B9E\u4F8B\u540D\u79F0</span>\n            <AInput\t className='ysp-flowName-input' value={flowName} onBlur={this.props.inputBlur} data-index=\"0\"/>\n        \t</div>\n        \t<div className=\"ysp-submitPerson\">\n            <span className=\"ysp-submitPerson-span\">\u53D1\u8D77\u4EBA</span>\n            <AInput\t className='ysp-submitPerson-input' value={submitPerson} onBlur={this.props.inputBlur} data-index=\"1\"/>\n        \t</div>\n        \t<div className=\"ysp-flowTime\">\n            <span className=\"ysp-flowTime-title\">\u5230\u8FBE\u65F6\u95F4</span>\n            <input className=\"ysp-startT\" type=\"date\" onChange={this.props.startChange} value={time[0]}/>\n          </div>\n        \t<div\tclassName=\"ysp-toTime\">\n            <span\tclassName=\"ysp-flowTime-title\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u81F3\n            </span>\n            <input className=\"ysp-endT\" type=\"date\" onChange={this.props.endChange} value={time[1]}/>\n        \t</div>\n        \t<div className='ysp-ProcessedTask-check-btnMain'>\n        \t\t<AMUI.Button onClick={()=>{this.props.blur()}} amStyle='primary' className='ysp-ProcessedTask-check-btn'>\u67E5\u8BE2</AMUI.Button>\n        \t</div>\n        </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.stChange = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: 'startTChange'\n        });\n      }\n    };\n\n    _this.etChange = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: 'endTChange'\n        });\n      }\n    };\n\n    _this.flowBlur = function (e) {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { val: e.target.value, i: e.target.getAttribute(\"data-index\") },\n          eventType: 'inputBlur'\n        });\n      }\n    };\n\n    _this.state = {\n      show: true\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.outerWrapper.ownerDocument.querySelector('.view-wrapper');\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: 'showLoading',\n    value: function showLoading() {\n      var handler = this.props.customHandler;\n      handler && handler({\n        eventType: 'showLoading'\n      });\n    }\n  }, {\n    key: 'hideLoading',\n    value: function hideLoading() {\n      var handler = this.props.customHandler;\n      handler && handler({\n        eventType: 'hideLoading'\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      return React.createElement(\n        'div',\n        { className: 'ysp-ProcessedTask-main', ref: 'outerWrapper' },\n        React.createElement(\n          'b',\n          { onClick: function onClick() {\n              _this2.setState({ show: !_this2.state.show });\n            } },\n          '\\u67E5\\u8BE2',\n          React.createElement('span', { className: this.state.show ? 'ysp-blue-bottom-icon' : 'ysp-blue-top-icon' })\n        ),\n        React.createElement(Inquiry, { stateShow: this.state.show, click: function click(i, idx) {\n            customHandler({ data: [i, idx], eventType: 'click' });\n          }, blur: function blur() {\n            customHandler({ data: '1', eventType: 'blur' });_this2.showLoading();_this2.hideLoading();\n          }, startChange: this.stChange.bind(this), endChange: this.etChange.bind(this), inputBlur: this.flowBlur.bind(this), Data: customData })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n\nvar Inquiry = function (_React$Component2) {\n  _inherits(Inquiry, _React$Component2);\n\n  function Inquiry() {\n    _classCallCheck(this, Inquiry);\n\n    return _possibleConstructorReturn(this, (Inquiry.__proto__ || Object.getPrototypeOf(Inquiry)).apply(this, arguments));\n  }\n\n  _createClass(Inquiry, [{\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      var data = this.props.Data || [];\n      var allSelect = data.allSelect || [];\n      var flowName = data.flowName || \"\";\n      var submitPerson = data.submitPerson || \"\";\n      var time = data.time || [];\n      return React.createElement(\n        'div',\n        { className: 'ysp-ProcessedTask-check-main', style: { display: this.props.stateShow ? 'none' : 'block' } },\n        React.createElement(\n          'div',\n          { className: 'ysp-flowName' },\n          React.createElement(\n            'span',\n            { className: 'ysp-flowName-span' },\n            '\\u6D41\\u7A0B\\u5B9E\\u4F8B\\u540D\\u79F0'\n          ),\n          React.createElement(AInput, { className: 'ysp-flowName-input', value: flowName, onBlur: this.props.inputBlur, 'data-index': '0' })\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-submitPerson' },\n          React.createElement(\n            'span',\n            { className: 'ysp-submitPerson-span' },\n            '\\u53D1\\u8D77\\u4EBA'\n          ),\n          React.createElement(AInput, { className: 'ysp-submitPerson-input', value: submitPerson, onBlur: this.props.inputBlur, 'data-index': '1' })\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-flowTime' },\n          React.createElement(\n            'span',\n            { className: 'ysp-flowTime-title' },\n            '\\u5230\\u8FBE\\u65F6\\u95F4'\n          ),\n          React.createElement('input', { className: 'ysp-startT', type: 'date', onChange: this.props.startChange, value: time[0] })\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-toTime' },\n          React.createElement(\n            'span',\n            { className: 'ysp-flowTime-title' },\n            '\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\xA0\\u81F3'\n          ),\n          React.createElement('input', { className: 'ysp-endT', type: 'date', onChange: this.props.endChange, value: time[1] })\n        ),\n        React.createElement(\n          'div',\n          { className: 'ysp-ProcessedTask-check-btnMain' },\n          React.createElement(\n            AMUI.Button,\n            { onClick: function onClick() {\n                _this4.props.blur();\n              }, amStyle: 'primary', className: 'ysp-ProcessedTask-check-btn' },\n            '\\u67E5\\u8BE2'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Inquiry;\n}(React.Component);";
    },
    getData_control31_R1g6aJ: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        //获取tr的数组
        var data = [];var trArr = elem.querySelector("tbody").querySelectorAll("tr");for (var i = 0; i < trArr.length; i++) {
          var tdArr = trArr[i].querySelectorAll("td");var arry = [];for (var j = 0; j < tdArr.length; j++) {
            arry.push(tdArr[j].textContent);
          }data.push(arry);arry.shift();arry.shift();
        }data.shift();data.shift();return data;
      }
    },
    doAction_uiControl35_aoIpOl: function (data, elem) {
      if (data.eventType == "clickBtn") {
        var data = data.dataCustom;var index = parseInt(data.index) + 2;var i = data.i;var title = data.title;var win = elem.ownerDocument.defaultView;if (title && title.indexOf("总部转正") !== -1) {
          top.pendTitle = "总部转正";win._ysp_top.tenderType = "turnTask";
        } else if (title.indexOf("假期管理") !== -1 || title.indexOf("公出") !== -1 || title.indexOf("假期申请") !== -1) {
          top.pendTitle = "假期申请";win._ysp_top.tenderType = "askForLeave";
        } else if (title.indexOf("分公司离职管理流程(解除)") !== -1) {
          top.pendTitle = "分公司离职管理流程(解除)";win._ysp_top.tenderType = "branchRelease";
        } else if (title.indexOf("离职管理") !== -1) {
          top.pendTitle = "离职管理";win._ysp_top.tenderType = "departure";
        } else if (title.indexOf("员工职位变动") !== -1) {
          win._ysp_top.tenderType = "positionChange";
        } else if (title.indexOf("内部职位变动") !== -1 || title.indexOf("分公司间职位变动") !== -1) {
          win._ysp_top.tenderType = "innerPositionChange";
        } else if (title.indexOf("批量提交员工职位变更") !== -1) {
          win._ysp_top.tenderType = "morePositionChange";
        } else if (title.indexOf("总部月度编制变动") !== -1 || title.indexOf("月度编制") !== -1) {
          win._ysp_top.tenderType = "monthChange";
        } else if (title.indexOf("忘打卡") !== -1) {
          top.pendTitle = "忘打卡";win._ysp_top.tenderType = "forgetCard";
        } else if (title.indexOf("加班申请") !== -1) {
          top.pendTitle = "加班申请";win._ysp_top.tenderType = "addWork";
        } else if (title.indexOf("外派探亲资格") !== -1) {
          top.pendTitle = "外派探亲资格";win._ysp_top.tenderType = "visitRelative";
        } else if (title.indexOf("员工录用") !== -1) {
          top.pendTitle = "员工录用";win._ysp_top.tenderType = "employeeHire";
        } else if (title.indexOf("分公司录用审批") !== -1) {
          win._ysp_top.tenderType = "branchEmployeeHire";
        } else if (title.indexOf("分公司员工个别薪酬") !== -1) {
          win._ysp_top.tenderType = "branchEmpSalary";
        } else if (title.indexOf("分公司转正") !== -1 || title.indexOf("有关") !== -1 && title.indexOf("转正") !== -1) {
          win._ysp_top.tenderType = "branchTurnRegular";
        } else if (title.indexOf("特价申请") !== -1) {
          win._ysp_top.tenderType = "goodBargain";
        } else if (title.indexOf("价格政策") !== -1) {
          win._ysp_top.tenderType = "pricePolicy";
        } else {
          top.pendTitle = "第一期38个流程";win._ysp_top.tenderType = "processForm";
        }elem.querySelector("tbody").querySelectorAll("tr")[index].querySelectorAll("td")[1].querySelectorAll("a")[i].click();ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl35_aoIpOl: function () {
      var selfTemplate = "import {Component} from 'react'\nexport default class extends React.Component{\n  constructor(props){\n    super(props);\n    this.state={\n      show:-1\n    }\n  }\n  componentWillReceiveProps(){\n  \tthis.setState({\n      show:-1\n    })\n\t}\n//   componentDidMount(){\n//     var list=this.refs.list;\n//     setTimeout(function(){\n//       list.window.location.reload()\n//     },500)\n    \n//   }\n  upDown=(e)=>{\n    var target=e.target;\n    if(\tthis.state.show\t!=target.dataset.key){\n    \tthis.setState({\n      \tshow:target.dataset.key\n    \t})   \n    }else{\n      this.setState({\n      \tshow:-1\n   \t\t})\n    }\n  }\n  clickBtn(e){\n    var target=e.target;\n  \tvar handler=this.props.customHandler;\n    var title1=target.parentElement.parentElement.parentElement.querySelector(\".ysp_top_title\").textContent;\n    if(handler){\n      handler({\n        data:{index:target.getAttribute(\"data-index\"),i:target.dataset.i,title:title1},\n        eventType:\"clickBtn\"\n      })\n    }\n  }\n  render(){\n    var data=this.props.customData||[];\n    var _this=this;\n    return(\n    \t<div className=\"ysp_waitingTask_list\" ref=\"list\">\n        {data.length>0? \n          data.map((d,i)=>{\n          \treturn(\n            \t<div className=\"ysp_list_item\">\n              \t<div className=\"ysp_item_top\">\n                  <i></i>\n                  <span className=\"ysp_top_title\">{d[0]}</span>\n                  <span className=\"ysp_top_status\">{d[1]}</span>\n                </div>\n                <div className=\"ysp_item_bottom\">\n                \t<div className=\"ysp_bottom_left\">\n                    <div>\u63D0\u4EA4\u65F6\u95F4\uFF1A{d[2]}</div>\n                    <div>\u5230\u8FBE\u65F6\u95F4\uFF1A{d[3]}</div>\n                    <div>\u5B8C\u6210\u65F6\u95F4\uFF1A{d[4]}</div>\n                  </div>\n                  <i className={this.state.show==i\t?\t'ysp_bottom_Up'\t:\t'ysp_bottom_Down'\t} onClick={_this.upDown}\tdata-key={i}></i>\n                  <div className=\"ysp_btn_panel\" style={{display:\tthis.state.show\t==\ti\t?\t'block'\t:\t'none'\t}}>\n                  \t<button className=\"ysp_btn_do\" onClick={_this.clickBtn.bind(_this)} data-index={i} data-i=\"0\">\u67E5\u770B\u8868\u5355</button>\n                    <button className=\"ysp_btn_check\" onClick={_this.clickBtn.bind(_this)} data-index={i} data-i=\"1\">\u67E5\u770B</button>\n                  </div>\n                </div>\n              </div>\n            )\n        \t}) : <div style={{textAlign:'center'}}>\u6682\u65E0\u6570\u636E</div>\n        }\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.upDown = function (e) {\n      var target = e.target;\n      if (_this2.state.show != target.dataset.key) {\n        _this2.setState({\n          show: target.dataset.key\n        });\n      } else {\n        _this2.setState({\n          show: -1\n        });\n      }\n    };\n\n    _this2.state = {\n      show: -1\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps() {\n      this.setState({\n        show: -1\n      });\n    }\n    //   componentDidMount(){\n    //     var list=this.refs.list;\n    //     setTimeout(function(){\n    //       list.window.location.reload()\n    //     },500)\n\n    //   }\n\n  }, {\n    key: \"clickBtn\",\n    value: function clickBtn(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      var title1 = target.parentElement.parentElement.parentElement.querySelector(\".ysp_top_title\").textContent;\n      if (handler) {\n        handler({\n          data: { index: target.getAttribute(\"data-index\"), i: target.dataset.i, title: title1 },\n          eventType: \"clickBtn\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var data = this.props.customData || [];\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_waitingTask_list\", ref: \"list\" },\n        data.length > 0 ? data.map(function (d, i) {\n          return React.createElement(\n            \"div\",\n            { className: \"ysp_list_item\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp_item_top\" },\n              React.createElement(\"i\", null),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_top_title\" },\n                d[0]\n              ),\n              React.createElement(\n                \"span\",\n                { className: \"ysp_top_status\" },\n                d[1]\n              )\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp_item_bottom\" },\n              React.createElement(\n                \"div\",\n                { className: \"ysp_bottom_left\" },\n                React.createElement(\n                  \"div\",\n                  null,\n                  \"\\u63D0\\u4EA4\\u65F6\\u95F4\\uFF1A\",\n                  d[2]\n                ),\n                React.createElement(\n                  \"div\",\n                  null,\n                  \"\\u5230\\u8FBE\\u65F6\\u95F4\\uFF1A\",\n                  d[3]\n                ),\n                React.createElement(\n                  \"div\",\n                  null,\n                  \"\\u5B8C\\u6210\\u65F6\\u95F4\\uFF1A\",\n                  d[4]\n                )\n              ),\n              React.createElement(\"i\", { className: _this3.state.show == i ? 'ysp_bottom_Up' : 'ysp_bottom_Down', onClick: _this.upDown, \"data-key\": i }),\n              React.createElement(\n                \"div\",\n                { className: \"ysp_btn_panel\", style: { display: _this3.state.show == i ? 'block' : 'none' } },\n                React.createElement(\n                  \"button\",\n                  { className: \"ysp_btn_do\", onClick: _this.clickBtn.bind(_this), \"data-index\": i, \"data-i\": \"0\" },\n                  \"\\u67E5\\u770B\\u8868\\u5355\"\n                ),\n                React.createElement(\n                  \"button\",\n                  { className: \"ysp_btn_check\", onClick: _this.clickBtn.bind(_this), \"data-index\": i, \"data-i\": \"1\" },\n                  \"\\u67E5\\u770B\"\n                )\n              )\n            )\n          );\n        }) : React.createElement(\n          \"div\",\n          { style: { textAlign: 'center' } },\n          \"\\u6682\\u65E0\\u6570\\u636E\"\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control32_xrbDuu: function (elem) {
      if (elem) {
        var data = {};
        var _PagesMessage = elem.querySelector('.mini-pager-right').textContent;
        data.PagesMessage = _PagesMessage;
        var _PageNumber = elem.querySelector('.mini-pager-num').value;
        data.PageNumber = _PageNumber;
        var _PageCount = elem.querySelector('.mini-pager-pages').textContent;
        data.PageCount = _PageCount;
        return data;
      }
      return '';
    },
    doAction_uiControl36_3Xkpsc: function (data, elem) {
      if (data.eventType == "click") {
        var d = data.dataCustom;
        switch (d) {
          case 'ysp-PagesMessage-leftBM-icon':
            var btnId = elem.querySelector('.mini-pager-first').parentNode;
            console.log(btnId);
            btnId.click();
            break;
          case 'ysp-PagesMessage-left-icon':
            var btnId = elem.querySelector('.mini-pager-prev').parentNode;
            btnId.click();
            break;
          case 'ysp-PagesMessage-right-icon':
            var btnId = elem.querySelector('.mini-pager-next').parentNode;
            btnId.click();
            break;
          case 'ysp-PagesMessage-rightBM-icon':
            var btnId = elem.querySelector('.mini-pager-last').parentNode;
            btnId.click();
            break;
        }
      } else if (data.eventType == "selectChange") {
        elem.querySelector(".mini-buttonedit-input").focus();
        elem.querySelector(".mini-buttonedit-input").click();
        setTimeout(function () {
          elem.ownerDocument.querySelector(".mini-listbox-items").querySelectorAll("tr")[data.dataCustom.ind].click();
        }, 50);
      } else if (data.eventType == "inputChange") {
        elem.querySelector(".mini-pager-num").value = data.dataCustom;
        elem.querySelector(".mini-pager-num").dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl36_3Xkpsc: function () {
      var selfTemplate = "import {Page} from 'ysp-custom-components';\nimport {Component} from 'react';\nexport default class\textends Component{\n  pagesClick(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.className,\n         eventType:'click'                         \n       })\n     }\n  }\n  selectChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:{ind:target.selectedIndex,val:target.value},\n         eventType:'selectChange'                         \n       })\n     }\n  }\n  inputChange(e){\n    var\t_this=this;\n    var handler=_this.props.customHandler;\n    var target=e.target;\n     if(handler) {                                    \n       handler({\n         data:target.value,\n         eventType:'inputChange'                         \n       })\n     }\n  }\n  render(){\n    const {\tcustomData,customHandler\t}=this.props;\n    var _this=this;\n    if(customData){\n      return(\n        <div>\n          <Page\tPassedCustomData={customData}\tpagesClick={_this.pagesClick.bind(_this)} inputChange={_this.inputChange.bind(_this)} selectChange={_this.selectChange.bind(_this)} />\t\n        </div>\n      )\n    }else{\n      return(\n        <div style={{display:'none'}}></div>\n      )\n    } \n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'pagesClick',\n    value: function pagesClick(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.className,\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'selectChange',\n    value: function selectChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: { ind: target.selectedIndex, val: target.value },\n          eventType: 'selectChange'\n        });\n      }\n    }\n  }, {\n    key: 'inputChange',\n    value: function inputChange(e) {\n      var _this = this;\n      var handler = _this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.value,\n          eventType: 'inputChange'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          customData = _props.customData,\n          customHandler = _props.customHandler;\n\n      var _this = this;\n      if (customData) {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(_yspCustomComponents.Page, { PassedCustomData: customData, pagesClick: _this.pagesClick.bind(_this), inputChange: _this.inputChange.bind(_this), selectChange: _this.selectChange.bind(_this) })\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control3_tKTeZZ: function (elem) {
      if (!elem) {
        return;
      }
      if (elem && elem.querySelector("#toast") && elem.querySelector("#toast").style.display != "none") {
        return elem.querySelector("#toast").textContent;
      }
    },
    doAction_uiControl4_7ooDrK: function (data, elem) {},
    getTemplate_uiControl4_7ooDrK: function () {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends React.Component{\n  componentDidUpdate(props){\n    var data=this.props.customData;\n    var toastWord=this.refs.yspToast;; \n    setTimeout(function(){\n      toastWord.style.display=\"none\";\n    },2000)\n  }\n  render() {\n    var data=this.props.customData||[]\n    return (\n      <div className=\"ysp_alert_tips\" ref=\"yspToast\" onClick={(e)=>{e.target.style.display=\"none\"}}>\n        {data==\"\"? \"\":<div className=\"ysp_alert_words\"><span style={{height:\"40px\"}}>{data}</span></div>}\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(props) {\n      var data = this.props.customData;\n      var toastWord = this.refs.yspToast;;\n      setTimeout(function () {\n        toastWord.style.display = \"none\";\n      }, 2000);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData || [];\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_alert_tips\", ref: \"yspToast\", onClick: function onClick(e) {\n            e.target.style.display = \"none\";\n          } },\n        data == \"\" ? \"\" : React.createElement(\n          \"div\",\n          { className: \"ysp_alert_words\" },\n          React.createElement(\n            \"span\",\n            { style: { height: \"40px\" } },\n            data\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control2_EIVFPc: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        // var data=elem.ownerDocument.defaultView.frameElementownerDocument.parentNode.querySelectorAll(".mini-tab-active")[1].querySelector("span").textContent
        var data = "";return data;
      }
    },
    doAction_uiControl3_n5Dv7n: function (data, elem) {
      if (data.eventType === 'back') {
        // var win = elem.ownerDocument.defaultView;
        // var parentWin = win.parent;
        // parentWin && parentWin.location.reload();
        //   var num = 0;
        //   var a = setInterval(function () {
        //     num++;
        //     if (num == 4) {
        //       clearInterval(a);
        //     }
        //     window.EAPI.back();
        //   }, 50);
        // var newUrl = ysp.appMain.getActiveWindow();
        // newUrl.location.href = "http://192.168.220.51:8000/ptsoa/bps/wfclient/task/app/appMyTask.jsp"; //新平台方法
        // if (ysp.appMain.isIOS() || ysp.appMain.isAndroid()) {
        //   ysp.EAPI.closeWindow();
        // } else {
        //   var newUrl = ysp.appMain.getActiveWindow();
        //   newUrl.location.href = "http://192.168.220.51:8000/ptsoa/bps/wfclient/task/app/appMyTask.jsp";
        // }
        top.EAPI.closeWindow();
      }
    },
    getTemplate_uiControl3_n5Dv7n: function () {
      var selfTemplate = 'import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from \'ysp-interior-components\';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  render() {\n    let _this = this;\n    return (\n      <Header amStyle="primary" title="\u5DF2\u5904\u7406\u7684\u4EFB\u52A1">\n        <HeaderLeft>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n            }}>\n            <span className=\'icon icon-left-nav\'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          <AMUI.Button amStyle="primary" style={{ margin: 0 ,display:\'none\'}}></AMUI.Button>\n        </HeaderRight>\n      </Header>\n    );\n  }\n}';
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require(\"ysp-interior-components\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: \"primary\", title: \"\\u5DF2\\u5904\\u7406\\u7684\\u4EFB\\u52A1\" },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            AMUI.Button,\n            { amStyle: \"primary\", style: { margin: 0 }, onClick: function onClick() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'back'\n                  });\n                }\n              } },\n            React.createElement(\"span\", { className: \"icon icon-left-nav\" })\n          )\n        ),\n        React.createElement(\n          _yspInteriorComponents.HeaderRight,\n          null,\n          React.createElement(AMUI.Button, { amStyle: \"primary\", style: { margin: 0, display: 'none' } })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control65_1eTTBP: function (elem) {
      //loading 加载。
      if (!elem) {
        return;
      }
      if (elem && elem.contentWindow && elem.contentWindow.document) {
        var loading = elem.contentWindow.document.querySelector('.mini-mask');
        if (loading) {
          var _loading = loading.querySelector('.mini-mask-loading');
          if (_loading && _loading.style.display == 'block' && _loading.textContent.trim() == '加载中...') {
            console.log('1');
            return [true];
          } else {
            return;
          }
        }
      }
    },
    doAction_uiControl60_ti57fD: function (data, elem) {},
    getTemplate_uiControl60_ti57fD: function () {
      var selfTemplate = "\nexport default class extends React.Component{\n  render(){\n    var data = this.props.customData || [];\n    if(data\t&&\tdata[0]==true){\n    \treturn(\n        <div className=\"ysp-loadEffect-background\">\n          <div className=\"ysp-loadEffect\">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>  \n    \t)  \n    }else{\n      return(\n \xA0 \xA0  \t<div></div> \n      )\n    }\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData || [];\n      if (data && data[0] == true) {\n        return React.createElement(\n          \"div\",\n          { className: \"ysp-loadEffect-background\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-loadEffect\" },\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null),\n            React.createElement(\"span\", null)\n          )\n        );\n      } else {\n        return React.createElement(\"div\", null);\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  }, "processedTask");
})(window, ysp);