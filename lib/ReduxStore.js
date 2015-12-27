var ReduxStore = (function () {
    function ReduxStore(store) {
        this.store = store;
        if (!store) {
            throw new Error('store cannot be undefined. Make sure to pass the redux store as the only argument of the constructor.');
        }
        if (ReduxStore.initialized) {
            throw new Error('Only one redux store can exist per application.');
        }
        ReduxStore.initialized = true;
    }
    ReduxStore.prototype.getState = function () {
        return this.store.getState();
    };
    ReduxStore.prototype.dispatch = function (action) {
        this.store.dispatch(action);
    };
    ReduxStore.prototype.subscribe = function (listener) {
        var _this = this;
        this.store.subscribe(function () { return listener(_this.getState()); });
    };
    ReduxStore.initialized = false;
    return ReduxStore;
})();
exports.ReduxStore = ReduxStore;
//# sourceMappingURL=ReduxStore.js.map