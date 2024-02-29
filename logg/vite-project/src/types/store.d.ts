type RootState = ReturnType<typeof import('../Store').getState>
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: function;
}
