(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control187_txSshT: function (elem) {},
    doAction_uiControl185_UDUcSJ: function (data, elem) {
      if (data.eventType == "back") {
        // ysp.customHelper.backHome();
        //ysp.appMain.back(); //ysp.customHelper.back(); //history.go(-1);
        // if (parent.EAPI.isIOS() || parent.EAPI.isAndroid()) {
        //   parent.EAPI.back();
        // } else {
        //   ysp.appMain.back();
        // } // ysp.customHelper.forceMatchModels("HESInformationFill");
        var pageId = window.beforePageId;if (parent.EAPI.isAndroid() && pageId == "context52_Wg5qcG") {
          history.back();
        } else if (parent.EAPI.isIOS() && pageId == "context52_Wg5qcG") {
          var url = "http://192.168.220.82:8080/pttlCrm/res/page/psi/storeInfocollection.html";ysp.appMain.reloadPage(url);
        } else if (parent.EAPI.isIOS() && pageId == "context2_15cCKI") {
          var urls = "http://192.168.220.82:8080/pttlCrm/res/page/visitManager/customerWorkspace/customerWorkspace.html";ysp.appMain.reloadPage(urls);
        } else {
          history.back();
        }
      }
    },
    getTemplate_uiControl185_UDUcSJ: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  InformationHeader\n} from 'ysp-custom-components';\nimport {SaleReachCalendar} from 'ysp-custom-components';\nexport default class extends Component{\n   constructor(props){\n     super(props);\n   }\n  click(){\n    var evt = new Event('ysp-time-show')\n    window.dispatchEvent(evt)\n  }\n   render(){\n       let _this = this;\n       return (\n         <InformationHeader \n           data={{centerText:\"\u65E5\u522BPSI\",rightText:\"\"}} \n           backIsShow={true}\n           time={(e)=>{\n              var evt = new Event('ysp-time-show');\n              evt.value = '\u6253\u5F00\u65E5\u5386';\n            \twindow.dispatchEvent(evt)\n              // let target=e.target;\n              // let handler=this.props.customHandler;\n              // if(handler){\n              //    handler({\n              //      eventType:'click'\n              //    })\n              // }\n  \t\t\t\t\t}\n          }\n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n    value: function click() {\n      var evt = new Event('ysp-time-show');\n      window.dispatchEvent(evt);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(_yspCustomComponents.InformationHeader, {\n        data: { centerText: \"\u65E5\u522BPSI\", rightText: \"\" },\n        backIsShow: true,\n        time: function time(e) {\n          var evt = new Event('ysp-time-show');\n          evt.value = '\u6253\u5F00\u65E5\u5386';\n          window.dispatchEvent(evt\n          // let target=e.target;\n          // let handler=this.props.customHandler;\n          // if(handler){\n          //    handler({\n          //      eventType:'click'\n          //    })\n          // }\n          );\n        },\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control191_T9wnrr: function (elem) {
      var data = {};if (ysp.customHelper.tipMsg.getMsg()) {
        data.postMessage = ysp.customHelper.tipMsg.getMsg();
      } else {
        data.postMessage = "";
      }return data;
    },
    doAction_uiControl188_BxUZ4R: function (data, elem) {
      if (data.eventType == "alertClick") {
        ysp.customHelper.tipMsg.confirm();
      }
    },
    getTemplate_uiControl188_BxUZ4R: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n\tAlert\n} from 'ysp-custom-components';\nexport default class extends Component {\n  \n  render(){\n    var _this=this;\n    var dataMessage = (this.props.customData && this.props.customData.postMessage) || \"\";\n     return(\n    \t<div>\n        {dataMessage==\"\" ? \"\" : \n          <Alert\n            content={dataMessage} \n            dismiss={\n              (e)=>{\n                var handler=this.props.customHandler;\n                if(handler){\n                  handler({\n                    eventType:\"alertClick\"\n                  })\n                }\n              }\n            }\n          />\n        }\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var dataMessage = this.props.customData && this.props.customData.postMessage || \"\";\n      return React.createElement(\n        'div',\n        null,\n        dataMessage == \"\" ? \"\" : React.createElement(_yspCustomComponents.Alert, {\n          content: dataMessage,\n          dismiss: function dismiss(e) {\n            var handler = _this3.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: \"alertClick\"\n              });\n            }\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control194_pPJ1sv: function (elem) {},
    doAction_uiControl191_FNDGZR: function (data, elem) {
      if (data.eventType == 'upValue') {
        var input = elem.ownerDocument.querySelector('#srarch_date');input.value = data.dataCustom;input.focus();elem.ownerDocument.querySelector("#search").click();
      }
    },
    getTemplate_uiControl191_FNDGZR: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {SaleReachCalendar} from 'ysp-custom-components';\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      year : true,\n      mouth : true,\n      day : true,\n      show : false,\n      data : true\n    }\n    window.addEventListener('ysp-time-show',this.toggle.bind(this),false)\n  }\n  componentDidUpdate(){\n    this.state.show ? this.styleId(): console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n  }\n  styleId(){\n    var doc = this.refs.time;\n    if(this.state.data && !this.state.day  && !!this.state.mouth){\n      doc.querySelector('#year').style.width = '50%';\n      doc.querySelector('#mouth').style.width = '50%';\n    }\n    if(this.state.data && !this.state.mouth && !this.state.day){\n      doc.querySelector('#year').style.width = '100%';\n    }\n    if(!this.state.data){\n      doc.querySelector('#year').style.width = '100%';\n    }\n  }\n  toggle(){\n    this.setState({\n      show : !this.state.show\n    })\n  }\n  activeValue(even){\n    var doc = even.parentElement.nextElementSibling;\n    var year = doc.querySelector('#year').querySelector('.active').textContent;\n    var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n    var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n    mouth = mouth < 10 ? '0' + mouth : mouth; \n    day = day && day < 10 ? '0' + day : day;\n    var time = day ? (year + '-' + mouth + '-' + day ) :( mouth ? year + '-' + mouth : year);\n    return time;\n    // if(this.props.customData){\n    //   var year = doc.querySelector('#year').querySelector('.active').textContent;\n    //   var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n    //   var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n    //   mouth = mouth < 10 ? '0' + mouth : mouth; \n    //   day = day && day < 10 ? '0' + day : day;\n    //   var time = day ? (year + '-' + mouth + '-' + day ) :( mouth ? year + '-' + mouth : year);\n    //   return time;\n    // }else{\n    //   return doc.querySelector('#year').querySelector('.active').textContent;\n    // }\n    \n  }\n  upValue(e){\n    var handler = this.props.customHandler;\n    var value = this.activeValue(e.target);\n    if(handler){\n      handler({\n        data : value,\n        eventType : 'upValue'\n      })\n    }\n    this.setState({\n      show : false\n    })\n  }\n  render(){\n    var _this = this;\n    return(\n      <div>{this.state.show && \n        <div className='moudle-time' ref='time'>\n          <div className = 'date-time'>\n            <SaleReachCalendar \n              mouth = {_this.state.mouth}\n              day = {_this.state.day}\n              upValue = {_this.upValue.bind(_this)}\n              show = {(e)=>{\n                _this.toggle();\n              }}\n              y = {_this.state.year}\n            />\n          </div>\n        </div>}\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      year: true,\n      mouth: true,\n      day: true,\n      show: false,\n      data: true\n    };\n    window.addEventListener('ysp-time-show', _this2.toggle.bind(_this2), false);\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      this.state.show ? this.styleId() : console.log('\u65E5\u5386\u8FD8\u6CA1\u6253\u5F00\u5462');\n    }\n  }, {\n    key: 'styleId',\n    value: function styleId() {\n      var doc = this.refs.time;\n      if (this.state.data && !this.state.day && !!this.state.mouth) {\n        doc.querySelector('#year').style.width = '50%';\n        doc.querySelector('#mouth').style.width = '50%';\n      }\n      if (this.state.data && !this.state.mouth && !this.state.day) {\n        doc.querySelector('#year').style.width = '100%';\n      }\n      if (!this.state.data) {\n        doc.querySelector('#year').style.width = '100%';\n      }\n    }\n  }, {\n    key: 'toggle',\n    value: function toggle() {\n      this.setState({\n        show: !this.state.show\n      });\n    }\n  }, {\n    key: 'activeValue',\n    value: function activeValue(even) {\n      var doc = even.parentElement.nextElementSibling;\n      var year = doc.querySelector('#year').querySelector('.active').textContent;\n      var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n      var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n      mouth = mouth < 10 ? '0' + mouth : mouth;\n      day = day && day < 10 ? '0' + day : day;\n      var time = day ? year + '-' + mouth + '-' + day : mouth ? year + '-' + mouth : year;\n      return time;\n      // if(this.props.customData){\n      //   var year = doc.querySelector('#year').querySelector('.active').textContent;\n      //   var mouth = this.state.mouth && doc.querySelector('#mouth').querySelector('.active').textContent;\n      //   var day = this.state.day && doc.querySelector('#day').querySelector('.active').textContent;\n      //   mouth = mouth < 10 ? '0' + mouth : mouth; \n      //   day = day && day < 10 ? '0' + day : day;\n      //   var time = day ? (year + '-' + mouth + '-' + day ) :( mouth ? year + '-' + mouth : year);\n      //   return time;\n      // }else{\n      //   return doc.querySelector('#year').querySelector('.active').textContent;\n      // }\n    }\n  }, {\n    key: 'upValue',\n    value: function upValue(e) {\n      var handler = this.props.customHandler;\n      var value = this.activeValue(e.target);\n      if (handler) {\n        handler({\n          data: value,\n          eventType: 'upValue'\n        });\n      }\n      this.setState({\n        show: false\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        this.state.show && React.createElement(\n          'div',\n          { className: 'moudle-time', ref: 'time' },\n          React.createElement(\n            'div',\n            { className: 'date-time' },\n            React.createElement(_yspCustomComponents.SaleReachCalendar, {\n              mouth: _this.state.mouth,\n              day: _this.state.day,\n              upValue: _this.upValue.bind(_this),\n              show: function show(e) {\n                _this.toggle();\n              },\n              y: _this.state.year\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control269_GG32xJ: function (elem) {
      if (!elem) {
        return [];
      }var data = { content: [], SO: [], I: [], trsLength: [], dateName: [] };var el = elem.querySelector(".m-time").querySelector("#storeName").textContent;var content = el.split(" : ")[1];data.dateName.push(content);var trs = elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr");if (trs) {
        [].forEach.call(trs, function (item, index) {
          var trsLength = trs.length;var SOInput = item.querySelectorAll("td")[6].querySelectorAll("input")[1] || item.querySelectorAll("td")[6].textContent;var input = item.querySelectorAll("td")[7].querySelectorAll("input")[1] || item.querySelectorAll("td")[7].textContent;var SOInputType;var SOInputValue;var b = [];var a = [];if (SOInput) {
            if (item.querySelectorAll("td")[6].querySelectorAll("input")[1]) {
              SOInputType = true;SOInputValue = item.querySelectorAll("td")[6].querySelectorAll("input")[1].value;
            } else {
              SOInputType = "flag";SOInputValue = item.querySelectorAll("td")[6].textContent;
            }
          } else {
            SOInputType = false;SOInputValue = "";
          }b.push(SOInputType);b.push(SOInputValue);data.SO.push(b); //data.SO.inputValue.push(SOInputValue);
          var inputType;var inputValue;if (input) {
            if (item.querySelectorAll("td")[7].querySelectorAll("input")[1]) {
              inputType = true;inputValue = item.querySelectorAll("td")[7].querySelectorAll("input")[1].value;
            } else {
              inputType = "flag";inputValue = item.querySelectorAll("td")[7].textContent;
            }
          } else {
            inputType = false;inputValue = "";
          }a.push(inputType);a.push(inputValue);data.I.push(a);var c = [];var dateText = item.querySelectorAll("td")[0].textContent;var xmText = item.querySelectorAll("td")[2].textContent;var cpxlText = item.querySelectorAll("td")[3].textContent;var jxText = item.querySelectorAll("td")[4].textContent;var colorText = item.querySelectorAll("td")[5].textContent;c.push(dateText);c.push(xmText);c.push(cpxlText);c.push(jxText);c.push(colorText);data.content.push(c);data.trsLength.push(trsLength);
        });return data;
      }return data;
    },
    doAction_uiControl263_mya1kd: function (data, elem) {
      if (data.eventType == "change") {
        var value = data.dataCustom.value;var index = data.dataCustom.index;var type = data.dataCustom.type;if ("PSISO" == type) {
          elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr")[index].querySelectorAll("td")[6].querySelectorAll("input")[1].defaultValue = value.replace(/[^0-9]/g, "");
        }if ("PSII" == type) {
          elem.querySelector("#psiEnterTable").querySelector("#tbodyContent").querySelectorAll("tr")[index].querySelectorAll("td")[7].querySelectorAll("input")[1].defaultValue = value.replace(/[^0-9]/g, "");
        }
      } else if (data.eventType == "click") {
        elem.ownerDocument.querySelector(".collectionPSIentercontentbutton").querySelectorAll("span")[0].click();
      }
    },
    getTemplate_uiControl263_mya1kd: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  \n  onChange(e){\n    //var target = e.target;\n    e.target.value = e.target.value.replace(/[^0-9]/g,'');\n    var handler = this.props.customHandler;\n    var value = e.target.value;\n    if(handler){\n      handler({\n        data:{\n          value:value,\n          index:e.target.getAttribute(\"data-index\"),\n          type:e.target.getAttribute(\"data-type\"),\n        },\n        eventType:\"change\"\n      })\n    }\n  }\n  onClick(e){\n    var handler=this.props.customHandler;\n    var targets = e.target;\n    //e.target.setAttribute(disabled,\"disabled\");\n    targets.disabled = true;\n    setTimeout(function(e){\n      targets.disabled = false;\n    },1500)\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n    \n    // ysp.appMain.showLoading();\n    // setTimeout(function(){\n    //   ysp.appMain.hideLoading();\n    // },1500)\n  }\n\trender(){\n    var data = this.props.customData;\n    var _this=this;\n    return(\n      <div>\n        <div className=\"ysp-client-store-name\">\n          <span>\u95E8\u5E97\u540D\u79F0\uFF1A</span>\n          <span>{data.dateName}</span>\n        </div>\n        \n        <div className=\"ysp_StoreInfomationFillDay_PSI\">\n      \t{data.trsLength.length >0 ? \n        data.SO.map((item,index)=>{\n          return(\n            <div className=\"ysp_StoreInfomationFillDay_PSI_item\">\n              <div>\n                <span className=\"ysp_PSI_item\">{data.content[index][1]}</span>\n                <span className=\"ysp_PSI_date\">{data.content[index][0]}</span>\n              </div>\n              <div>\n                <span>\u4EFB\u52A1\u9879:</span>\n                <span>{data.content[index][2]}{data.content[index][3]}{data.content[index][4]}</span>\n              </div>\n              <div>\n                {\n                  item[0] == true && item[1].length >0 ? <div className=\"ysp_StoreDay_PSI_item_input_blueColor\">\n                  <span>SO</span>\n                  <span><input type=\"text\" name=\"name\" value= {item[1]} data-index={index} data-type = \"PSISO\" onChange={_this.onChange.bind(_this)}/></span>\n                </div> \n                    : \n                item[0] == true && item[1].length <= 0 ? \n                <div className=\"ysp_StoreDay_PSI_item_input_color\">\n                  <span>SO</span>\n                  <span><input type=\"text\" name=\"name\" data-index={index} data-type = \"PSISO\" onChange={_this.onChange.bind(_this)} value={item[1]}/></span>\n                </div>\n                    :\n                  item[0] == \"flag\" ? \n                <div className=\"ysp_StoreDay_PSI_item_noInput\">\n                  <span>SO</span>\n                  <span>{item[1]}</span>\n                </div>\n                  :\n                <div className=\"ysp_StoreDay_PSI_item-color\">\n                  <span>SO</span>\n                  <span><input type=\"text\" disabled/></span>\n                </div>\n                }\n              \t \n                {\n                  data.I[index][0] == true && data.I[index][1].length >0 ? <div className=\"ysp_StoreDay_PSI_item_input_blueColor\">\n                  <span>I</span>\n                  <span><input type=\"text\" name = \"name\" value={data.I[index][1]} data-index={index} data-type= \"PSII\" onChange={_this.onChange.bind(_this)}/></span>\n                </div> \n                    : \n                data.I[index][0] == true && data.I[index][1].length <=0 ? \n                <div className=\"ysp_StoreDay_PSI_item_input_color\">\n                  <span>I</span>\n                  <span><input type=\"text\" name = \"name\" data-index={index} data-type=\"PSII\" onChange={_this.onChange.bind(_this)} value={data.I[index][1]}/></span>\n                </div> \n                    : \n                  data.I[index][0] == \"flag\" ? \n                <div className=\"ysp_StoreDay_PSI_item_noInput\" >\n                  <span>I</span>\n                  <span>{data.I[index][1]}</span>\n                </div>\n                    : \n                <div className=\"ysp_StoreDay_PSI_item-color\" >\n                  <span>I</span>\n                  <span><input type=\"text\" disabled/></span>\n                </div>\n                }\n              </div>\n           </div>\n          )\n        }) : <div className=\"ysp-no-datas\" style={{height:'76vh'}}>\n            \t<div></div>\n            \t<div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>\n          \t </div>}\n          {\n            data.trsLength.length >0 ? <div className=\"ysp_dayPSI_submit-save\">\n        \t<button onClick={_this.onClick.bind(_this)} className=\"ysp_dayPSI_submitBtn\">\u63D0\u4EA4</button>\n        </div> : <div></div>\n          }\n      </div>\n      \n      </div>\n    \t\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"onChange\",\n    value: function onChange(e) {\n      //var target = e.target;\n      e.target.value = e.target.value.replace(/[^0-9]/g, '');\n      var handler = this.props.customHandler;\n      var value = e.target.value;\n      if (handler) {\n        handler({\n          data: {\n            value: value,\n            index: e.target.getAttribute(\"data-index\"),\n            type: e.target.getAttribute(\"data-type\")\n          },\n          eventType: \"change\"\n        });\n      }\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick(e) {\n      var handler = this.props.customHandler;\n      var targets = e.target;\n      //e.target.setAttribute(disabled,\"disabled\");\n      targets.disabled = true;\n      setTimeout(function (e) {\n        targets.disabled = false;\n      }, 1500);\n      if (handler) {\n        handler({\n          eventType: \"click\"\n        });\n      }\n\n      // ysp.appMain.showLoading();\n      // setTimeout(function(){\n      //   ysp.appMain.hideLoading();\n      // },1500)\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"div\",\n          { className: \"ysp-client-store-name\" },\n          React.createElement(\n            \"span\",\n            null,\n            \"\\u95E8\\u5E97\\u540D\\u79F0\\uFF1A\"\n          ),\n          React.createElement(\n            \"span\",\n            null,\n            data.dateName\n          )\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"ysp_StoreInfomationFillDay_PSI\" },\n          data.trsLength.length > 0 ? data.SO.map(function (item, index) {\n            return React.createElement(\n              \"div\",\n              { className: \"ysp_StoreInfomationFillDay_PSI_item\" },\n              React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                  \"span\",\n                  { className: \"ysp_PSI_item\" },\n                  data.content[index][1]\n                ),\n                React.createElement(\n                  \"span\",\n                  { className: \"ysp_PSI_date\" },\n                  data.content[index][0]\n                )\n              ),\n              React.createElement(\n                \"div\",\n                null,\n                React.createElement(\n                  \"span\",\n                  null,\n                  \"\\u4EFB\\u52A1\\u9879:\"\n                ),\n                React.createElement(\n                  \"span\",\n                  null,\n                  data.content[index][2],\n                  data.content[index][3],\n                  data.content[index][4]\n                )\n              ),\n              React.createElement(\n                \"div\",\n                null,\n                item[0] == true && item[1].length > 0 ? React.createElement(\n                  \"div\",\n                  { className: \"ysp_StoreDay_PSI_item_input_blueColor\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"SO\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"input\", { type: \"text\", name: \"name\", value: item[1], \"data-index\": index, \"data-type\": \"PSISO\", onChange: _this.onChange.bind(_this) })\n                  )\n                ) : item[0] == true && item[1].length <= 0 ? React.createElement(\n                  \"div\",\n                  { className: \"ysp_StoreDay_PSI_item_input_color\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"SO\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"input\", { type: \"text\", name: \"name\", \"data-index\": index, \"data-type\": \"PSISO\", onChange: _this.onChange.bind(_this), value: item[1] })\n                  )\n                ) : item[0] == \"flag\" ? React.createElement(\n                  \"div\",\n                  { className: \"ysp_StoreDay_PSI_item_noInput\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"SO\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    item[1]\n                  )\n                ) : React.createElement(\n                  \"div\",\n                  { className: \"ysp_StoreDay_PSI_item-color\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"SO\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"input\", { type: \"text\", disabled: true })\n                  )\n                ),\n                data.I[index][0] == true && data.I[index][1].length > 0 ? React.createElement(\n                  \"div\",\n                  { className: \"ysp_StoreDay_PSI_item_input_blueColor\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"I\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"input\", { type: \"text\", name: \"name\", value: data.I[index][1], \"data-index\": index, \"data-type\": \"PSII\", onChange: _this.onChange.bind(_this) })\n                  )\n                ) : data.I[index][0] == true && data.I[index][1].length <= 0 ? React.createElement(\n                  \"div\",\n                  { className: \"ysp_StoreDay_PSI_item_input_color\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"I\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"input\", { type: \"text\", name: \"name\", \"data-index\": index, \"data-type\": \"PSII\", onChange: _this.onChange.bind(_this), value: data.I[index][1] })\n                  )\n                ) : data.I[index][0] == \"flag\" ? React.createElement(\n                  \"div\",\n                  { className: \"ysp_StoreDay_PSI_item_noInput\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"I\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    data.I[index][1]\n                  )\n                ) : React.createElement(\n                  \"div\",\n                  { className: \"ysp_StoreDay_PSI_item-color\" },\n                  React.createElement(\n                    \"span\",\n                    null,\n                    \"I\"\n                  ),\n                  React.createElement(\n                    \"span\",\n                    null,\n                    React.createElement(\"input\", { type: \"text\", disabled: true })\n                  )\n                )\n              )\n            );\n          }) : React.createElement(\n            \"div\",\n            { className: \"ysp-no-datas\", style: { height: '76vh' } },\n            React.createElement(\"div\", null),\n            React.createElement(\n              \"div\",\n              null,\n              \"\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\"\n            )\n          ),\n          data.trsLength.length > 0 ? React.createElement(\n            \"div\",\n            { className: \"ysp_dayPSI_submit-save\" },\n            React.createElement(\n              \"button\",\n              { onClick: _this.onClick.bind(_this), className: \"ysp_dayPSI_submitBtn\" },\n              \"\\u63D0\\u4EA4\"\n            )\n          ) : React.createElement(\"div\", null)\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "storeDayPSI");
})(window, ysp);