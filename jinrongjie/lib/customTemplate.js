(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customTemplateHelper = {};
  utils.extend(ysp.customTemplateHelper, {
    CommonHeader: function () {
      var selfTemplate = "import {Component} from 'react';\n/*\n---------------------------\n\u5982\u4F55\u5F15\u7528\uFF1Aimport {CommonHeader} from 'ysp-custom-components';\n---------------------------\n*/\nexport default class extends Component{\n  componentDidMount(){\n  \t// if(this.refs.fixed.parentElement.getAttribute('data-componentsid')){\n  \t// this.refs.fixed.parentElement.style.height = '43px'\n  \t// }else{\n  \t// this.refs.fixed.parentElement.style.marginTop = '43px'\n  \t// }\n  }\n   componentDidMount(){\n    var outer=this.refs.fixed.ownerDocument.querySelector('.view-wrapper') \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n   render = () => {\n       return (\n          <div className=\"ysp-header-wrapper ysp-header-position-fixed\" ref='fixed'>\n           <span onClick={this.props.back}>\n             \n             {this.props.backIsShow &&\n                <span className='back'></span>\n             }\n             {this.props.backIsShow &&\n                <span>\n                  <span className=\"ysp-header-back-icon\">\u8FD4\u56DE</span>\n                </span>\n             }\n           </span>\n           \n           <span onClick={this.props.hander}>{this.props.data && this.props.data.centerText ? this.props.data.centerText:\"\"}</span>\n           \n           <span onClick={this.props.edit}>\n             {this.props.editIsShow1&&\n                <span>\n                  <span className=\"ysp-header-edit-icon\">\u53D6\u6D88</span>\n                </span>\n             }\n             {this.props.editIsShow&&\n             \t\t<span className=\"ysp-header-edit\" onClick={this.props.save}>\n             \t\t\t{this.props.editIsShow ? this.props.rightText:\"\"}\n             \t\t</span>\n             }\n           </span>\n          </div>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*\n---------------------------\n\u5982\u4F55\u5F15\u7528\uFF1Aimport {CommonHeader} from 'ysp-custom-components';\n---------------------------\n*/\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      return React.createElement(\n        'div',\n        { className: 'ysp-header-wrapper ysp-header-position-fixed', ref: 'fixed' },\n        React.createElement(\n          'span',\n          { onClick: _this.props.back },\n          _this.props.backIsShow && React.createElement('span', { className: 'back' }),\n          _this.props.backIsShow && React.createElement(\n            'span',\n            null,\n            React.createElement(\n              'span',\n              { className: 'ysp-header-back-icon' },\n              '\\u8FD4\\u56DE'\n            )\n          )\n        ),\n        React.createElement(\n          'span',\n          { onClick: _this.props.hander },\n          _this.props.data && _this.props.data.centerText ? _this.props.data.centerText : \"\"\n        ),\n        React.createElement(\n          'span',\n          { onClick: _this.props.edit },\n          _this.props.editIsShow1 && React.createElement(\n            'span',\n            null,\n            React.createElement(\n              'span',\n              { className: 'ysp-header-edit-icon' },\n              '\\u53D6\\u6D88'\n            )\n          ),\n          _this.props.editIsShow && React.createElement(\n            'span',\n            { className: 'ysp-header-edit', onClick: _this.props.save },\n            _this.props.editIsShow ? _this.props.rightText : \"\"\n          )\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      // if(this.refs.fixed.parentElement.getAttribute('data-componentsid')){\n      // this.refs.fixed.parentElement.style.height = '43px'\n      // }else{\n      // this.refs.fixed.parentElement.style.marginTop = '43px'\n      // }\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.fixed.ownerDocument.querySelector('.view-wrapper');\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    Dialog: function () {
      var selfTemplate = "import {Component} from 'react';\n/*\n---------------------------\n\u5982\u4F55\u5F15\u7528\uFF1Aimport {Dialog} from 'ysp-custom-components';\n---------------------------\n*/\nexport default class extends Component{\n   // constructor(props){\n   //    super(props);\n   //    this.smoothFixedLayout = new SmoothFixedLayout();\n   // }\n   render = () =>{\n       return( \n         <div \n           ref=\"dialog\"\n           className={this.props.close ===undefined ?\"ysp-dialog-wrapper\":(this.props.close === true?\"ysp-dialog-wrapper-hidden\":\"ysp-dialog-wrapper\")}>\n              {this.props.children}\n           </div>\n       );\n   }\n   // componentDidMount(){\n   //   //this.smoothFixedLayout.listen(this.refs.dialog);\n   // }\n   // componentWillUnmount(){\n   //   //this.smoothFixedLayout.destroy();\n   //   //this.smoothFixedLayout = null;\n   // }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*\n---------------------------\n\u5982\u4F55\u5F15\u7528\uFF1Aimport {Dialog} from 'ysp-custom-components';\n---------------------------\n*/\nvar _class = function (_Component) {\n   _inherits(_class, _Component);\n\n   // componentDidMount(){\n   //   //this.smoothFixedLayout.listen(this.refs.dialog);\n   // }\n   // componentWillUnmount(){\n   //   //this.smoothFixedLayout.destroy();\n   //   //this.smoothFixedLayout = null;\n   // }\n   function _class() {\n      var _ref;\n\n      var _temp, _this, _ret;\n\n      _classCallCheck(this, _class);\n\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n         args[_key] = arguments[_key];\n      }\n\n      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n         return React.createElement(\n            \"div\",\n            {\n               ref: \"dialog\",\n               className: _this.props.close === undefined ? \"ysp-dialog-wrapper\" : _this.props.close === true ? \"ysp-dialog-wrapper-hidden\" : \"ysp-dialog-wrapper\" },\n            _this.props.children\n         );\n      }, _temp), _possibleConstructorReturn(_this, _ret);\n   }\n   // constructor(props){\n   //    super(props);\n   //    this.smoothFixedLayout = new SmoothFixedLayout();\n   // }\n\n\n   return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    ADialog: function () {
      var selfTemplate = "import {Component} from 'react';\n/*\n---------------------------\n\u5982\u4F55\u5F15\u7528\uFF1Aimport {Dialog} from 'ysp-custom-components';\n---------------------------\n*/\nexport default class extends Component{\n   // constructor(props){\n   //    super(props);\n   //    this.smoothFixedLayout = new SmoothFixedLayout();\n   // }\n   render = () =>{\n       return( \n         <div \n           ref=\"dialog\"\n           className={this.props.close ===undefined ?\"ysp-dialog-wrapper-top\":(this.props.close === true?\"ysp-dialog-wrapper-hidden\":\"ysp-dialog-wrapper-top\")}>\n              {this.props.children}\n           </div>\n       );\n   }\n   // componentDidMount(){\n   //   //this.smoothFixedLayout.listen(this.refs.dialog);\n   // }\n   // componentWillUnmount(){\n   //   //this.smoothFixedLayout.destroy();\n   //   //this.smoothFixedLayout = null;\n   // }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*\n---------------------------\n\u5982\u4F55\u5F15\u7528\uFF1Aimport {Dialog} from 'ysp-custom-components';\n---------------------------\n*/\nvar _class = function (_Component) {\n   _inherits(_class, _Component);\n\n   // componentDidMount(){\n   //   //this.smoothFixedLayout.listen(this.refs.dialog);\n   // }\n   // componentWillUnmount(){\n   //   //this.smoothFixedLayout.destroy();\n   //   //this.smoothFixedLayout = null;\n   // }\n   function _class() {\n      var _ref;\n\n      var _temp, _this, _ret;\n\n      _classCallCheck(this, _class);\n\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n         args[_key] = arguments[_key];\n      }\n\n      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n         return React.createElement(\n            \"div\",\n            {\n               ref: \"dialog\",\n               className: _this.props.close === undefined ? \"ysp-dialog-wrapper-top\" : _this.props.close === true ? \"ysp-dialog-wrapper-hidden\" : \"ysp-dialog-wrapper-top\" },\n            _this.props.children\n         );\n      }, _temp), _possibleConstructorReturn(_this, _ret);\n   }\n   // constructor(props){\n   //    super(props);\n   //    this.smoothFixedLayout = new SmoothFixedLayout();\n   // }\n\n\n   return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);