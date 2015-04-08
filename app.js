(function() {

  return {
    events: {
      'app.activated': 'show_pao_de_queijo'
    },

    show_pao_de_queijo: function() {
      this.switchTo('paodequeijo');
    }
  };

}());
