var SKILL_API_VERSION = '1';

var parseAjaxResponse = parseJson;
var showMsg = cbShowMsg;
var showMsgAutoHide = cbShowMsgAutoHide;

$(function() {
  // Hide the OEditor widget which just lists the skill id's in a list in text
  // inputs, and replace it with the skill widget div.
  var skillPanelDiv = $('div.skill-panel');
  var skillEditorForOeditor = new SkillEditorForOeditor(cb_global);
  skillPanelDiv.hide();
  skillPanelDiv.after(skillEditorForOeditor.element());

  skillEditorForOeditor.init();
});