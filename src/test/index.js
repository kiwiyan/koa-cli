
const Collection = require('../model');
const connect = require('../model/connect');


connect('mongodb://192.168.182.85:32017/test'); //测试本地： mongodb的默认端口是27017

// add
let answerReal = new  Collection.AnswerReal({
    iwixinId: 'kiwiBoyi',
    weixinInfo: {pic:'xx.png',name: '',text: '', gender: 'male'},
    answers: [0,2,0,1,3,2,3,1,2,3],
    cellphone: 13269329123,
    questions: [{title: 'xx?', options: ['a','b','c','d']}],
    ext: {ext1:'ext1-info',ext2: 'ext1-info'}
});
answerReal.save((err, doc) => {
    if (err) {
        console.log('保存失败')
    } else {
        console.log('save ok: ', doc)
    }
})