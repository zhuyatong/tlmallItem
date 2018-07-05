(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control37_MvS3h7: function (elem) {},
    doAction_uiControl37_tWrnRr: function (data, elem) {
      var type = data.eventType;if (type == "back") {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl37_tWrnRr: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render () {\n    var _this=this;\n    return(\n      <div>\n      \t<CustomHeader \n           data={{centerText:\"\u9500\u5047\u7533\u8BF7\",rightText:\"\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false}\n        \t />\n      \t<div style={{height:\"2.7rem\"}}></div>\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: \"\u9500\u5047\u7533\u8BF7\", rightText: \"\" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          },\n          filterIsShow: false\n        }),\n        React.createElement('div', { style: { height: \"2.7rem\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control38_uf5CpS: function (elem) {
      if (elem) {
        return ysp.customHelper.tableData(elem);
      } else {
        return;
      }
    },
    doAction_uiControl38_B0mpHW: function (data, elem) {
      if (data.eventType == "checkClick") {
        var d = data.dataCustom;var tr = elem.querySelectorAll("input[type='checkbox']")[d];tr.click();tr.dispatchEvent(new Event("click"));
      }
    },
    getTemplate_uiControl38_B0mpHW: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  checkClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.dataset.index,\n        eventType:\"checkClick\"\n      })\n    }\n  }\n  handlerClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    // if(handler){\n    //   handler({\n    //     data:target.dataset.index\n    //   })\n    // }\n    // var yearCell =this.refs.filter.ownerDocument.querySelector(\".ysp-tipbox-none\");\n    // for(var i=0;i<yearCell.length;i++){\n    //     yearCell[i].className=\"yearCell\"\n    // }\n    target.parentElement.parentElement.parentElement.style.display=\"none\";\n  }\n  render(){\n    var data=this.props.customData;\n    var _this=this;\n    return(<div className=\"ysp-selloff\">\n      {data && data.content && data.content.map(function(item,index){\n          return(\n            <div>\n              {item[2].text!=\"\"?\n                <div className=\"ysp-selloff-li\">\n              \t{item[1].select==\"true\"?\n              \t<label><input type=\"checkbox\" name=\"checkall\" onClick={_this.checkClick.bind(_this)} data-index={index} checked/><i></i></label>\n                :\n              \t<label><input type=\"checkbox\" name=\"checkall\" onClick={_this.checkClick.bind(_this)} data-index={index}/><i></i></label>\n                }\n              \t<div className=\"selloff-li-con\"><p>{item[2].text}</p><p>\u4F11\u5047\u65F6\u95F4\uFF1A{item[4].text}-{item[5].text}</p></div>\n              \t<div className=\"selloff-li-time\">\u4F11\u5047\u65F6\u95F4\uFF1A{item[6].text}{item[7].text}</div>\n            </div>\n            :\n            <div>\n              <div class=\"ysp_alert_mask\">\n                <div class=\"ysp_alert_modal\">\n                  <div class=\"ysp_content_twoLine\">\n                    <div class=\"ysp_alert_title\">\u63D0\u793A</div>\n                    <div class=\"ysp_alert_content\">\u65E0\u9500\u5047\u6570\u636E</div>\n                  </div>\n                  <div class=\"oneButton\"><div class=\"sure\" onClick={_this.handlerClick.bind(_this)}>\u786E\u5B9A</div></div>\n                </div>\n            \t</div>\n              <div className=\"ysp-selloff-li\">\n                <label><input type=\"checkbox\" name=\"checkall\"/><i></i></label>\n                <div className=\"selloff-li-con\"><p></p><p>\u4F11\u5047\u65F6\u95F4\uFF1A</p></div>\n                <div className=\"selloff-li-time\">\u4F11\u5047\u65F6\u95F4\uFF1A</div>\n              </div>\n          </div>\n              }\n            \n            </div>)\n        })}\n      </div>)\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"checkClick\",\n    value: function checkClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: target.dataset.index,\n          eventType: \"checkClick\"\n        });\n      }\n    }\n  }, {\n    key: \"handlerClick\",\n    value: function handlerClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      // if(handler){\n      //   handler({\n      //     data:target.dataset.index\n      //   })\n      // }\n      // var yearCell =this.refs.filter.ownerDocument.querySelector(\".ysp-tipbox-none\");\n      // for(var i=0;i<yearCell.length;i++){\n      //     yearCell[i].className=\"yearCell\"\n      // }\n      target.parentElement.parentElement.parentElement.style.display = \"none\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-selloff\" },\n        data && data.content && data.content.map(function (item, index) {\n          return React.createElement(\n            \"div\",\n            null,\n            item[2].text != \"\" ? React.createElement(\n              \"div\",\n              { className: \"ysp-selloff-li\" },\n              item[1].select == \"true\" ? React.createElement(\n                \"label\",\n                null,\n                React.createElement(\"input\", { type: \"checkbox\", name: \"checkall\", onClick: _this.checkClick.bind(_this), \"data-index\": index, checked: true }),\n                React.createElement(\"i\", null)\n              ) : React.createElement(\n                \"label\",\n                null,\n                React.createElement(\"input\", { type: \"checkbox\", name: \"checkall\", onClick: _this.checkClick.bind(_this), \"data-index\": index }),\n                React.createElement(\"i\", null)\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"selloff-li-con\" },\n                React.createElement(\n                  \"p\",\n                  null,\n                  item[2].text\n                ),\n                React.createElement(\n                  \"p\",\n                  null,\n                  \"\\u4F11\\u5047\\u65F6\\u95F4\\uFF1A\",\n                  item[4].text,\n                  \"-\",\n                  item[5].text\n                )\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"selloff-li-time\" },\n                \"\\u4F11\\u5047\\u65F6\\u95F4\\uFF1A\",\n                item[6].text,\n                item[7].text\n              )\n            ) : React.createElement(\n              \"div\",\n              null,\n              React.createElement(\n                \"div\",\n                { \"class\": \"ysp_alert_mask\" },\n                React.createElement(\n                  \"div\",\n                  { \"class\": \"ysp_alert_modal\" },\n                  React.createElement(\n                    \"div\",\n                    { \"class\": \"ysp_content_twoLine\" },\n                    React.createElement(\n                      \"div\",\n                      { \"class\": \"ysp_alert_title\" },\n                      \"\\u63D0\\u793A\"\n                    ),\n                    React.createElement(\n                      \"div\",\n                      { \"class\": \"ysp_alert_content\" },\n                      \"\\u65E0\\u9500\\u5047\\u6570\\u636E\"\n                    )\n                  ),\n                  React.createElement(\n                    \"div\",\n                    { \"class\": \"oneButton\" },\n                    React.createElement(\n                      \"div\",\n                      { \"class\": \"sure\", onClick: _this.handlerClick.bind(_this) },\n                      \"\\u786E\\u5B9A\"\n                    )\n                  )\n                )\n              ),\n              React.createElement(\n                \"div\",\n                { className: \"ysp-selloff-li\" },\n                React.createElement(\n                  \"label\",\n                  null,\n                  React.createElement(\"input\", { type: \"checkbox\", name: \"checkall\" }),\n                  React.createElement(\"i\", null)\n                ),\n                React.createElement(\n                  \"div\",\n                  { className: \"selloff-li-con\" },\n                  React.createElement(\"p\", null),\n                  React.createElement(\n                    \"p\",\n                    null,\n                    \"\\u4F11\\u5047\\u65F6\\u95F4\\uFF1A\"\n                  )\n                ),\n                React.createElement(\n                  \"div\",\n                  { className: \"selloff-li-time\" },\n                  \"\\u4F11\\u5047\\u65F6\\u95F4\\uFF1A\"\n                )\n              )\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control42_RWs97s: function (elem) {
      if (!elem) {
        return;
      }var data = { vall: [], grey: [], pserror: "" };var save = elem.querySelector("#HPS_AWE_WRK_SAVE_BTN");var area = elem.querySelector("#HPS_AWE003_HDR_COMMENTS");var sub = elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN");if (area) {
        data.vall.push(area.value);data.pserror = area.getAttribute("class");
      }if (save) {
        data.vall.push(save.value);
      }if (sub) {
        data.vall.push(sub.value);
      }if (save.disabled == true) {
        data.grey.push("disabled");
      } else {
        data.grey.push("");
      }if (sub.disabled == true) {
        data.grey.push("disabled");
      } else {
        data.grey.push("");
      }return data;
    },
    doAction_uiControl42_MeT95O: function (data, elem) {
      if (data.eventType == "checkclick") {
        var d = data.dataCustom;var btn1 = elem.querySelector("#HPS_AWE_WRK_SELECT_ALL");var btn2 = elem.querySelector("#HPS_AWE_WRK_DESELECT_ALL");if (d == true) {
          btn1.click();
        } else {
          btn2.click();
        }
      } else if (data.eventType == "change") {
        var data = data.dataCustom;var area = elem.querySelector("#HPS_AWE003_HDR_COMMENTS");area.value = data;area.dispatchEvent(new Event("change"));
      } else if (data.eventType == "click1") {
        var data = data.customData;elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN").click();
      } else if (data.eventType == "click2") {
        elem.querySelector("#HPS_AWE_WRK_SAVE_BTN").click();
      } // else if (data.eventType == "selclick") {
      //   var sel = elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN");
      //   sel.click();
      // } else if (data.eventType == "saveclick") {
      //   var save = elem.querySelector("#HPS_AWE_WRK_SAVE_BTN");
      //   save.click();
      // }
    },
    getTemplate_uiControl42_MeT95O: function () {
      var selfTemplate = "\nimport {Component} from 'react';\nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends React.Component{\n  handlerClick1(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value],\n        eventType:\"click1\"\n      })\n    }\n  }\n    handlerClick2(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value],\n        eventType:\"click2\"\n      })\n    }\n  }\n  constructor(){\n    super();\n    this.state={\n      open:false\n    }\n  }\n  checkClick(e) {\n    \n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"checkclick\",\n        data:e.target.checked\n      })\n    }\n  }\nshowReason(e){\n  this.setState({\n    open:true\n  });\n}\n  render(){\n    var data = this.props.data.customData;\n    var _this = this;\n    return (\n      <div>\n        {this.state.open? <div className=\"dele-reason-box\"><CustomHeader \n           data={{centerText:\"\u9500\u5047\u539F\u56E0\",rightText:\"\"}} \n           backIsShow={true} \n           back={(e)=>{ \n                this.setState({\n                  open:false\n                });\n           }} />\n            <div className=\"ysp-bottom-default\">\n            <div className=\"ysp-con-box ysp-reason ysp-del-reason\">\n            <div className=\"ysp-big-tit\">\u9500\u5047\u539F\u56E0</div>\n           <ATextarea className={\"reason \"+data.pserror} placeholder=\"\u8BF7\u8F93\u5165\u539F\u56E0\" value={data.vall[0]} onBlur={(e)=>{\n            var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.value,\n            \teventType:\"change\"\n              })\n            }\n           }} ></ATextarea>\n        \t</div>\n        </div>\n\t\t\t\t{data && data.vall.length>0?\n        <div className=\"ysp-btn-box\">\n            <button className={\"ysp-sel-btn \"+data.grey[1]} onClick={_this.handlerClick1.bind(_this)}>{data.vall[2]}</button>\n        <button className={\"ysp-save-btn \"+data.grey[0]} onClick={_this.handlerClick2.bind(_this)}>{data.vall[1]}</button>\n        </div>\n          :\n        <div></div>\n        }\n          </div>:<div className=\"ysp-selloff-sel\">\n        <label><AInput type=\"checkbox\" onClick={_this.checkClick.bind(_this)}/>\u5168\u9009</label>\n        <span className=\"sel-reason\" onClick={_this.showReason.bind(_this)}>\u63D0\u4EA4\u539F\u56E0</span>\n      </div>} \n      </div>\n    )\n  }\n};";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  _createClass(_class, [{\n    key: 'handlerClick1',\n    value: function handlerClick1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value],\n          eventType: \"click1\"\n        });\n      }\n    }\n  }, {\n    key: 'handlerClick2',\n    value: function handlerClick2(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value],\n          eventType: \"click2\"\n        });\n      }\n    }\n  }]);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      open: false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'checkClick',\n    value: function checkClick(e) {\n\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"checkclick\",\n          data: e.target.checked\n        });\n      }\n    }\n  }, {\n    key: 'showReason',\n    value: function showReason(e) {\n      this.setState({\n        open: true\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var data = this.props.data.customData;\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        this.state.open ? React.createElement(\n          'div',\n          { className: 'dele-reason-box' },\n          React.createElement(_yspCustomComponents.CustomHeader, {\n            data: { centerText: \"\u9500\u5047\u539F\u56E0\", rightText: \"\" },\n            backIsShow: true,\n            back: function back(e) {\n              _this3.setState({\n                open: false\n              });\n            } }),\n          React.createElement(\n            'div',\n            { className: 'ysp-bottom-default' },\n            React.createElement(\n              'div',\n              { className: 'ysp-con-box ysp-reason ysp-del-reason' },\n              React.createElement(\n                'div',\n                { className: 'ysp-big-tit' },\n                '\\u9500\\u5047\\u539F\\u56E0'\n              ),\n              React.createElement(ATextarea, { className: \"reason \" + data.pserror, placeholder: '\\u8BF7\\u8F93\\u5165\\u539F\\u56E0', value: data.vall[0], onBlur: function onBlur(e) {\n                  var handler = _this3.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: e.target.value,\n                      eventType: \"change\"\n                    });\n                  }\n                } })\n            )\n          ),\n          data && data.vall.length > 0 ? React.createElement(\n            'div',\n            { className: 'ysp-btn-box' },\n            React.createElement(\n              'button',\n              { className: \"ysp-sel-btn \" + data.grey[1], onClick: _this.handlerClick1.bind(_this) },\n              data.vall[2]\n            ),\n            React.createElement(\n              'button',\n              { className: \"ysp-save-btn \" + data.grey[0], onClick: _this.handlerClick2.bind(_this) },\n              data.vall[1]\n            )\n          ) : React.createElement('div', null)\n        ) : React.createElement(\n          'div',\n          { className: 'ysp-selloff-sel' },\n          React.createElement(\n            'label',\n            null,\n            React.createElement(AInput, { type: 'checkbox', onClick: _this.checkClick.bind(_this) }),\n            '\\u5168\\u9009'\n          ),\n          React.createElement(\n            'span',\n            { className: 'sel-reason', onClick: _this.showReason.bind(_this) },\n            '\\u63D0\\u4EA4\\u539F\\u56E0'\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control39_gHDVro: function (elem) {
      //提示弹框
      if (elem && elem.getAttribute("role") == "alertdialog") {
        return ysp.customHelper.alert(elem);
      } else {
        return;
      }
    },
    doAction_uiControl39_1cSzpI: function (data, elem) {
      if (data.eventType == "btnClick") {
        if (data.dataCustom == "sure") {
          elem.querySelector("input[value='确定']").click();
        } else {
          elem.querySelector("input[value='取消']").click();
        }
      }
    },
    getTemplate_uiControl39_1cSzpI: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomAlert} from 'ysp-custom-components';\nexport default class extends Component{\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"btnClick\",\n        data:target.className\n      })\n    }\n  }\n  render () {\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div>\n      \t{data? <CustomAlert\n           data={data}\n          btnClick={_this.btnClick.bind(_this)}\n        />:<div></div>}\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"btnClick\",\n          data: target.className\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        data ? React.createElement(_yspCustomComponents.CustomAlert, {\n          data: data,\n          btnClick: _this.btnClick.bind(_this)\n        }) : React.createElement('div', null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control60_HBVKgs: function (elem) {
      if (elem && elem.querySelector("div[id*='SAVED']") && elem.querySelector("div[id*='SAVED']").style.display == "block") {
        return true;
      } else {
        return;
      }
    },
    doAction_uiControl59_boR2bP: function (data, elem) {},
    getTemplate_uiControl59_boR2bP: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  render(){\n    var data=this.props.customData;\n    return(\n    \t<div>\n      \t{data? \n          <div className=\"savedModal\">\n\t\t\t\t\t\t<div className=\"saveContent\">\n            \t<div>\u221A</div>\n              <div>\u5DF2\u4FDD\u5B58</div>\n            </div>\n          </div>:\n          <div></div>\n        }\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        null,\n        data ? React.createElement(\n          \"div\",\n          { className: \"savedModal\" },\n          React.createElement(\n            \"div\",\n            { className: \"saveContent\" },\n            React.createElement(\n              \"div\",\n              null,\n              \"\\u221A\"\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              \"\\u5DF2\\u4FDD\\u5B58\"\n            )\n          )\n        ) : React.createElement(\"div\", null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control40_H5vsyw: function (elem) {
      if (elem && elem.querySelector("div[id*='SAVED']") && elem.querySelector("div[id*='SAVED']").style.display == "block") {
        return true;
      } else {
        return;
      }
    },
    doAction_uiControl40_DyC3pT: function (data, elem) {},
    getTemplate_uiControl40_DyC3pT: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  render(){\n    var data=this.props.customData;\n    return(\n    \t<div>\n      \t{data? \n          <div className=\"savedModal\">\n\t\t\t\t\t\t<div className=\"saveContent\">\n            \t<div>\u221A</div>\n              <div>\u5DF2\u4FDD\u5B58</div>\n            </div>\n          </div>:\n          <div></div>\n        }\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        null,\n        data ? React.createElement(\n          \"div\",\n          { className: \"savedModal\" },\n          React.createElement(\n            \"div\",\n            { className: \"saveContent\" },\n            React.createElement(\n              \"div\",\n              null,\n              \"\\u221A\"\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              \"\\u5DF2\\u4FDD\\u5B58\"\n            )\n          )\n        ) : React.createElement(\"div\", null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control68_uTPBoE: function (elem) {
      if (!elem) {
        return;
      }var disabedMask = elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN").disabled;if (elem && disabedMask) {
        return true;
      }
    },
    doAction_uiControl100_WTfc2b: function (data, elem) {},
    getTemplate_uiControl100_WTfc2b: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  render(){\n    var data=this.props.customData;\n    return(\n    \t<div>\n      \t{data? <div className=\"disableMask\">\n      </div>:\"\"}\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        null,\n        data ? React.createElement(\"div\", { className: \"disableMask\" }) : \"\"\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "selloffAppli");
})(window, ysp);