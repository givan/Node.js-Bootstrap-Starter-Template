exports.index = function(req, res){
  res.render('index', {debug:true, title:'George first page is here', response : { name : 'Response name is rendered!!', value: 11}});
};