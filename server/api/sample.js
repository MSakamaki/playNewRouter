exports = module.exports = function(app) {

  /* seed */
  var beans = require('../json/sample.json');
  var index = beans.length + 1;

  // API
  app.get('/api/sample', function(req, res) {
    res.json(beans);
  });

  app.get('/api/beans/:id', function(req, res) {
    var id = req.params.id;
    var ret = void 0;
    beans.forEach(function(menber) {
      if (menber.id === parseInt(id)) ret = menber;
    });
    if (ret) res.json(ret);
    else res.status(404).send('No Data Found!');
  });

  app.put('/api/beans/:id', function(req, res) {
    var body = req.body;
    var id = req.params.id;
    if (!body.brand) res.status(200).send('valid data brand!');
    beans.forEach(function(bean) {
      if (bean.id === parseInt(id)) {
        bean.name = body.name;
      }
    });
    res.status(200).send('amount!');
  });

  app.post('/api/beans', function(req, res) {
    var body = req.body;
    if (!body.brand) res.status(200).send('valid data brand!');
    var date = new Date();
    beans.push({
      id: index++,
      name: body.name
    });
    res.status(200).send('amount!');
  });

  app.delete('/api/beans/:id', function(req, res) {
    var id = req.params.id;
    beans = beans.filter(function(menber) {
      return (menber.id !== parseInt(id));
    });
    res.status(200).send('amount!');
  });
};
