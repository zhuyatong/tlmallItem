(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control22_BzxsFT: function (elem) {
      if (!elem) {
        return;
      }var data = {};var titles = ['请求', '创建者', '创建时间'];var content = [];if (!elem.querySelector("#BrowseTable")) {
        data.titles = titles;data.content = content;return data;
      }var doc = elem.querySelector("#BrowseTable");var trs = doc.querySelectorAll('tr');
      [].forEach.call(trs, function (trItem, trIndex) {
        var tds = trItem.querySelectorAll('td');var tdContent = [];[].forEach.call(tds, function (tdItem, tdIndex) {
          if (tdIndex > 1) {
            tdContent.push(tdItem.textContent.trim());
          }
        });content.push(tdContent);
      });data.titles = titles;data.content = content;return data;
    },
    doAction_uiControl16_dUy4PC: function (data, elem) {},
    getTemplate_uiControl16_dUy4PC: function () {
      var selfTemplate = "import {\n\tComponent\n} from 'react';\nimport {\n\tCommonHeader, ADialog\n} from 'ysp-custom-components';\nexport default class extends Component {\n\tconstructor(props) {// \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n\t\tsuper(props);\n\t}\n  \n  addSelectData(e){\n    let handler=this.props.customHandler;\n\t\tvar target=e.target;\n\t\tif(handler){\n      console.log(target.parentElement);\n    }\n  }\n  \n  render(){\n    var _this = this;\n    var data = this.props.customData;\n    var titles = data.titles;\n    var content = data.content;\n    return(\n    \t<div>\n        <div className=\"ysp-related-doc-search-table\" id=\"tableData\">\n          <table style={{'width':'100%', 'text-align':'center'}}>\n            <thead>\n              {titles.map((thItem, thIndex)=>{\n                return(<th>{thItem}</th>);\n              })}\n            </thead>\n            {content.map((trItem, trIndex)=>{\n              return(\n                <tr data-index={trIndex} onClick={_this.addSelectData.bind(_this)}>\n                  {trItem.map((tdItem, tdIndex)=>{\n                    return(\n                      <td>{tdItem}</td>\n                    );\n                  })}\n                </tr>\n              );\n            })}\n          </table>\n        </div>\n        <div id=\"selectedData\" style={{'border-top':'1px solid #ddd', 'margin':'20px 0'}}>\n        </div>\n      </div>\n    );\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    // \u6784\u9020\u51FD\u6570-->\u521D\u59CB\u5316\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: 'addSelectData',\n    value: function addSelectData(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        console.log(target.parentElement);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      var titles = data.titles;\n      var content = data.content;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { className: 'ysp-related-doc-search-table', id: 'tableData' },\n          React.createElement(\n            'table',\n            { style: { 'width': '100%', 'text-align': 'center' } },\n            React.createElement(\n              'thead',\n              null,\n              titles.map(function (thItem, thIndex) {\n                return React.createElement(\n                  'th',\n                  null,\n                  thItem\n                );\n              })\n            ),\n            content.map(function (trItem, trIndex) {\n              return React.createElement(\n                'tr',\n                { 'data-index': trIndex, onClick: _this.addSelectData.bind(_this) },\n                trItem.map(function (tdItem, tdIndex) {\n                  return React.createElement(\n                    'td',\n                    null,\n                    tdItem\n                  );\n                })\n              );\n            })\n          )\n        ),\n        React.createElement('div', { id: 'selectedData', style: { 'border-top': '1px solid #ddd', 'margin': '20px 0' } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control30_RZlQuz: function (elem) {},
    doAction_uiControl17_NkvIbB: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl17_NkvIbB: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:"\u76F8\u5173\u6D41\u7A0B"}} \n       backIsShow = {true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: "\u76F8\u5173\u6D41\u7A0B" },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control17_LknT8t: function (elem) {},
    doAction_uiControl22_ZaAa4t: function (data, elem) {
      var eventType = data.eventType;if (eventType == 'click') {
        elem.querySelector('#prjidsBtn').click();
      }
    },
    getTemplate_uiControl22_ZaAa4t: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { Dialog, CommonHeader } from \'ysp-custom-components\';\nexport default class extends Component {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = {\n\t\t\topen: false\n\t\t}\n\t}\n  \n  btnClick(e){\n    var handler = this.props.customHandler;\n    if(handler){\n    \thandler({\n        eventType:"click"\n      })\n    }\n  }\n\n\trender() {\n    var _this = this;\n\t\treturn (\n\t\t\t<div className="ysp-related-liucheng-wrapper">\n\t\t\t\t<div className="left-content">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u8BF7\u6C42\u6807\u9898</span>\n\t\t\t\t\t\t<input type="text" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u521B\u5EFA\u4EBA\u90E8\u95E8</span>\n\t\t\t\t\t\t<input type="text" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u5DE5\u4F5C\u6D41\u7C7B\u578B</span>\n\t\t\t\t\t\t<input type="text"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u6D41\u7A0B\u72B6\u6001</span>\n\t\t\t\t\t\t<input type="text"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u63A5\u6536\u65F6\u95F4</span>\n\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t<option>\u6700\u8FD16\u4E2A\u6708</option>\n\t\t\t\t\t\t\t<option>\u6700\u8FD112\u4E2A\u6708</option>\n\t\t\t\t\t\t\t<option>\u6700\u8FD118\u4E2A\u6708</option>\n\t\t\t\t\t\t\t<option>\u5168\u90E8</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div className="right-content">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u521B\u5EFA\u4EBA</span>\n\t\t\t\t\t\t<input type="text"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u6D41\u7A0B\u7F16\u53F7</span>\n            <input type="text"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u9879\u76EE</span>\n\t\t\t\t\t\t<input onClick={_this.btnClick.bind(_this)} type="text"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\u5BA2\u6237</span>\n\t\t\t\t\t\t<input type="text"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div className="date">\n\t\t\t\t\t\t<span>\u65E5\u671F</span>\n\t\t\t\t\t\t<input type="date"/><i> \u2014 </i><input type="date"/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div className="search-button">\u641C\u7D22</div>\n\t\t\t</div>\n\t\t);\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n\t\t_this2.state = {\n\t\t\topen: false\n\t\t};\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'btnClick\',\n\t\tvalue: function btnClick(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\teventType: "click"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this = this;\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-related-liucheng-wrapper\' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'left-content\' },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u8BF7\\u6C42\\u6807\\u9898\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'text\' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u521B\\u5EFA\\u4EBA\\u90E8\\u95E8\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'text\' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u5DE5\\u4F5C\\u6D41\\u7C7B\\u578B\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'text\' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u6D41\\u7A0B\\u72B6\\u6001\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'text\' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u63A5\\u6536\\u65F6\\u95F4\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'select\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'option\',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\'\\u6700\\u8FD16\\u4E2A\\u6708\'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'option\',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\'\\u6700\\u8FD112\\u4E2A\\u6708\'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'option\',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\'\\u6700\\u8FD118\\u4E2A\\u6708\'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'option\',\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\'\\u5168\\u90E8\'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'right-content\' },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u521B\\u5EFA\\u4EBA\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'text\' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u6D41\\u7A0B\\u7F16\\u53F7\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'text\' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u9879\\u76EE\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { onClick: _this.btnClick.bind(_this), type: \'text\' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u5BA2\\u6237\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'text\' })\n\t\t\t\t\t),\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t{ className: \'date\' },\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\'\\u65E5\\u671F\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'date\' }),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'i\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\' \\u2014 \'\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\'input\', { type: \'date\' })\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'search-button\' },\n\t\t\t\t\t\'\\u641C\\u7D22\'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);