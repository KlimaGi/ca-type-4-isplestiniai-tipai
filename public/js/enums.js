"use strict";
console.log('enums');
{
    let LoadingState;
    (function (LoadingState) {
        LoadingState["beforeLoad"] = "beforeLoad";
        LoadingState["loading"] = "loading";
        LoadingState["loaded"] = "loaded";
    })(LoadingState || (LoadingState = {}));
    const englishLoadingStates = {
        [LoadingState.beforeLoad]: 'Before Load',
    };
    const IsLoading = (state) => state === LoadingState.loading;
    console.log('', IsLoading(LoadingState.beforeLoad));
}
//# sourceMappingURL=enums.js.map