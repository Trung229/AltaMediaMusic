export function removeAccents(str: string) {
  var AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}

export function isUpper(char: string) {
  var AccentsMap = [
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'DĐ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'IÌỈĨÍỊ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'YỲỶỸÝỴ',
  ];
  return AccentsMap.some(text => text.indexOf(char) >= 0);
}
