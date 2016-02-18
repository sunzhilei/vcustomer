import Reflux from 'reflux';

let TodoActions = Reflux.createActions([
    'getAll',
    'addItem',
    'updateItem',
    'deleteItem'
]);

let TodoStore = Reflux.createStore({
    items: [],
    listenables: [TodoActions],
    onGetAll: function () {
        $.get('/all', function (data) {
            this.items = data;
            this.trigger(this.items);
        }.bind(this));
    },
    onAddItem: function (model) {
        $.post('/add', model, function (data) {
            this.items.unshift(data);
            this.trigger(this.items);
        }.bind(this));
    },
    onUpdateItem: function (model, index) {
        $.post('/update', model, function (data) {
            this.items[index] = data;
            this.trigger(this.items);
        }.bind(this));
    },
    onDeleteItem: function (model, index) {
        $.post('/delete', model, function (data) {
            this.items.splice(index, 1);
            this.trigger(this.items);
        }.bind(this));
    }
});

module.exports = TodoStore;