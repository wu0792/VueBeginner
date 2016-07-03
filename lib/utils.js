utils = {};
utils.functionComment = function(fn){
    return fn.toString().replace(/^.*\r?\n?.*\/\*|\*\/([.\r\n]*).+?$/gm,'');
};