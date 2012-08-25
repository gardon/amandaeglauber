var thumbs = new Thumbs;

var FrontView = Backbone.View.extend({
  template: _.template('<img src="<%= uri %>" />'),

  el: $('#front'),


  initialize: function(){
    this.model.bind('thumbs:selected', this.render, this);
  },

  render: function(){
    $(this.el).html(this.template(this.model.selectedThumb().toJSON()));
  }
});


var frontview = new FrontView({model:thumbs});



var ThumbView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<img src="<%= uri %>" class="<%= state %>" />'),
  events: {
    "click" : "selectThumb"
  },
  initialize: function(){
    this.model.bind('change', this.render, this);
  },
  render: function(){
    console.log('rendering');
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },
  selectThumb: function(){

    thumbs.select(this.model);
  }
});

var AppView = Backbone.View.extend({
  el: $("#container"),
  render: function(){
    _.each(new Thumbs().fetch(),
        function(t){
          $('div ul').append( new ThumbView({model: t}).render().el)
        });
  }
});

