'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control15_drffwW: function getData_control15_drffwW(elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl19_8buIgU: function doAction_uiControl19_8buIgU(data, elem) {
      if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl19_8buIgU: function getTemplate_uiControl19_8buIgU() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u7535\u5B50\u94B1\u5305",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u7535\u5B50\u94B1\u5305", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control17_rxRbOL: function (elem) {
      if (!elem) {
        return [];
      }if (elem) {
        var data = [];$(elem).find("#walletmoney-content").find(".content").each(function (i, d) {
          var obj = { top: '', textTop: [], textBottom: [] };obj.top = $(d).find(".contenttop").text().trim();$(d).find(".contenttext-top").each(function (i1, d1) {
            obj.textTop.push(d1.textContent.replace(/:/ig, ''));
          });$(d).find(".contenttext-center:last-child").each(function (i2, d2) {
            obj.textBottom.push(d2.textContent);
          }); //obj.textTop.push($(d).find(".contenttext-top").text());
          data.push(obj);
        });return data;
      }
    },
    doAction_uiControl21_GzBmya: function (data, elem) {},
    getTemplate_uiControl21_GzBmya: function getTemplate_uiControl21_GzBmya() {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function(){\n    var data=this.props.customData;\n    var _this=this;\n    var content= data.length == 0 ? <div>\u65E0\u6570\u636E</div>: data && data.map(function(d,i){\n      return(\n      \t<div className="ysp-wallet-content">\n          <div className="ysp-wallet-content-left">\n          \t<div className="ysp-wallet-top">{d.top}</div>\n            <div className="ysp-wallet-bottom">\n              <p className="ysp-wallet-bottom-left">\n              \t<span>{d.textTop[0]}</span>\n                <span>{d.textBottom[0]}</span>\n              </p>\n              <p className="ysp-wallet-bottom-right">\n              \t<span>{d.textTop[1]}</span>\n                <span>{d.textBottom[1]}</span>\n              </p>\n            </div>\n          </div>\n          <div className="ysp-wallet-content-right">\n          \t<p>\n            \t<div className=\'ysp-wallet-right-top\'>{d.textBottom[2]}</div>\n              <div className=\'ysp-wallet-right-bottom\'>{d.textTop[2]}</div>\n            </p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div className=\'ysp-wallet-wrapper\'>\n        {content}\n      </div>\n    )\n  }\n});\n';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.customData;\n    var _this = this;\n    var content = data.length == 0 ? React.createElement(\n      "div",\n      null,\n      "\\u65E0\\u6570\\u636E"\n    ) : data && data.map(function (d, i) {\n      return React.createElement(\n        "div",\n        { className: "ysp-wallet-content" },\n        React.createElement(\n          "div",\n          { className: "ysp-wallet-content-left" },\n          React.createElement(\n            "div",\n            { className: "ysp-wallet-top" },\n            d.top\n          ),\n          React.createElement(\n            "div",\n            { className: "ysp-wallet-bottom" },\n            React.createElement(\n              "p",\n              { className: "ysp-wallet-bottom-left" },\n              React.createElement(\n                "span",\n                null,\n                d.textTop[0]\n              ),\n              React.createElement(\n                "span",\n                null,\n                d.textBottom[0]\n              )\n            ),\n            React.createElement(\n              "p",\n              { className: "ysp-wallet-bottom-right" },\n              React.createElement(\n                "span",\n                null,\n                d.textTop[1]\n              ),\n              React.createElement(\n                "span",\n                null,\n                d.textBottom[1]\n              )\n            )\n          )\n        ),\n        React.createElement(\n          "div",\n          { className: "ysp-wallet-content-right" },\n          React.createElement(\n            "p",\n            null,\n            React.createElement(\n              "div",\n              { className: "ysp-wallet-right-top" },\n              d.textBottom[2]\n            ),\n            React.createElement(\n              "div",\n              { className: "ysp-wallet-right-bottom" },\n              d.textTop[2]\n            )\n          )\n        )\n      );\n    });\n    return React.createElement(\n      "div",\n      { className: "ysp-wallet-wrapper" },\n      content\n    );\n  }\n});';
    }
  });
})(window, ysp);