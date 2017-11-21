(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control231_BkOpTo: function (elem) {},
    doAction_uiControl225_KLByMu: function (data, elem) {
      if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "门店详情", "storeDetails");
      }
    },
    getTemplate_uiControl225_KLByMu: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u5E97\u5458\u4FE1\u606F\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u5E97\u5458\u4FE1\u606F", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control245_SUVE4l: function (elem) {
      if (!elem) {
        return [];
      }var data = { dataContent: [], dataLoading: [] };var content = ysp.customHelper.getTableData(elem, ["店员姓名", "店员编号", "店员级别", "联系电话", "店员属性"]);data.dataContent.push(content);var loading = ysp.customHelper.tipMsg.getLoading();data.dataLoading.push(loading);return data;
    },
    doAction_uiControl239_2GIPZg: function (data, elem) {},
    getTemplate_uiControl239_2GIPZg: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  CustomHeader\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  render = () => {\n    var  _this = this;\n    var data = (this.props.customData && this.props.customData.dataContent && this.props.customData.dataContent[0].content) || [];\n    var dataLoading = (this.props.customData && this.props.customData.dataLoading) || []\n    if (data.length == 0 && dataLoading[0] == null) {\n      return (<div>\u65E0\u6570\u636E</div>);\n    }\n    return (\n      <div className="ysp-clerk-message-wrapper">\n         {data.map((item,index)=>{\n             return (\n                <div className="ysp-clerk-message-content-wrapper">\n                   <div>\n                     <span>{item[0]}</span>\n                     <span>|</span>\n                     <span>{item[3]}</span>\n                   </div>\n            \n                  <div>\n                    <div>\n                      <span></span>\n                      <span>{item[1]}</span>\n                    </div>\n                    <div>\n                      <span>{item[2]}</span>\n                      <span>{item[4]}</span>\n                    </div>\n                  </div>\n                </div>\n             );\n           }) \n         }  \n    </div>\n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData && _this2.props.customData.dataContent && _this2.props.customData.dataContent[0].content || [];\n      var dataLoading = _this2.props.customData && _this2.props.customData.dataLoading || [];\n      if (data.length == 0 && dataLoading[0] == null) {\n        return React.createElement(\n          \'div\',\n          null,\n          \'\\u65E0\\u6570\\u636E\'\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-clerk-message-wrapper\' },\n        data.map(function (item, index) {\n          return React.createElement(\n            \'div\',\n            { className: \'ysp-clerk-message-content-wrapper\' },\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                item[0]\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                \'|\'\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                item[3]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\'span\', null),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[1]\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[2]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[4]\n                )\n              )\n            )\n          );\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);